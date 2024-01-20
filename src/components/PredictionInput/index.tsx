import React, {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';
import {Hint} from "@site/src/components/Hint";
import {IHintOption} from "@site/src/components/Hint/IHintOption";

import './index.css';
import WordPredictor from "@site/src/utils/WordPredictor/predict";

function PredictionInput({onPrediction, onChange}: {
    onChange?: (text: string) => void,
    onPrediction?: (prediction: Array<{word: string, probability: number}>, text: string) => void
}) {

    const [sl, setSL] = useState(5);
    const [predictor, setPredictor] = useState(undefined);
    const [model, setModel] = useState(undefined);
    const [tokenizer, setTokenizer] = useState(undefined);
    const [text, setText] = useState('');
    const [options, setOptions] = React.useState<Array<IHintOption>>([]);

    useEffect(() => {
        async function loadModel() {
            const model = await tf.loadLayersModel(`models/starwars-lstm/${sl}/starwars/model.json`);
            setModel(model);
        }

        loadModel();
    }, []);

    useEffect(() => {
        async function loadTokenizer() {
            // load json file that contains a tokenization of the dataset
            const response = await fetch(`models/starwars-lstm/${sl}/starwars/token.json`)
            const data = await response.json()
            setTokenizer(data);
        }

        loadTokenizer();
    }, []);

    useEffect(() => {
        if (model === undefined || tokenizer === undefined) {
            return;
        }

        const newPredictor = new WordPredictor(model, tokenizer, sl);
        if (text !== undefined && text !== '') {
            newPredictor.predict(text).then((prediction) => {
                if (prediction.length === 0) {
                    return;
                }
                const predictedText = text + " " + prediction[0].word
                setOptions([{label: predictedText , id: predictedText}])
            });

        }
        setPredictor(newPredictor);

    }, [model, tokenizer]);

    if (!predictor) {
        return <div>Bitte warten, das Modell wird geladen</div>
    }

    return (
        <div className='input-wrapper'>
            <Hint
                options={options}
                allowTabFill allowEnterFill
            >
                <input
                    className='input-with-hint'
                    value={text}
                    placeholder={'Möge die Macht mit euch sein...'}
                    onChange={async e => {
                        const newText = e.target.value;
                        setText(newText)
                        if (onChange) {
                            onChange(newText);
                        }
                        if (newText === undefined || newText === '') {
                            setOptions([]);
                            return;
                        }
                        const prediction = await predictor.predict(newText);
                        if (onPrediction) {
                            onPrediction(prediction, newText);
                        }

                        if (prediction.length === 0) {
                            return;
                        }
                        const predictedText = newText + " " + prediction[0].word
                        setOptions([{label: predictedText , id: predictedText}])
                    }}/>
            </Hint>
        </div>

    );
}

export default PredictionInput;
import React from 'react';
import {Bar} from "react-chartjs-2";

export interface ClassificationResult {word: string, confidence: number}

export const ClassificationResultCharts: React.FC<{ classificationResult: ClassificationResult[] }> = props => {

    if (!props.classificationResult || !props.classificationResult.length) return (<div>Kein Ergebnis</div>);

    const colors = [
        '#1e8a24',
        '#b4a207',
        '#e04646'
    ];
    return (
        <div>

            <Bar
                options={{
                    scales: {
                        y: {
                            min: 0,
                            max: 1,
                        }
                    }
                }}
                data={
                {
                    labels: props.classificationResult.map((item, index) => {
                        const names = item.word.split(", ");
                        if (names && names.length) return `${names[0]}`;
                        return item.word;
                    }),
                    datasets: [{
                        label: 'Result',
                        backgroundColor: colors,
                        data: props.classificationResult.map((item) => {
                            return item.confidence
                        }),
                    }]
                }
            }/>

            <div>
                {props.classificationResult.map((item, index) => {
                    return <div>
                        <span>{item.word}: </span>
                        <span>{Math.floor(item.confidence*10000)/10000}</span>
                    </div>
                })}

            </div>
        </div>
    );
};
import React from 'react';
import 'chart.js/auto';
import {ClassificationResultCharts} from "@site/src/components/ClassificationResultCharts";

function PredictionAnalyse(props: {
    classificationResult: {
        word: string,
        confidence: number
    }[],
    text: string
}) {
    return (
        <>
            <h4>Eingabe: {props.text}</h4>
            <ClassificationResultCharts classificationResult={props.classificationResult}/>
        </>

    );
}

export default PredictionAnalyse;
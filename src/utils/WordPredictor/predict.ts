import * as tf from "@tensorflow/tfjs";


class WordPredictor {
    model;
    tokenizer;
    sl;
    constructor(model, tokenizer, sl=3) {
        this.model = model;
        this.tokenizer = tokenizer;
        this.sl = sl;
    }

    getIndexWord(index) {
        return Object.keys(this.tokenizer).find(key => this.tokenizer[key] === index);
    }

    public async predict(text) {
        const sequence = text.trim().split(' ').map(word => {
            let tmp = word.toLowerCase();
            return this.tokenizer[tmp] || 0
        });
        // Sequence should have length 3, if not pad it with 0's
        while (sequence.length < this.sl) {
            sequence.unshift(0);
        }
        while (sequence.length > this.sl) {
            sequence.shift();
        }
        const paddedSequence = tf.tensor([sequence], [1, sequence.length]);

        // Predict the next word
        const prediction = this.model.predict(paddedSequence);
        // const predictedIndex = prediction.argMax(-1).dataSync()[0];

        // Get the top 3 predicted indices and their probabilities
        const topK = prediction.topk(3);
        const indices = topK.indices.dataSync();
        const probabilities = topK.values.dataSync();

        // Map indices to words
        let predictions = [];
        for (let i = 0; i < indices.length; i++) {
            let predictedWord = this.getIndexWord(indices[i]);
            predictions.push({ word: predictedWord, confidence: probabilities[i] });
        }


        return predictions;
    }
}
export default WordPredictor;
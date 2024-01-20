import * as tf from "@tensorflow/tfjs-node";
import fs from "fs";
import {describe, expect, beforeAll, it} from '@jest/globals';
import predictNextWords from "./predict";
import WordPredictor from "./predict";

/**
 * Gute Beispiele:
 * Input: Die Macht
 * - Die Macht ist es die dem jedi seine stärke gibt
 * Input: Helft mir
 * - Helft mir obi wan kenobi ihr seid meine letzte hoffnung
 * Input: Ich denke dass
 * - Ich denke dass uns unsere lage einen großen sympathie bonus einbringen wird
 */

describe('predictNextWords', () => {


    it('should möge die macht mit dir sein', async () => {

        const basePath = './static/models/starwars-lstm/3/starwars';
        const model = await tf.loadLayersModel(`file://${basePath}/model.json`);
        const tokenizer = JSON.parse(fs.readFileSync(`${basePath}/token.json`, 'utf8'));

        const out = new WordPredictor(model, tokenizer);
        const mit = await out.predict("Möge die Macht");
        expect(mit[0].word).toBe("mit");
        expect(mit[0].confidence).toBeGreaterThan(0.9);

        const dir = await out.predict("Möge die Macht mit");
        expect(dir[0].word).toBe("dir");

        const sein = await out.predict("Möge die Macht mit dir");
        expect(sein[0].word).toBe("sein");

    });

    it('should möge die macht mit dir sein 5', async () => {

        const basePath = './static/models/starwars-lstm/5/starwars';
        const model = await tf.loadLayersModel(`file://${basePath}/model.json`);
        const tokenizer = JSON.parse(fs.readFileSync(`${basePath}/token.json`, 'utf8'));

        const out = new WordPredictor(model, tokenizer, 5);
        const mit = await out.predict("Möge die Macht");
        expect(mit[0].word).toBe("mit");
        expect(mit[0].confidence).toBeGreaterThan(0.9);

        const dir = await out.predict("Möge die Macht mit");
        expect(dir[0].word).toBe("euch");

        const sein = await out.predict("Möge die Macht mit dir");
        expect(sein[0].word).toBe("sein");

    });

    it('should möge die macht mit dir sein 10', async () => {

        const basePath = './static/models/starwars-lstm/10/starwars';
        const model = await tf.loadLayersModel(`file://${basePath}/model.json`);
        const tokenizer = JSON.parse(fs.readFileSync(`${basePath}/token.json`, 'utf8'));

        const out = new WordPredictor(model, tokenizer, 10);

        const sein = await out.predict("Möge die Macht mit dir");
        expect(sein[0].word).toBe("sein");

    });

});
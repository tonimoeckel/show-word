import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import PredictionInput from "@site/src/components/PredictionInput";
import React, {useState} from "react";
import Row from "@site/src/components/Row";
import Col from '../components/Col';
import PredictionAnalyse from "@site/src/components/PredictionAnalyse";
import Prompt from "@site/src/components/Prompt";

function PredictionDemo() {
  const {siteConfig} = useDocusaurusContext();

  const [latestPrediction, setLatestPrediction] = useState<{
      predictions: Array<{
        word: string,
        confidence: number
      }>,
      text: string
  }>(undefined);

  return (
      <>
          <header className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                  <div>
                      <img style={{width: "50%", maxWidth: 300}} src={"img/SHOWWORD.svg"}/>
                  </div>
                  <PredictionInput onChange={(text) => {
                      if (text === undefined || text === '') {
                          setLatestPrediction(undefined);
                          return;
                      }
                  }} onPrediction={(predictions, text) => {
                      setLatestPrediction({predictions, text});
                  }}/>
              </div>
          </header>
          <main>
              {!latestPrediction || !latestPrediction.predictions.length ? <>
                <h3>Bitte geben Sie etwas in das Input ein um Wortvorhersagen zu generieren</h3>
                <Row>
                    <Col>
                        <h4>Gute prompts</h4>
                        <Prompt>
                            Möge die Macht mit
                        </Prompt>
                        <Prompt>
                            Helft mir
                        </Prompt>
                        <Prompt>
                            Immer zu zweit
                        </Prompt>
                    </Col>
                    <Col>
                        <h4>Schlechte prompts</h4>

                        <Prompt>
                            Michse sein sehr
                        </Prompt>
                        <Prompt>
                            Ich bin ein Pilot
                        </Prompt>
                        <Prompt>
                            Lass uns ein Rennen
                        </Prompt>
                    </Col>
                </Row>
              </> : <PredictionAnalyse classificationResult={latestPrediction.predictions} text={latestPrediction.text} /> }

          </main>
      </>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Das ist ein Word Prediction Beispiel">
      <PredictionDemo />
    </Layout>
  );
}

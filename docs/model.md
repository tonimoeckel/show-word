---
sidebar_position: 3
---

# Modellierung

## Google Colab Notebook

Das Google Colab Notebook enthält den Code für das Training des Modells. Es kann direkt im Browser ausgeführt werden, ohne dass eine lokale Installation von Python oder TensorFlow erforderlich ist. Das Notebook enthält auch eine ausführliche Dokumentation, die den Code und die einzelnen Schritte erklärt.

Link zum Google Colab Notebook: [Google Colab Notebook](https://colab.research.google.com/drive/1Z_ws8I-ZbeQcCWamUdQR73e_qV9oGGpo?usp=sharing)


## Datenquelle und -verarbeitung
- **Datenbeschreibung:** Die verwendeten Daten für das Training des Modells bestehen aus einem Mitschnitt der Star Wars Saga und enthält Texte aus den Filmen, u.a. den kompletten Mitschnitt aus Star Wars Episode 1. Der Text kann hier heruntergeladen werden: [Download](/models/starwars-lstm/starwars.txt). Quelle: [Readable](https://de.allreadable.com/mv176a0E9gB)
- **Vorverarbeitung:** Die Daten wurden durch Entfernen von Satz und Sonderzeichen vorbereitet.

### Tokenisierung

Die Tokenisierung ist der Prozess der Aufteilung eines Textes in einzelne Wörter oder Token. In diesem Beispiel wurde die Tokenisierung mit der Tokenizer-Klasse von TensorFlow.js durchgeführt. Die Tokenizer-Klasse bietet eine einfache Möglichkeit, einen Text in einzelne Wörter zu zerlegen und die Wörter in eine Sequenz von Zahlen zu konvertieren, die als Eingabe für das Modell verwendet werden können.

- **Vocabulary Size:** Die Größe des Vokabulars beträgt 3558 Wörter.
- **Sequenzdatenlänge:** Die Sequenzdaten beträgt 19010 Wörter.
```

import json

tokenizer = Tokenizer()
tokenizer.fit_on_texts([data])

# saving the tokenizer for predict function
pickle.dump(tokenizer, open('token.pkl', 'wb'))

with open( 'token.json' , 'w' ) as file:
    json.dump( tokenizer.word_index , file )

sequence_data = tokenizer.texts_to_sequences([data])[0]
sequence_data[:15]

```

Die Token werden außerdem als JSON-Datei gespeichert, um sie später für die Vorhersage im JavaScript zu verwenden.

## Modellarchitektur

### Modelltyp LSTM

Das Modell basiert auf einer Sequential-Architektur, die mehrere Schichten, einschließlich Embedding- und LSTM-Schichten, sowie Dense-Schichten beinhaltet. Das Modell ist in diesem Beispiel mit einer Sequenz-Länge von 10 Wörtern ausgelegt.

| Layer (type)        | Output Shape       | Param #   |
|---------------------|--------------------|-----------|
| embedding_1 (Embedding) | (None, 10, 10)    | 35580     |
| lstm_2 (LSTM)           | (None, 10, 1000)  | 4044000   |
| lstm_3 (LSTM)           | (None, 1000)      | 8004000   |
| dense_2 (Dense)         | (None, 1000)      | 1001000   |
| dense_3 (Dense)         | (None, 3558)      | 3561558   |

Total params: 16,646,138 (63.50 MB)

- **Konfiguration:** Das Modell wurde mit folgenden Parametern konfiguriert: [Parameterdetails einfügen].

![Model Architecture](/models/starwars-lstm/model.png)

## Training des Modells

### Berechnungszeiten bei Unterschiedlichen Sequenzlängen
Es konnte beobachtet werden, dass die Berechnungszeiten meines Modells stark von der Sequenzlänge abhängen. Bei der Verwendung von Sequenzen mit 3 bis 5 Wörtern dauerte eine Modellberechnung über 100 Epochen ungefähr 4 Minuten. Als ich jedoch die Sequenzlänge auf 10 Wörter erhöhte, stieg die Berechnungszeit signifikant an, auf etwa 15 Minuten für dieselbe Anzahl von Epochen. Diese Zunahme der Berechnungszeit ist ein klarer Hinweis darauf, wie zusätzliche Wörter in der Sequenz die Komplexität und damit die Rechenanforderungen erhöhen.

### Overfitting bei Längeren Sequenzen
Ein weiterer interessanter Aspekt, den ich festgestellt habe, ist das Overfitting bei längeren Sequenzen. Speziell bei einer Sequenzlänge von 10 Wörtern bemerkte ich, dass mein Modell zu sehr auf die Trainingsdaten fixiert war und schlecht auf neue, unbekannte Daten generalisierte. Dies könnte darauf zurückzuführen sein, dass das Modell mit der längeren Sequenz zu viele Details aus den Trainingsdaten erfasst, was zu einer Überanpassung führt.

### Underfitting bei Kürzeren Sequenzen
Im Gegensatz dazu führten kürzere Sequenzen von 3 Wörtern zu einem Underfitting. In diesem Szenario konnte das Modell nicht genügend relevante Muster aus den Trainingsdaten lernen, was zu einer unzureichenden Vorhersagefähigkeit führte. Die begrenzte Kontextinformation, die durch kürzere Sequenzen bereitgestellt wird, scheint für das Modell nicht ausreichend zu sein, um effektiv zu lernen und genaue Vorhersagen zu treffen.

```python
from tensorflow.keras.callbacks import ModelCheckpoint

checkpoint = ModelCheckpoint("next_words.h5", monitor='loss', verbose=1, save_best_only=True)
model.compile(loss="categorical_crossentropy", optimizer=Adam(learning_rate=0.001))
model.fit(X, y, epochs=100, batch_size=64, callbacks=[checkpoint])
``` 

- **Trainingsprozess:** Das Training wurde über 100 Epochen durchgeführt, wobei mit einer Lernrate von 0,001 und einer Batch-Größe von 64 gearbeitet wurde. Die Trainingszeit betrug bei einer Sequenzlänge von 3 ca. 4 Minuten und bei einer Länge von 10 ca. 15 Minuten.

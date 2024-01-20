---
sidebar_position: 1
---

# Intro

## Show Word Prediction

Diese Anwendung soll Wörter aus dem Star Wars Universum vorhersagen. Dazu wurde ein LSTM-Modell mit TensorFlow.js trainiert. Das Modell wurde mit einem Mitschnitt der Star Wars Saga trainiert und kann Wörter aus dem Star Wars Universum vorhersagen. Die Anwendung ist in React geschrieben und nutzt TensorFlow.js, um das trainierte Modell im Browser auszuführen.

### Vorhersage

Auf der Startseite der Anwendung kann ein Wort eingegeben werden. Nachdem das Wort eingegeben wurde, wird eine Liste mit Vorschlägen angezeigt. Die Vorschläge werden mit dem trainierten Modell vorhergesagt. Die Vorschläge werden mit einer Wahrscheinlichkeit angezeigt, die angibt, wie wahrscheinlich es ist, dass das Wort das nächste Wort im Satz ist.
Mit **"Tab"** oder **"Enter"** kann nach eingabe der Leertaste das nächste Wort mit der höchsten Wahrscheinlichkeit ausgewählt werden.

### Analyse

Unter der Eingabe befindet sich ein Diagramm, das die Wahrscheinlichkeit der einzelnen Vorschläge anzeigt. Das Diagramm wird mit der Bibliothek [ChartJS](https://www.chartjs.org/) erstellt.

### Benutzerdefinierte Einstellungen

Die Anwendung bietet die Möglichkeit, die Farbgebung zur Hellen oder Dunklen Seite der Macht zu ändern. Die Einstellungen werden mit der Bibliothek [React Context](https://reactjs.org/docs/context.html) gespeichert.
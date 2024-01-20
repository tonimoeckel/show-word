---
sidebar_position: 2
---

# Aufgabenstellung

## Überblick

Trainieren eines Language Models (LM) zur Wortvorhersage mit einem Recurrent Neural Network (RNN) und dem TensorFlow.js (TFJS) Framework/API.

Trainieren Sie ein Recurrent Neural Network (RNN) und ein Feed-Forward Neural Network (FFNN) mit einem Zeitfenster als Input auf der Basis der Daten (siehe unten) zur Wortvorhersage (Next Word Prediction). Sie können auch einen anderen Datensatz selber aussuchen, oder eigene Texte, z. B. Ihre E-Mails, zum Training verwenden.

### Experimente und Fragestellungen

1) Experimentieren Sie mit der Netzwerkarchitektur. Dokumentieren und begründen Sie Ihre finale Architektur.

2) Notieren Sie als Resultat, wie oft die Vorhersage genau richtig ist (k=1), und wie oft das korrekte nächste Wort unter den ersten k Worten, die sie vorhersagen liegt, mit k gleich 5, 10, 20 und 100. Sie können auch die Perplexity (siehe Hintergrund) als Maß Ihrer Resultate nutzen.

3) Verglichen Sie die Peformance von Recurrent Neural Network (RNN) und Feed-Forward Neural Network (FFNN) mit einem Zeitfenster.

4) Können Sie Ihre ursprünglichen Trainingsdaten (ggf. Ihre privaten E-Mails) mittels des trainierten Models rekonstruieren?  (überlegen Sie, ob sich daraus ein Datenschutzproblem ergibt).

**Resultate und Diskussion**: Stellen Sie auf einer separaten HTML-Seite Ihre Experimente mit den zugehörigen Resultaten übersichtlich dar und diskutieren Sie diese (was hat funktioniert, was nicht und warum wohl).

**Hinweise**: 

Wortvorhersage ist eine Multi-Class Classification. Nutzen Sie als Objektivfunktion den Categorical Cross-Entropy Loss. Sie können auch LSTM als RNN einsetzen.

Tensorflow.js bringt einen Converter mit, der es ermöglicht, mit Python erstellte Modelle in ein von Tensorflow.js nutzbares Format zu bringen. Dazu reicht im Terminal der Befehl: 

```
tensorflowjs\_converter --input\_format=keras model.h5 ./web\_model
```


**Interaktion**: Der Nutzer kann Wort für Wort einen Text eingeben und bekommt kontinuierlich Vorschläge für das angefangene Wort, oder für das nächste Wort, nachdem ein Leerzeichen eingegeben wurde.

**Visualisierung**: Visualisieren Sie die Ergebnisse als Diagramm. Sie können, dazu außer der API von TF, z. B. folgende Bibliotheken nutzen: [Plotly](https://plotly.com/javascript/), [D3](https://d3js.org/).

**Fehlerbehandlung, Test und QA**: Stellen Sie sicher, dass die Eingabe das richtige Format hat.

**Dokumentation**: Nutzen Sie eine separate HTML-Seite, die über ein Link/Button von Ihrer Anwendung aus erreichbar ist, zur Dokumentation Ihrer Resultate.

1) Interaktion: Listen Sie die möglichen Interaktionen mit den zugehörigen Tasten auf der HTML-Seite auf. 

2) Technisch: Listen Sie alle verwendeten Frameworks auf und erklären Sie kurz (1–3 Sätze) wozu Sie diese verwenden. Dokumentieren Sie technische Besonderheiten Ihrer Lösung.

3) Fachlich: Erläutern Sie Ihre Implementierung der Logik und alles, was für ihre Lösung wichtig ist (Ansatz, Resultate, Quellen, etc.)

4) Quellen: Dokumentieren Sie Ihre Quellen, Benutzungshinweise und Anmerkungen (falls notwendig).


**User Experience (UX)**:  Beachten Sie die Human/Mensch-Computer-Interaction (HCI) Kriterien beim Interaktionsdesign: [ISO 9241-11 Anforderungen an die Gebrauchstauglichkeit](https://de.wikipedia.org/wiki/ISO_9241#ISO_9241-11_Gebrauchstauglichkeit:_Begriffe_und_Konzepte) und [ISO 9241-110 Interaktionsprinzipien](https://de.wikipedia.org/wiki/ISO_9241#ISO_9241-110_Interaktionsprinzipien). Ihre Anwendung sollte funktional (Aufgabenangemessenheit) und benutzerfreundlich (Usability) und mit angemessenem Feedback und einer \[kontextsensitive\] Hilfe ausgestattet sein.

**Gestaltung**: Achten Sie auf eine sinnvolle Semantik bei der Farbgestaltung und ein übersichtliches Layout. Siehe dazu: [material.io - Design Guidance and Code](https://material.io/)
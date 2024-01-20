---
sidebar_position: 4
---

# Webanwendung

## Überblick

Die Webanwendung wurde mit React und Docusaurus entwickelt. React ist ein JavaScript-Framework, das für die Entwicklung von Benutzeroberflächen verwendet wird. Docusaurus ist ein Framework, das die Erstellung, Bereitstellung und Verwaltung von dokumentationszentrierten Websites erleichtert. Die Webanwendung ist in Docusaurus integriert, um die Dokumentation der Anwendung zu ermöglichen.

### Repository

Das Repository für die Web App ist hier zu finden: [GitHub](https://github.com/tonimoeckel/show-word-prediction

### Dependencies

#### Hauptabhängigkeiten

- `@docusaurus/core` (3.1.0): Ein Kernmodul von Docusaurus, einem Projekt zur Erstellung, Bereitstellung und Verwaltung von dokumentationszentrierten Websites. Es ist das Hauptframework, auf dem die Anwendung läuft.

- `@docusaurus/preset-classic` (3.1.0): Ein Standard-Set von Plugins und Themes für Docusaurus. Es erleichtert das Styling und die Einbindung grundlegender Funktionen in die Docusaurus-App.

- `@mdx-js/react` (^3.0.0): Ermöglicht die Verwendung von MDX, einer Kombination aus Markdown und React-Komponenten, was das Schreiben von interaktiven Dokumenten vereinfacht.

- `react-chartjs-2` (^5.2.0): Eine React-Wrapper-Bibliothek für Chart.js, die für die Darstellung von Diagrammen und Datenvisualisierungen verwendet wird.

- `@tensorflow/tfjs` (^4.16.0): TensorFlow.js, eine Bibliothek zum Definieren, Trainieren und Ausführen von Machine-Learning-Modellen im Browser.

- `clsx` (^2.0.0): Eine kleine Bibliothek zur bedingten Zusammenstellung von Klassen-Strings, nützlich für dynamische Styling-Optionen in React-Komponenten.

- `prism-react-renderer` (^2.3.0): Wird für Syntax-Highlighting in Codeblöcken verwendet, was besonders nützlich für Dokumentationsseiten ist.

- `react` (^18.0.0) / `react-dom` (^18.0.0): React-Bibliothek und deren DOM-Bindungen, die Grundlage für die Entwicklung von Benutzeroberflächen in der Anwendung.

#### Entwicklungsabhängigkeiten

- `@docusaurus/module-type-aliases`, `@docusaurus/tsconfig`, `@docusaurus/types` (3.1.0): Diese Pakete bieten TypeScript-Unterstützung und Typendefinitionen speziell für Docusaurus-Projekte.

- `@jest/globals` (^29.7.0), `jest` (^29.7.0), `ts-jest` (^29.1.1): Jest und zugehörige Pakete für das Testen von TypeScript-Anwendungen, einschließlich der Einbindung von Jest in das TypeScript-Ökosystem.

- `typescript` (~5.2.2): Die TypeScript-Sprache selbst, ein streng typisiertes Superset von JavaScript, das für die Entwicklung verwendet wird.

# Aufgabe 2: Beantworte folgende Fragen zu Kapitel 1 im Skript

## 2.1 Warum ist testen so wichtig Software zu testen, beziehe dich dabei auf den SDLC

Testen ist ein essenzieller Bestandteil des Software Development Life Cycle (SDLC), da es dazu beiträgt, die Qualität der Software sicherzustellen und Fehler frühzeitig zu erkennen.
Im SDLC durchläuft eine Software verschiedene Phasen wie Analyse, Design, Implementierung und Wartung.

Ohne angemessenes Testing können Fehler in jeder Phase unbemerkt bleiben und sich bis zur Implementierung durchschleichen, was zu teuren und zeitaufwändigen Korrekturen führen kann.
Durch Testen können Fehler rechtzeitig identifiziert und behoben werden, was letztendlich die Zuverlässigkeit, Leistung und Benutzerfreundlichkeit der Software verbessert und das Risiko von Fehlfunktionen oder Sicherheitslücken minimiert.

## 2.2 Guck dir den Abschnitt 1.4.3 aus dem Skript nochmal genauer an und beziehe dich auf unsere TodoApp. Welche Testmittel haben wir im Rahmen der TodoApp rückblickend verwendet?

Im Abschnitt 1.4.3 des Skripts wird auf Testmittel eingegangen, die für das Testen von Software verwendet werden können. Rückblickend auf unsere TodoApp haben wir verschiedene Testmittel verwendet, um die Funktionalität, Benutzerfreundlichkeit und Qualität der Anwendung zu überprüfen. Dazu gehören unter anderem:

    Testfälle: Wir haben Testfälle erstellt, um sicherzustellen, dass alle Funktionen der TodoApp ordnungsgemäß funktionieren. Diese Testfälle decken verschiedene Szenarien ab, die von Benutzern während der Verwendung der Anwendung auftreten können.

    Testdaten: Um sicherzustellen, dass die TodoApp unter verschiedenen Bedingungen funktioniert, haben wir unterschiedliche Testdaten verwendet. Dies ermöglichte es uns, die Robustheit und Stabilität der Anwendung zu überprüfen.

    Testwerkzeuge: Wir haben verschiedene Testwerkzeuge wie Testautomatisierungsframeworks, Bug-Tracking-Systeme und Code-Analysetools eingesetzt, um den Testprozess effizienter zu gestalten und die Testabdeckung zu verbessern.
    Beispiele hierfür sind:
    - Jest: Jest ist ein beliebtes Testframework für JavaScript, das speziell für React-Anwendungen entwickelt wurde. Es bietet eine einfache Syntax zum Schreiben von Tests und unterstützt Funktionen wie automatische Testausführung, Mocking und Snapshot-Tests. Jest wird häufig verwendet, um Unit-Tests, Integrationstests und Snapshot-Tests für React-Komponenten durchzuführen.
    - SuperTest: SuperTest ist eine Bibliothek für das Testen von HTTP-Anwendungen in Node.js. Es ermöglicht das Senden von HTTP-Anfragen an eine Anwendung und das Testen der erhaltenen Antworten. SuperTest ist besonders nützlich für das Testen von RESTful-APIs und bietet Funktionen wie einfache Integration mit Testframeworks wie Mocha oder Jest, Unterstützung für authentifizierte Anfragen und das Testen von Anwendungs-Endpunkten.

### Diese Testmittel haben uns geholfen, die Qualität der TodoApp sicherzustellen und potenzielle Probleme frühzeitig zu erkennen.

## 2.3 Was bedeutet die Unabhängigkeit von Testern und welche Stufen habt ihr heute kennengelernt?

Die Unabhängigkeit von Testern bezieht sich darauf, dass Tester keine vorherigen Rollen im Entwicklungsprozess der Software hatten und somit keine persönlichen oder beruflichen Interessen haben, die ihre Testergebnisse beeinflussen könnten. Die Unabhängigkeit der Tester ist wichtig, um eine objektive Bewertung der Softwarequalität sicherzustellen und mögliche Konflikte zwischen Entwicklern und Testern zu vermeiden.

Die heute kennengelernten Stufen der Unabhängigkeit von Testern sind:

    Selbstständige Tester: Diese Tester arbeiten unabhängig von Entwicklern und sind nicht in den Entwicklungsprozess involviert. Sie bewerten die Softwarequalität aus einer externen Perspektive.

    Entwicklertester: Diese Tester sind Teil des Entwicklungsteams, aber ihre Hauptaufgabe besteht darin, die von ihnen entwickelten Funktionen zu testen. Sie können Einsicht in den Code haben, aber sie sollten dennoch eine unabhängige Sichtweise bewahren, um mögliche Fehler oder Probleme zu identifizieren.

    Benutzer- oder Akzeptanztester: Diese Tester repräsentieren die Endbenutzer der Software und prüfen, ob die Anwendung ihren Anforderungen und Erwartungen entspricht. Sie spielen eine wichtige Rolle bei der Validierung der Software aus Sicht der Benutzerfreundlichkeit und Funktionalität.

### Zusammenfassend lässt sich sagen, dass die Unabhängigkeit der Tester eine entscheidende Rolle für die Qualitätssicherung in der Softwareentwicklung spielt. Durch die verschiedenen Stufen der Unabhängigkeit, nämlich selbstständige Tester, Entwicklertester und Benutzer- oder Akzeptanztester, wird sichergestellt, dass die Software aus verschiedenen Blickwinkeln gründlich überprüft wird.

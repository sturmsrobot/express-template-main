# Erstelle eine Dateibasierte Dokumentation. Das bedeutet ihr schreibt für jede Datei, welche geändert/hinzugefügt wurde eine Überschrift und beschreibt warum wir die Änderungen vorgenommen haben.

### index.js

- Hinzugefügt: Import der `todoSequelize`-Instanz und der `app`-Konfiguration aus `./src/server`.
- Warum: Um den Code aufzuräumen und die Hauptlogik in separaten Dateien zu organisieren. Der Import der `app`-Konfiguration aus `./src/server` verbessert die Lesbarkeit und Wartbarkeit des Codes.

### package.json

- Geändert: Hinzugefügtes Jest-Testskript, Konfiguration für Jest-Setup-Datei und Hinzufügen von `supertest` und `jest` als Entwicklungspakete.
- Warum: Um Jest als Testframework zu verwenden und das Testen der Anwendung zu ermöglichen. `supertest` wird für das Testen von HTTP-Anforderungen verwendet, während `jest` als Testframework dient. Die Konfiguration in `jest.setup.js` ermöglicht die Initialisierung der Testdatenbank vor dem Ausführen der Tests.

### src/server.js

- Hinzugefügt: Konfiguration der Express-App inklusive Middleware und Routen.
- Warum: Um die Hauptkonfiguration der Express-App zu organisieren und die App bereitzustellen, die in anderen Teilen des Codes verwendet wird.

### tests/routes/todos/TodosRoute.test.js

- Hinzugefügt: Test für die Route `/v1/todos/all`.
- Warum: Um sicherzustellen, dass die Route korrekt auf Anfragen reagiert und JSON-Daten zurückgibt.

### tests/setup/jest.setup.js

- Hinzugefügt: Konfiguration für das Jest-Setup, einschließlich der Initialisierung der Testdatenbank.
- Warum: Um sicherzustellen, dass die Testdatenbank vor dem Ausführen der Tests initialisiert und vorbereitet wird, um korrekte Testergebnisse zu gewährleisten.

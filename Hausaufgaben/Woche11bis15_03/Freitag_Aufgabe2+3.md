# CTFL Tag 2 - Testen während des Softwareentwicklungslebenszyklus

## Aufgabe 2: Überprüft euer Wissen, möglichst ohne nachzulesen, indem ihr versucht euer Wissen bei den Lernzielen der heutigen Inhalte anzuwenden. Interpretiert die Lernziele als Anforderungen an euch und versucht passende Antworten zu finden.

## Lernziele für Reviews (Kapitel 3):

## 3.2 Managementreviews und Audits

### TM-3.2.1 (K2): Ich kann die Schlüsselmerkmale von Managementreviews und Audits erläutern.

Managementreviews und Audits sind formelle Überprüfungen von Prozessen und Produkten, die dazu dienen, die Qualität sicherzustellen und Verbesserungsmöglichkeiten zu identifizieren. Dabei werden wichtige Aspekte wie Einhaltung von Standards, Effizienz, Effektivität und Compliance bewertet. Managementreviews sind oft strategischer und breiter angelegt, während Audits spezifischer und detaillierter sein können.

## 3.3 Management von Reviews

### TM-3.3.1 (K4): Ich kann ein Projekt analysieren, um die geeignete Review-Art auszuwählen und einen Plan für die Durchführung von Reviews zu definieren, um die korrekte Durchführung, Nachverfolgung und Nachvollziehbarkeit sicherzustellen.

### TM-3.3.2 (K2): Ich kann erläutern, welche Bedeutung die Qualifikation und der erforderliche Zeitaufwand für die Teilnahme an Reviews haben.

Bei der Planung von Reviews ist es wichtig, die Art des Projekts, seine Anforderungen und den Entwicklungsprozess zu berücksichtigen, um die geeignete Review-Art auszuwählen. Ein detaillierter Plan für die Durchführung von Reviews sollte erstellt werden, der die Auswahl der Teilnehmer, den Zeitpunkt, die Durchführung und die Nachverfolgung der Ergebnisse umfasst. Die Qualifikation der Teilnehmer und der erforderliche Zeitaufwand für ihre Teilnahme sind entscheidende Faktoren für den Erfolg der Reviews.

## 3.4 Metriken für Reviews

### TM-3.4.1 (K3): Ich kann Prozess- und Produktmetriken definieren, die in Reviews verwendet werden.

Für die Bewertung von Reviews können verschiedene Metriken verwendet werden, um die Qualität des Prozesses und der Produkte zu bewerten. Dazu gehören Metriken wie Fehlerdichte, Testabdeckung, Anzahl der gefundenen Fehler und Zeit bis zur Fehlerbehebung.

## 3.5 Management von formalen Reviews

### TM-3.5.1 (K2): Ich kann anhand von Beispielen die Merkmale eines formalen Reviews erklären.

Formale Reviews folgen einem strukturierten Prozess, der bestimmte Rollen, Verantwortlichkeiten und Dokumentation erfordert. Typische Merkmale sind formale Einladungen, vorbereitete Checklisten, spezifizierte Rollen wie Moderator und Gutachter sowie formelle Protokolle zur Dokumentation der Ergebnisse.

## Lernziele für das Fehler- und Abweichungsmanagement (Kapitel 4):

## 4.2 Fehlerlebenszyklus und Softwarelebenszyklus

### TM-4.2.1 (K3): Ich kann einen Fehlermanagementprozess für eine Testorganisation entwickeln, einschließlich der Abläufe für Fehlerberichte, die zur Überwachung und Steuerung der Fehler in einem Projekt im gesamten Testlebenszyklus verwendet werden können.

### TM-4.2.2 (K2): Ich kann erläutern, welcher Prozess und welche Teilnehmer für ein effektives Fehlermanagement erforderlich sind.

Ein effektiver Fehlermanagementprozess umfasst die Erfassung, Priorisierung, Verfolgung und Behebung von Fehlern im gesamten Testlebenszyklus. Dies erfordert klare Abläufe, Verantwortlichkeiten und Werkzeuge zur Fehlerverwaltung. Ein Fehlermanagement-Ausschuss kann eingerichtet werden, um strategische Entscheidungen im Zusammenhang mit Fehlern zu treffen.

## 4.3 Informationen im Fehlerbericht

### TM-4.3.1 (K3): Ich kann die Daten und Informationen über Fehlerklassen definieren, die im Fehlermanagementprozess gesammelt werden sollten.

Fehlerberichte enthalten wichtige Informationen über die Art, den Ursprung, die Schwere und die Auswirkungen von Fehlern. Dies umfasst auch Daten über die Häufigkeit, die Verteilung und die Trends bei Fehlermeldungen.

## 4.4 Bewerten der Prozessreife anhand von Fehlerberichten

### TM-4.4.1 (K2): Ich kann erklären, wie Fehlerberichtsstatistiken dazu verwendet werden können, um die Prozessreife des Test- und des Softwareentwicklungsprozesses zu bewerten.

Fehlerberichtsstatistiken ermöglichen es, die Wirksamkeit des Fehler- und Testprozesses zu bewerten und Verbesserungsmöglichkeiten zu identifizieren. Dies kann zur Identifizierung von Engpässen, ineffizienten Prozessen und Qualitätsproblemen beitragen.

## Aufgabe 3: 
## 3.1: Ich habe einen magischen Taschenrechner, bei dem Rechnungen mit Zahlen zwischen 20 und 30 einfach nicht funktionieren wollen. Kleinere Zahlen wie -20 und -30 oder größere Zahlen wie 120 und 130 funktionieren allerdings. Welche Äquivalenzklassen würdest du hier wählen? (Kapitel 4.2.1)

In diesem Szenario kann die Äquivalenzklasseneinteilung wie folgt sein:

- `Äquivalenzklasse 1`: Zahlen zwischen -30 und 19 (nicht funktionierende Bereich)
- `Äquivalenzklasse 2`: Zahlen zwischen 20 und 30 (funktionierende Bereich)
- `Äquivalenzklasse 3`: Zahlen zwischen 31 und 120 (funktionierende Bereich)
- `Äquivalenzklasse 4`: Zahlen größer als 120 (funktionierende Bereich)

## 3.2: Betrachte die von dir gewählten Äquivalenzklassengrenzen. Bestimme für jede dieser Äquivalenzklassen jeweils alle Überdeckungselemente. Einmal für 2-Wert-Grenzwertanalyse und einmal für 3-Wert-Grenzwertanalyse. (Kapitel 4.2.2)

Die Überdeckungselemente für 2-Wert-Grenzwertanalyse wären:

- `Äquivalenzklasse 1`: -30, 19
- `Äquivalenzklasse 2`: 20, 30
- `Äquivalenzklasse 3`: 31, 120
- `Äquivalenzklasse 4`: 121, 130

Die Überdeckungselemente für 3-Wert-Grenzwertanalyse wären:

- `Äquivalenzklasse 1`: -30, -31, 19
- `Äquivalenzklasse 2`: 20, 19, 30
- `Äquivalenzklasse 3`: 31, 120, 121
- `Äquivalenzklasse 4`: 121, 130, 131

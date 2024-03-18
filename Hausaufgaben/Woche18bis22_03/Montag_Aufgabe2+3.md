# CTFL Tag 4 - Whitebox vs. Blackbox Testing,...

## Aufgabe 1: Themen des heutigen Vormittags
Heute haben wir Kapitel 4 abgeschlossen und sind in Kapitel 5 eingetaucht. Die Schwerpunkte lagen auf verschiedenen Testverfahren und -ansätzen:

### White-Box-Testverfahren (4.3): 
Dabei haben wir das Anweisungstest- und Zweigtestverfahren besprochen sowie die Bedeutung von White-Box-Tests erläutert. Beispiele hierfür wurden ebenfalls diskutiert.

### Erfahrungsbasierter Test (4.4): 
Hier standen intuitive Testfallermittlung, explorative Tests und checklistenbasierter Test im Fokus. Es wurde verdeutlicht, wie diese Ansätze angewendet werden können.

### Auf Zusammenarbeit basierende Testansätze (4.5): 
Wir haben uns damit beschäftigt, wie User Stories in Zusammenarbeit mit Entwicklern und Fachvertretern geschrieben werden können. Auch die verschiedenen Möglichkeiten zur Formulierung von Abnahmekriterien wurden behandelt, sowie die Anwendung von abnahmetestgetriebener Entwicklung (ATDD) zur Ableitung von Testfällen.

## Aufgabe 2: Geht bitte die Anforderungen zu dem Kapitel 4 durch und fasst die Fragen und Anforderungen in euren eigenen Worten zusammen: Dabei geht zum Beispiel bei dem Überbegriff White-Box-Testing auch nochmal auf die allgemeine Bedeutung des Begriffs White-Box-Testing ein.

### White-Box-Testverfahren (4.3):

+ `Anweisungstest`: Dieser Test überprüft jede einzelne Anweisung im Quellcode, um sicherzustellen, dass sie korrekt ausgeführt wird. Zum Beispiel könnte man in einem Programm überprüfen, ob jede "if"-Anweisung die erwartete Bedingung korrekt auswertet.

+ `Zweigtest`: Hierbei werden alle möglichen Ausführungspfade einer Methode oder Funktion getestet, um sicherzustellen, dass jeder Zweig korrekt ausgeführt wird. Ein Beispiel wäre das Testen einer Funktion mit verschiedenen Eingabewerten, um sicherzustellen, dass sowohl der "if"- als auch der "else"-Zweig korrekt funktionieren.

+ `Bedeutung des White-Box-Tests`: White-Box-Tests ermöglichen eine detaillierte Überprüfung des internen Aufbaus einer Software. Sie sind besonders nützlich, um Fehler in bestimmten Codepfaden oder Bedingungen aufzudecken, die während des normalen Betriebs möglicherweise nicht offensichtlich sind.

### Erfahrungsbasierter Test (4.4):

+ `Intuitive Testfallermittlung`: Dieser Ansatz basiert auf dem Erfahrungswissen des Testers und zielt darauf ab, Testfälle auf der Grundlage von Intuition und Erfahrung zu erstellen, um potenzielle Probleme aufzudecken.

+ `Explorativer Test`: Hier werden Tests durchgeführt, während gleichzeitig das System erkundet wird, um unerwartete Fehler zu finden. Es geht darum, die Software aus verschiedenen Blickwinkeln zu betrachten und dabei mögliche Schwachstellen aufzudecken.

+ `Checklistenbasierter Test`: Bei dieser Methode werden vordefinierte Checklisten verwendet, um sicherzustellen, dass bestimmte Aspekte der Software getestet werden. Dies hilft dabei, keinen wichtigen Testfall zu übersehen und eine umfassende Testabdeckung sicherzustellen.

### Auf Zusammenarbeit basierende Testansätze (4.5):

+ `Schreiben von User Stories`: User Stories werden in enger Zusammenarbeit mit Entwicklern und Fachvertretern erstellt, um die Anforderungen an die Software klar und verständlich zu definieren.

+ `Verschiedene Möglichkeiten zum Schreiben von Abnahmekriterien`: Dies beinhaltet das Festlegen klarer Kriterien dafür, wann ein Feature als akzeptabel betrachtet wird. Dies kann durch klare Definitionen, Beispiele oder Akzeptanzkriterien erfolgen.

+ `Abnahmetestgetriebene Entwicklung (ATDD)`: Bei ATDD werden Tests verwendet, um die Anforderungen zu formulieren. Diese Tests dienen als Spezifikationen und werden vor der Implementierung geschrieben, um sicherzustellen, dass das entwickelte Feature den Erwartungen entspricht.


## Aufgabe 3: User Stories und Tasks - Verfasst eine Feature der Todo App als User Story und versucht daraus verschiedene Tasks (Tickets) zu erstellen.

# User Story: 
Als Benutzer möchte ich meine ToDo-Liste nach Priorität sortieren können, um meine Aufgaben besser organisieren zu können.

# Tasks (Tickets):

+ Implementiere die Funktion zum Verschieben von Aufgaben in der Benutzeroberfläche.
+ Aktualisiere die Datenbankstruktur, um die Priorität jeder Aufgabe zu speichern.
+ Schreibe Unit-Tests, um sicherzustellen, dass die Priorität korrekt gespeichert und abgerufen wird.
+ Führe Integrationstests durch, um sicherzustellen, dass das Sortieren der Aufgaben ordnungsgemäß funktioniert.
+ Überprüfe die Benutzeroberfläche, um sicherzustellen, dass die neue Funktion benutzerfreundlich ist und die Erwartungen der Benutzer erfüllt.

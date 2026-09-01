# Technikduell – Anleitung

Die Technik-Schwester des Physik-Hausduells: dieselbe App, eigener
Fragenpool, eigene Häuser, eigene Klassen. Schüler wählen sich mit
Raumcode, Erfindername und Haus ein; die Punkte laufen dauerhaft auf
Haus- und Erfinderkonten — getrennt je Klasse.

## Die drei Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die App (identisch mit dem Hausduell, nur Titel geändert — nie anfassen) |
| `fragen.js` | **alles Pflegbare**: Fragen, Klassen, PIN |
| `ANLEITUNG.md` | dieses Dokument |

## Setup (5 Minuten, weil Firebase schon steht)

Das Technikduell nutzt **dasselbe Firebase-Projekt wie das Hausduell** —
die Zugangsdaten stehen schon in `fragen.js`. Die Konten kommen sich
nicht in die Quere, weil sie je Klasse geführt werden („9" und „10"
gegen „6a" und „6b").

1. Ordner `Technikduell` neben den Ordner `Hausduell` ins
   GitHub-Repository hochladen.
2. QR-Code auf `…/Technikduell/` erzeugen und als
   `qr_technikduell.png` in den `img/`-Ordner des jeweiligen Kapitels
   legen (`Design Vorgaben:Templates 3/scraps/<kapitel>/img/`) — die
   Reservefolie im Deck zieht ihn beim nächsten Bau automatisch;
   solange er fehlt, zeigt sie eine gestrichelte Platzhalterkarte.
3. Fertig. Lehrer-PIN: **8580** (wie die DIN der Fertigungsverfahren).

## Unterschiede zum Physik-Hausduell

| | Hausduell (Physik) | Technikduell |
|---|---|---|
| Klassen | 6a, 6b | 9, 10 |
| Häuser | Mechanica, Optica, Thermodynamica, Electra | Konstrukta 📐, Fabrica 🏭, Structura 🌉, Automatica 🤖 |
| Namen | Physikerinnen und Physiker | Erfinderinnen und Ingenieure (Zuse bis Roebling) |
| PIN | 3141 | 8580 |
| „Stunde" | Physikstunde | **Kapitel** (Stunde 1 = Kapitel 1.1 usw.) |

## Ablauf im Unterricht

Wie beim Hausduell: Lehrerbereich → PIN → Klasse → Kapitel ankreuzen →
Runde starten → Raumcode an den Beamer → nach der Runde **„Punkte auf
die Jahreskonten übertragen"**. Im Technik-Deck steht der QR-Code auf
der Reservefolie hinter dem Experten der Woche — die Runde läuft nur,
wenn Zeit bleibt.

## Fragen je Kapitel

Der Pool startet mit Kapitel 1.1 bis 1.3 (je 11 bis 13 Fragen:
Merkwissen, Anwendung, Konfusius). Bei jedem neuen Kapitelbau liefert
Claude die passenden Fragenblöcke zur Abnahme mit; nach der Freigabe
werden sie hier eingefügt und die Datei neu hochgeladen — Konten und
QR-Code bleiben unberührt.

Format wie beim Hausduell (`stunde` = Kapitelnummer fortlaufend,
`kategorie` wissen/konfusius, `richtig` = Index ab 0). Konfusius soll
manchmal recht haben, sonst ist die Antwort zu leicht zu raten.

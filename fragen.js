// ============================================================
// TECHNIKDUELL - Konfiguration und Fragenpool
// Eigenständige Schwester des Physik-Hausduells: gleiche App
// (index.html), eigene Häuser, eigene Klassen, eigener Fragenpool.
// Diese Datei ist die EINZIGE, die gepflegt werden muss.
//
// stunde 1 = Kapitel 1.1 · stunde 2 = Kapitel 1.2 · stunde 3 = 1.3
// Je Kapitel 10 bis 13 Fragen: Merkwissen, Anwendung und Konfusius.
// Konfusius hat manchmal recht - sonst ist die Antwort zu leicht.
// ============================================================

const KONFIG = {
  // Dasselbe Firebase-Projekt wie das Physik-Hausduell. Die Konten
  // laufen je Klasse getrennt; die Klassen "9" und "10" kommen den
  // Physikklassen "6a"/"6b" nicht in die Quere.
  firebase: {
    apiKey: "AIzaSyAHHK372VvjL0ryBWIaHNBxHgikxFG5aBY",
    authDomain: "hausduell-c96bb.firebaseapp.com",
    databaseURL: "https://hausduell-c96bb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hausduell-c96bb",
    storageBucket: "hausduell-c96bb.firebasestorage.app",
    messagingSenderId: "765487373707",
    appId: "1:765487373707:web:cc383fd0ad34e2e064e38e"
  },

  // PIN nach DIN 8580 - leicht zu merken, anders als in Physik
  lehrerPin: "8580",

  klassen: ["9", "10"],

  haeuser: [
    { id: "konstrukta", name: "Konstrukta", emoji: "📐", farbe: "#F5CB5E" },
    { id: "fabrica",    name: "Fabrica",    emoji: "🏭", farbe: "#B7E9E4" },
    { id: "structura",  name: "Structura",  emoji: "🌉", farbe: "#FFC9C9" },
    { id: "automatica", name: "Automatica", emoji: "🤖", farbe: "#E2D4FE" }
  ],

  forschernamen: [
    "Zuse", "Lilienthal", "Benz", "Diesel", "Otto", "Daimler",
    "Siemens", "Bosch", "Junkers", "Lovelace", "Hopper", "Lamarr",
    "Gutenberg", "Watt", "Stephenson", "Eiffel", "Brunel", "Wankel",
    "Roebling", "Ayrton", "Clarke", "Reis", "Linde", "Leibniz",
    "Senefelder", "Mannesmann", "Duesberg", "Papin", "Newcomen", "Bauer"
  ]
};

// ============================================================
// FRAGENPOOL TECHNIK KLASSE 9
// ============================================================

const FRAGEN = [

  // ---------- Stunde 1: Kapitel 1.1 Technikbegriff und Historie ----------
  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Wann ist ein Gebilde im Sinne der Technik technisch?",
    antworten: ["Wenn es mit Strom betrieben wird",
                "Wenn es künstlich hergestellt UND auf einen Nutzen ausgerichtet ist",
                "Wenn es aus Metall besteht",
                "Wenn es beweglich ist"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Woran unterscheidet man Werkzeug, Maschine und Automat?",
    antworten: ["An Größe und Gewicht",
                "Am Preis",
                "An zwei Leitfragen: Woher kommt die Energie? Wer trifft die Entscheidungen?",
                "Am Alter der Erfindung"],
    richtig: 2, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Ein Akkuschrauber ist eine Maschine, weil …",
    antworten: ["… er elektrisch ist.",
                "… Fremdenergie antreibt, aber der Mensch die Führung behält.",
                "… ein Programm den Ablauf steuert.",
                "… er ein Werkstück bearbeitet."],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Was macht einen Personenaufzug zum Automaten?",
    antworten: ["Der Elektromotor",
                "Die Steuerung entscheidet über die Fahrt, ohne dass ein Mensch führt",
                "Das hohe Gewicht",
                "Die Sicherheitsbremse"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Welcher gehört NICHT zu den fünf Treibern technischer Entwicklung?",
    antworten: ["Wirtschaftlicher Wettbewerb",
                "Gesellschaftlicher Bedarf",
                "Der reine Zufall",
                "Staatliche und militärische Förderung"],
    richtig: 2, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Der Elektromotor war um 1900 bekannt und setzte sich im Auto trotzdem nicht durch. Welcher Treiber fehlte?",
    antworten: ["Wissenschaftliche Entdeckungen",
                "Ressourcen und Infrastruktur - es fehlte das Stromnetz",
                "Gesellschaftlicher Bedarf",
                "Wirtschaftlicher Wettbewerb"],
    richtig: 1, zeit: 30 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Welche Leitinnovation trägt die Industrialisierung (1750 bis 1900)?",
    antworten: ["Das Messinstrument",
                "Energie aus Brennstoff",
                "Das steuerbare Bauteil",
                "Zeichnung und Berechnung"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Welche Epoche folgt auf die Renaissance?",
    antworten: ["Mittelalter", "Barock", "Industrialisierung", "Antike"],
    richtig: 1, zeit: 20 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "wissen",
    frage: "Warum war der Zeitstrahl an der Tafel NICHT maßstabsgerecht?",
    antworten: ["Aus Platzmangel an der Tafel",
                "Sonst wäre alles ab 1750 ein einziger Strich",
                "Weil die Jahreszahlen unsicher sind",
                "Damit jede Gruppe gleich viel Platz hat"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Ein Biberdamm ist Technik, denn er ist künstlich gebaut und nützt dem Biber.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 1, thema: "Technikbegriff und Historie", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Der Faustkeil aus der Steinzeit ist Technik - ganz ohne Strom.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 0, zeit: 25 },

  // ---------- Stunde 2: Kapitel 1.2 Technische Systeme ----------
  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Welche drei Umsatzarten setzt ein technisches System um?",
    antworten: ["Strom, Wasser, Luft",
                "Stoff, Energie, Information",
                "Eingabe, Verarbeitung, Ausgabe",
                "Kraft, Weg, Zeit"],
    richtig: 1, zeit: 20 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Wofür steht das EVA-Prinzip?",
    antworten: ["Energie, Verlust, Abwärme",
                "Eingabe, Verarbeitung, Ausgabe",
                "Eingang, Verteilung, Antrieb",
                "Erfassen, Verstehen, Anwenden"],
    richtig: 1, zeit: 20 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Was ist die Systemgrenze?",
    antworten: ["Das Gehäuse aus Blech",
                "Die gedachte Hülle - jede Größe, die sie kreuzt, ist Eingangs- oder Ausgangsgröße",
                "Die maximale Belastung des Systems",
                "Der Abstand zum nächsten Gerät"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Die Programmwahl an der Waschmaschine ist …",
    antworten: ["… eine Eingangsgröße der Art Information.",
                "… eine Ausgangsgröße der Art Information.",
                "… eine Eingangsgröße der Art Energie.",
                "… keine Größe, sondern ein Bauteil."],
    richtig: 0, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Warum zählt die Abwärme zu den Ausgangsgrößen, obwohl niemand sie will?",
    antworten: ["Sie zählt nicht, weil sie nutzlos ist",
                "Sie kreuzt die Systemgrenze nach außen - was hinausgeht, ist Ausgangsgröße",
                "Weil sie sich messen lässt",
                "Weil sie das Gerät beschädigen kann"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Wie wird eine Gesamtfunktion formuliert?",
    antworten: ["Als Verb und Objekt, ohne ein Bauteil zu nennen",
                "Als Liste aller Bauteile",
                "Als Werbeslogan",
                "Als Zahl mit Einheit"],
    richtig: 0, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "„Feder einbauen“ - Funktion oder Lösung?",
    antworten: ["Funktion, weil ein Verb darin steht",
                "Lösung, weil ein Bauteil genannt wird - die Funktion wäre „Kraft speichern“",
                "Beides zugleich",
                "Weder noch"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "wissen",
    frage: "Welche Teilfunktion hat der Getränkeautomat, die dem Kaffeevollautomaten fehlt?",
    antworten: ["Wasser erwärmen",
                "Restgeld zurückgeben",
                "Getränk ausgeben",
                "Auswahl entgegennehmen"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: „Kaffee mahlen“ ist ein Lösungsprinzip.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 2, thema: "Technische Systeme", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Man kann ein Gerät beschreiben, ohne es zu öffnen - allein über das, was hinein- und herausgeht.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 0, zeit: 25 },

  // ---------- Stunde 3: Kapitel 1.3 Stoff- und Energieflüsse ----------
  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Welche vier Gruppen von Werkstoffeigenschaften unterscheiden wir?",
    antworten: ["Farbe, Form, Gewicht, Preis",
                "Sinnesmerkmale, mechanische, physikalische und Fertigungseigenschaften",
                "Hart, weich, schwer, leicht",
                "Metalle, Kunststoffe, Hölzer, Verbundstoffe"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "„Gut spanbar“ gehört zu welcher Eigenschaftsgruppe?",
    antworten: ["Sinnesmerkmal",
                "Mechanische Eigenschaft",
                "Physikalische Eigenschaft",
                "Fertigungseigenschaft"],
    richtig: 3, zeit: 20 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Eine Handyhülle entsteht im Spritzguss. Welche Hauptgruppe nach DIN 8580?",
    antworten: ["Urformen", "Umformen", "Trennen", "Fügen"],
    richtig: 0, zeit: 20 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Eine Feile wird gehärtet. Welche Hauptgruppe ist das?",
    antworten: ["Beschichten",
                "Stoffeigenschaft ändern",
                "Umformen",
                "Fügen"],
    richtig: 1, zeit: 20 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Was zeigt ein Stoffflussdiagramm?",
    antworten: ["Den Stromverbrauch eines Geräts",
                "Den Weg des Werkstoffs durch die Fertigung, mit Abzweigen für Abfall",
                "Die Kosten je Prozessschritt",
                "Den Aufbau eines Getriebes"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Wie berechnet man den Wirkungsgrad η?",
    antworten: ["Zugeführte Energie geteilt durch Nutzenergie",
                "Nutzenergie geteilt durch zugeführte Energie",
                "Nutzenergie mal zugeführte Energie",
                "Zugeführte Energie minus Verluste, mal 100"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Ein Motor nimmt 1000 J auf und gibt 850 J als Bewegung ab. Sein Wirkungsgrad?",
    antworten: ["0,15", "0,85", "1,18", "850"],
    richtig: 1, zeit: 30 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Generator (η = 0,95) treibt eine LED-Lampe (η = 0,40). Gesamtwirkungsgrad?",
    antworten: ["0,95 + 0,40 = 1,35",
                "0,95 − 0,40 = 0,55",
                "0,95 · 0,40 = 0,38",
                "Der bessere Wert zählt: 0,95"],
    richtig: 2, zeit: 30 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "wissen",
    frage: "Wohin geht die Energie, die nicht als Nutzenergie herauskommt?",
    antworten: ["Sie wird vernichtet",
                "Sie verlässt das System meist als Abwärme",
                "Sie bleibt im Gerät gespeichert",
                "Sie fließt ins Stromnetz zurück"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Im Motor wird Energie verbraucht - danach ist sie weg.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 1, zeit: 25 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Der Gesamtwirkungsgrad einer Wandlerkette ist kleiner als der schlechteste Einzelwert.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 0, zeit: 30 },

  { stufe: 9, stunde: 3, thema: "Stoff- und Energieflüsse", kategorie: "konfusius",
    frage: "Professor Konfusius behauptet: Ein Wirkungsgrad von 1,2 ist bei sehr guten Maschinen möglich.",
    antworten: ["Konfusius hat recht", "Konfusius irrt"],
    richtig: 1, zeit: 25 }

];

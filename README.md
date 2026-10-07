# Schwenningen Token – Website V4

Stand: 7. Oktober 2026

Statische Website für das private Community-Projekt Schwenningen Token. HTML, CSS und JavaScript werden über GitHub Pages unter https://www.schwenningen-token.de/ veröffentlicht.

## Seiten und Dateien

- `index.html`: Startseite und Einstieg in die Token-Verteilung.
- `projekt.html`: Drei kurze Abschnitte zu Idee, Gemeinschaft und Teilnahme; Doppelcoin zwischen den Texten, kompakte Vision und Einstieg in die Community.
- `community.html` und `community-galerie-social.html`: Community und Galerie mit Original-Downloads.
- `regionalpartner.html`: Regionalpartner mit zwei optimierten Partnerpostern.
- `honor.html`: Auszeichnungen und Ehrencoin.
- `tokenomics.html`, `wallet.html`, `faq.html`: Transparenz, kurze Phantom-Anleitung und Fragen.
- `404.html`: Fehlerseite.
- `header.html` und `footer.html`: gemeinsame HTML-Bausteine, keine eigenständigen Seiten.
- `assets/css/`: aktuelle Stylesheets; `assets/js/main.js`: gemeinsame Interaktionen.
- `tools/build.py`: Synchronisierung der gemeinsamen Bausteine und Erstellung von `dist`.

## Navigation und Footer bearbeiten

1. `header.html` oder `footer.html` ändern.
2. Im Website-Ordner `python3 tools/build.py` ausführen (Python 3 erforderlich; alternativ `npm run build`).
3. Die geänderten HTML-Dateien und benötigten Assets prüfen und in das Repository übernehmen.

Das Werkzeug schreibt die gemeinsamen Inhalte in die markierten Bereiche der Inhaltsseiten. Navigation und Footer sind deshalb ohne zusätzliche Dateiabrufe vorhanden. Das Skript verändert die HTML-Dateien im Projektordner und kopiert HTML und Assets nach `dist`.

Ein bestehender `dist`-Ordner wird nur ergänzt und überschrieben: Gelöschte Quelldateien werden dort nicht automatisch entfernt. Für einen bereinigten Export muss `dist` vor dem Build geleert werden. Das Skript kopiert die Domain-Datei `CNAME` nicht nach `dist`.

## Bilder und Ladezeiten

Für die Anzeige werden optimierte WebP-Dateien verwendet; Galerie-Downloads verweisen weiterhin auf die PNG-Originale in `assets/galerie/`.

| Einsatz | Aktuelle Bilddateien | Übertragungsgröße |
| --- | --- | --- |
| Galerie: 25 Motive | `assets/previews/galerie/*.webp` (die 25 Galerie-Motive) | Zusammen ca. 2,87 MB statt 68,37 MB |
| Auszeichnungen: drei Coin-Abbildungen | `assets/previews/galerie/swhnr-22f836914b.webp` | Eine gemeinsam verwendete Datei mit ca. 152 KB statt 2,49 MB |
| Projekt: Doppelcoin | `assets/previews/galerie/doppelcoin.webp` | Ca. 107 KB |
| Regionalpartner: zwei Poster | `assets/previews/galerie/partner-strohpark-d700fc25.webp` und `partner-albverein-4983b4fb.webp` | Zusammen ca. 293 KB statt 5,54 MB |

Die neuen Vorschauen haben höchstens 800 Pixel an der längsten Seite und wurden mit WebP-Qualität 80 erstellt. Die Bildproportionen bleiben erhalten. Verzögertes Laden (`loading="lazy"`) bleibt bei Galerie, Doppelcoin und Partnerpostern aktiv.

Neue Bilder benötigen eigene optimierte Vorschauen; `tools/build.py` erzeugt diese nicht. Bei einem Bildwechsel die Bildpfade und Größenangaben im HTML prüfen. Originale beibehalten, sofern sie als Download oder anderweitig verlinkt sind.

Die Projektseite verwendet zusätzlich `assets/css/project.css` für die kompakte Gliederung und eine einspaltige Darstellung der Vision auf kleinen Bildschirmen.

## Browser- und Lesezeichen-Symbol

Alle zehn vollständigen HTML-Seiten verweisen auf `/assets/coin-icon-v3.png` als Favicon und Apple-Touch-Icon (180 × 180 Pixel). Der neue Dateiname dient der Aktualisierung gegenüber älteren gespeicherten Symbolen. Bei einem künftigen Motivwechsel wieder einen neuen Dateinamen verwenden. Bereits gespeicherte Lesezeichen können das alte Symbol länger behalten.

## Verteilungsstand

Stand: 7. Oktober 2026, nach Angabe des Projektbetreibers: **240 verteilte Token** und **7 Tokenholder**. Gegenüber dem vorherigen Stand wurden weitere 100 Token an einen zusätzlichen Holder verteilt. Die Gesamtmenge bleibt bei 165.000 Token.

Diese Kennzahlen und ihr Standdatum werden manuell in `tokenomics.html` gepflegt. Bei einer Änderung auch diesen Abschnitt aktualisieren.

## Veröffentlichung

Repository: https://github.com/nkbbg82y54-crypto/SchwenningenCoin

Änderungen auf `main` werden über den GitHub-Pages-Ablauf „pages build and deployment“ veröffentlicht. Nach dem Hochladen unter „Actions“ prüfen, ob die Veröffentlichung erfolgreich abgeschlossen wurde. Für den bestehenden Ablauf werden die HTML-Dateien und `assets` im Repository-Hauptverzeichnis gepflegt; ein lokaler Build allein veröffentlicht nichts.

Die im Repository vorhandene `CNAME`-Datei für die eigene Domain erhalten. Die Fehlerseite und die Symbol-Verweise verwenden Pfade ab dem Domain-Hauptverzeichnis. Bei einem Umzug in ein Unterverzeichnis müssen diese Pfade angepasst werden.

## Bereinigung und Pflege

Am 7. Oktober 2026 wurden 42 ungenutzte Dateien mit zusammen rund 46 MB aus V4 und dem aktuellen GitHub-Stand entfernt: alte Bilder und Vorschauen, zwei alte Stylesheets sowie nicht verlinkte Whitepaper-Dateien. Aktuelle Galerie-Originale und der verlinkte Whitepaper-Download bleiben erhalten. Der alte lokale `_BACKUP`-Ordner wurde aus V4 entfernt; eine Wiederherstellungssicherung liegt außerhalb des Website-Ordners. Die Git-Historie bleibt erhalten.

Vor weiteren Löschungen Verweise in HTML, CSS, JavaScript und SVG prüfen, einschließlich Download-Links und Browser-Symbolen. Bausteine, Build-Werkzeug und Projektdokumentation werden auch dann benötigt, wenn sie nicht direkt von einer Webseite verlinkt sind. Relevante Änderungen an Struktur, Bildern oder Veröffentlichung in dieser README lokal und auf GitHub mitführen.

## Prüfung der Änderungen vom 7. Oktober 2026

- Neue WebP-Vorschauen geöffnet und visuell kontrolliert; Dateigrößen geprüft.
- Bei den Bildumstellungen bestehende Links beibehalten und Bildziele geprüft.
- Projektseite anschließend auf drei kurze Abschnitte verdichtet; Doppelcoin als Bildpause, drei Visionsaussagen und abschließender Teilnahme-Link.
- Browser- und Apple-Touch-Icon auf allen zehn vollständigen Seiten eingebunden.
- Nach der Bereinigung keine fehlenden lokalen Dateiziele in der Verweisprüfung gefunden.
- Erfolgreiche GitHub-Pages-Veröffentlichungen der Website-Änderungen kontrolliert.

Eine vollständige erneute Browserprüfung aller Seiten und Funktionen war nicht Bestandteil dieser Änderungen.

## Wallet-Anleitung

`wallet.html` führt in fünf Schritten durch Download, Erstellung einer Wallet mit Wiederherstellungsphrase, Offline-Sicherung, Kopieren der Solana-Adresse und Token-Anfrage. Grundlage sind die offiziellen Phantom-Anleitungen zur [Einrichtung](https://phantom.com/learn/guides/how-to-create-a-new-wallet) und [Empfangsadresse](https://help.phantom.com/articles/28355153389075), abgeglichen am 7. Oktober 2026. `assets/css/wallet-guide.css` gestaltet die Anleitung. Der erste Schritt bietet direkte Links zum Apple App Store (App-ID `1598432977`), Google Play (Paket `app.phantom`) und zur offiziellen Phantom-Downloadseite für Browser.

Begriffserklärungen, Blockchain-Hintergrund, Token-Prüfung und der vollständige vorhandene BISON-Bereich stehen in standardmäßig geschlossenen HTML-Aufklappbereichen (`details`/`summary`). Sie funktionieren ohne zusätzliches JavaScript. Der Empfehlungslink `https://join.bisonapp.com/b6rstg`, Referral-Code und zugehörige Hinweise bleiben erhalten. BISON-Aktionsangaben wurden bei dieser Umgestaltung nicht neu geprüft; es gelten die Bedingungen des Anbieters.

Die Download-Auswahl verwendet lokal gespeicherte deutsche Original-Badges von Apple und Google (`assets/downloads/`) sowie eine Desktop-Kachel mit Monitor-Symbol und vorhandenem Phantom-Appsymbol. Badge-Quellen: Apple Media Services (`tools.applemediaservices.com`) und Google Play (`play.google.com/intl/en_us/badges/`). Die Bilder verlinken direkt auf die jeweiligen Downloads.

Die drei Download-Schaltflächen sind auf 40 Pixel sichtbare Höhe abgestimmt. Spezifische CSS-Regeln verhindern, dass allgemeine Bildstile die Badge-Größen überschreiben; der transparente Rand der Google-Grafik wird bei der Ausrichtung berücksichtigt.

## Einheitliche Teilnahme und Anfrageablauf

Die Website nennt einheitlich 10 Token für Einzelpersonen aus Schwenningen oder mit Bezug zum Ort und 100 Token für Vereine und Institutionen, kostenlos und solange verfügbar. Die Anfrage benötigt Name, Bezug zu Schwenningen, gegebenenfalls Vereinsname/Betrieb und öffentliche Solana-Adresse. Die E-Mail-Vorlagen auf Startseite, Wallet-Seite und FAQ enthalten dieselben Felder. Nach Prüfung erfolgt bei erfüllten Voraussetzungen und Verfügbarkeit die Übertragung an die angegebene Adresse. Es wird keine feste Bearbeitungszeit oder zusätzliche E-Mail-Bestätigung zugesagt.

Die Startseite zeigt 240 verteilte Token, 7 Tokenholder und 2 Regionalpartner mit Stand 7. Oktober 2026 und Link zur Transparenz-Seite. Bei künftigen Zahlenänderungen `index.html`, `tokenomics.html` und diese README gemeinsam aktualisieren. `assets/css/participation.css` gestaltet die Statuszeile und den Anfragehinweis.

Mobile Vorprüfung am 7. Oktober 2026: alle zehn vollständigen Seiten bei 320 Pixel Breite ohne horizontales Überlaufen; keine defekten bereits geladenen Bilder gefunden. Menüöffnung/-navigation, Weg zur Wallet-Anleitung, 40-Pixel-Downloadbuttons sowie Öffnen des BISON-Bereichs bei 390 Pixel geprüft. Galerie enthält 25 WebP-Vorschauen und 25 Original-Downloadlinks. Kein tatsächlicher E-Mail-Versand durchgeführt.

## Regionalpartnerschaft anfragen

Der Button „Partnerschaft anfragen“ auf `regionalpartner.html` öffnet eine vorbereitete E-Mail an `swhbg@schwenningen-token.de`. Betreff und Text enthalten eine kurze Interessenbekundung sowie Felder für Ansprechperson, Betrieb/Verein/Institution, Ort und regionalen Bezug, optionalen Webauftritt und Ideen oder Fragen zur Zusammenarbeit. Der Versand erfolgt erst durch die anfragende Person im eigenen E-Mail-Programm.

## Community-QR-Code

Das QR-Code-Fenster auf `community.html` zeigt die bereitgestellte SVG-Datei `assets/qr-code-v2.svg` (1147 × 1147). Sie wird unverändert übernommen; der neue Dateiname verhindert die Wiederverwendung der alten Bildadresse aus dem Browsercache.

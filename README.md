# Schwenningen Token – korrigierte V4

Die HTML-Dateien und der Ordner `assets` sind direkt für das bestehende Hosting verwendbar. Alle bisherigen Seiten bleiben erhalten. „Auszeichnungen“ ist in beiden Navigationsmenüs enthalten.

## Gemeinsame Navigation und Footer bearbeiten

1. `header.html` oder `footer.html` ändern.
2. Im Website-Ordner `python3 tools/build.py` ausführen (Python 3 erforderlich).
3. Die aktualisierten HTML-Dateien und `assets` hochladen. Alternativ den Inhalt des erzeugten Ordners `dist` hochladen.

Das Werkzeug übernimmt die gemeinsamen Inhalte in alle Seiten. Deshalb funktionieren die vorhandene Navigation und der Footer auch ohne nachträgliche Dateiabrufe. Die markierten Bereiche in den einzelnen HTML-Dateien werden beim nächsten Durchlauf automatisch synchronisiert.

`assets/css/ui.css` steuert die gemeinsame Navigation, Dialoge und Bedienhilfen. Das übrige Seitendesign bleibt in den bisherigen Styles erhalten. `assets/js/main.js` enthält die gemeinsamen Interaktionen.

## Bilder

Die Website zeigt optimierte WebP-Dateien aus `assets/previews`. Die ursprünglichen Bilder bleiben im Ordner `assets` erhalten und sind weiterhin die Downloadziele in der Galerie. Neue Bilder benötigen ebenfalls passende Vorschauen; das Synchronisierungswerkzeug erzeugt keine neuen Bildvarianten.

## Veröffentlichung

Die 404-Seite verwendet Pfade ab dem Hauptverzeichnis der Domain, passend zu `www.schwenningen-token.de`. Bei Veröffentlichung in einem Unterverzeichnis müssen ihre Rückverweise und Bildpfade angepasst werden.

## Durchgeführte Prüfungen

- Lokale Datei- und Sprungziele sowie eindeutige IDs geprüft.
- Einheitliche Navigation und Footer auf allen acht Inhaltsseiten geprüft.
- Honor-Link in Desktop- und Mobilnavigation geprüft.
- JavaScript-Syntax und alle HTML-Klickfunktionen geprüft.
- Logik für Menüzustände, FAQ und Kopieren bei Erfolg, Ablehnung und fehlender Zwischenablage geprüft.

Die Logiktests verwenden vereinfachte Dokumentobjekte. Eine visuelle Prüfung in einem echten Browser sowie eine rechtliche Prüfung der vorhandenen Texte wurden nicht durchgeführt.

## Neue Struktur (11. September 2026)

Die Startseite bündelt Einstieg, Projektüberblick, Token-Verteilung, Community und Transparenz. Die vollständige Geschichte liegt auf `projekt.html`. `honor.html` bleibt eigenständig und hat einen direkten Menüpunkt. `assets/css/editorial.css` gestaltet die Start- und Projektseite.

Browserprüfung: Startseite bei 1365 und 390 Pixeln Breite visuell geprüft, Coin jeweils quadratisch (390 bzw. 210 Pixel), keine horizontale Überbreite. Mobiles Menü geöffnet und Projektlink getestet; Projektseite mit allen sechs Kapiteln geprüft.

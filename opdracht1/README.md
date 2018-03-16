# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen … 

## Opdracht 1 - Progressive Enhancement

## Project
https://jamalvr.github.io/wafs/#uiux

#### Afbeeldingen
* Toevoegen van een 'Alt' en 'Titel' tag voor accessibility.
** Stylen van 'Alt' attributen.
* Afbeeldingen comprimeren (4.4MB van de 4.5MB bestaat uit afbeeldingen).
* Minder afbeeldingen tegelijk inladen. Dit kan ook eventueel opgelost worden met 'lazyloaden' om de initiële load kleiner te maken.

#### Custom fonts
* Worden geen custom fonts ingeladen. Er wordt gebruik gemaakt van 'standaard' fonts.
* Er kunnen SVG's toegevoegd worden om de usability en readability te verbeteren.

#### Javascript
* Niet bruikbaar zonder Javascript.
* Minifyen van de Javascript (en CSS).

### CSS
* Breekt wanneer 'display: grid;' uitgezet wordt. Grid is namelijk half bruikbaar op IE-11.

#### Kleur
* Alles is nog goed leesbaar, ongeacht het type kleurenblindheid. 
* Contrastwaarde lijkt hoog genoeg (moet dit nog valideren).

#### Breedband internet
* Zware website, vooral door de afbeeldingen (wordt ook al behandeldin het kopje afbeeldingen).

#### Cookies
* Maak geen gebruik van cookies.

#### Local Storage
* Maak geen gebruik van local storage.

#### Muis/Trackpad disabled
* Slechte focus states. Zijn erg onduidelijk door het huidige kleurgebruik.

#### Testen in het device lab
* Nog testen via device lab.

#### Screenreader.
* Nog testen via screenreader.

## To do's
* Kan niet op GitHub komen met VirtualBox IE10
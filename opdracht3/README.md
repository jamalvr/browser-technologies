# Browser Technologies
// Robuuste, toegankelijke websites leren bouwen … 

## Opdracht 3 - Progressive Enhanced Browser Technologies 
Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

[Link naar de demo](https://jamalvr.github.io/browser-technologies/opdracht3/index.html)

## De core funtionaliteit
Een lijst met contactpersonen waar op gefilterd kan worden aan de hand van een zoekbalk. Wanneer er op een contactpersoon geklikt wordt, kom je op een losse detailpagina met meer informatie over de desbetreffende persoon. Vanuit de detailpagina kan er contact opgenomen worden met de desbetreffende persoon of terug genavigeerd worden naar de homepagina.

### De opbouw
In eerst instantie wordt de zoekopdracht verstuurd via de server (in dit geval een nepserver met statische HTML). Vervolgens krijgt de gebruiker een lijst te zien met namen die aan de zoekopdracht voldoen. 

Om het geheel wat aantrekkelijker te maken is er vervolgens stijling toegevoegd aan de lijst elementen. De searchbar is nu aanzienlijk groter, zodat daar ook als eerste de aandacht naartoe gaat. De list-items zijn nu ook een stuk compacter waardoor er nu meer contactpersonen in de lijst komen te staan.

Als kers op de taart is er vervolgens een javascript functie toegevoegd. Met deze functie hoeft te gebruiker niet meer te wachten op de server om te filteren. Dit kan nu live gedaan worden wanneer de gebruiker wat in typt in de search bar.

![Opbouw](img/opbouw.png)

## De features/Browser technologies
### [CSS Flexible Box Layout Module (Display: flex;)](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
Een layout module bedoelt voor het stijlen en positioneren van elementen. Het voordeel is dat er veel mogelijkheden zijn met relatief weinig code voor de positionering en stijling. De blokken met ``display: flex;`` verdeeld in een 'main-axis' en een 'cross-axis'. Hierdoor is het bijvoorbeeld erg makkelijk om elementen zowel verticaal ``align-items: center;`` als horizontaal ``justify-content: center;`` te positioneren.

![flexbox support](img/flexsupport.png)

### [Box-shadow](https://caniuse.com/#search=box-shadow)
``Box-shadow`` wordt ondersteund in alle moderne browser. Alleen oudere versies voor IE9 bieden geen support. Om vooralsnog te spelen met CSS properties en er voor te zorgen dat ook oudere browsers en juiste user experience krijgen, zijn er borders toegevoegd wanneer de box-shadow niet beschikbaar is. Dit is gedaan met de ``@support`` regel op alle verschillende type ``box-shadow`` die zijn gebruikt.

![Box-shadow support](img/boxshadowsupport.png)
![Box-shadow test](img/boxshadowtest.png)

### [classList](https://caniuse.com/#search=classlist)
De ``classList`` property haalt de classes op van een DOM element. De ``classList`` property leest in eerst instantie alleen in welke classes er in het element zitten. Om classes toe te voegen of te verwijderen kan er bijvoorbeeld ``.add`` en ``.remo`` achter ``classList`` gezet worden. 

``classList`` wordt ook goed gesupport in nieuwe browsers. Wanneer je naar browsers ouder dan IE10 gaat is er geen support meer voor de property.

![IE Classlist](img/ieclasslist.png)

## Browsersupport
### IE8
Er gaat in IE8 heel wat basic styling en functionaliteit verloren. De Javascript functie werkt niet meer, de box-shadows zijn vervangen door borders en de max-width op het container element met de ``margin: auto;`` is ook verdwenen. Dit komt waarschijnlijk omdat ik een ``main`` HTML element heb gebruikt. Verder werkt het qua functionaliteit nog wel. De gebruiker krijgt vooralsnog een lijst met contacten te zien waarmee gefilterd kan worden.

![IE8 Test](img/ie8test.png)

### IE9

### IE10

### Major nieuwere browsers
Om te kijken hoe de moderne browsersupport is, heb ik gekeken hoe de app functioneert op alle moderne browsers. Over het algemeen werkt zo goed als alles. Het grootste probleem met moderne browsers, is dat ze niet altijd hetzelfde omgaan met CSS regels en andere ingebouwde browserstyles meegeven. De styling die de browsers meegeven kunnen in sommige gevallen in de weg staan van de stijling die je zelf als frontender/designer meegeeft. Het is daarom extra belangrijk om er op te letten dat bijvoorbeeld ``:focus`` states altijd duidelijk zijn. 

#### Chrome, Opera, Firefox, Edge & Safari
Op Safari werkt alles qua functionaliteit, op de stijling van het ``input`` element na. De searchbar gaat voor een gedeelte terug naar de originile stijling en verliest de extra hoogte en grotere ``font-size``.
![safari input css bug](img/safaricssbug.png)

Op Edge werkt alles zoas het moet horen. Het enige wat qua contrast een probleem kan opleveren voor de accesability is de grijze kleur, die als achtergrond functioneert van de suggesties in de searchbar.
![Edge suggestion contrast](img/edgecontrast.png)

Criteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
- 	een beschrijving van de core functionality
- 	een beschrijving van de feature(s)/Browser Technologies
- 	welke browser de feature(s) wel/niet ondersteunen
- 	een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
- 	de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
- 	het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development

 
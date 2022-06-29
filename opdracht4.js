/*
#### Opdracht 4 -Functies

Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

    ```
  Philips 43PUS6504/12 - 4K TV
  €379,-
  43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)

  NIKKEI NH3216SMART - HD smart TV
  €159,-
  32 inch (81 cm)
  ```*/

/*    * **Opdracht 4a:** Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
enkel tv-object (zoals `inventory[0]` of `inventory[6]`) verwacht en de naam op de volgende manier
samenvoegt: `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`. Test
of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.*/

function tvName(array) {
    console.log(`${array.brand} ${array.type} - ${array.name}`);
}
tvName(inventory[6]);


/* **Opdracht 4b:** Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
parameter verwacht (zoals `379`) en daar de volgende string van maakt: `€379,-`. Test of jouw functie ook werkt
wanneer er een andere tv-prijs wordt meegegeven.*/


function tvPrice(array) {
    console.log(`€${array.price},-`);
} tvPrice(inventory[4]);


/* **Opdracht 4c:** Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in
zowel _inches_ als _cm_. Doe dit door een functie te schrijven die één screen-sizes array verwacht (
    zoals `inventory[0].availableSizes`) en de groottes op de volgende manier
samenvoegt: `[schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm)`
etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
    Test of jouw functie werkt in alle mogelijke gevallen.*/

//1. Itereer door inventory en geef van elke index de schermgroottes terug
//2. sla deze op als variabele in een array
//3. bereken alle teruggeven waardes om naar cm door * 2.54 te doen. Rond deze waardes af naar integers
//4. sla deze op als variabele in een andere array
//5. Return een string met de inch waarde en de cm waarde voor elke schermgrootte in de array

const screenSizesInch = inventory.map((tv) => {
    return tv.availableSizes;
})


function returnString(sizesArray) {
    let output = '';
    for (let i = 0; i < sizesArray.length; i++) {
        const currentSizeInches = sizesArray[i];
        const currentSizeCm = sizesArray[i] * 2.54;

        output = output + `${currentSizeInches} inch ${currentSizeCm} cm`;
        console.log(currentSizeInches);
        console.log(currentSizeCm);
    }
    return output;
}
console.log(returnString(screenSizesInch));






/* **Opdracht 4d:** Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
Gebruik hiervoor de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.*/






/* **Opdracht 4e:** Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De
overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan
te roepen!*/






/*#### Bonusopdracht

1. Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
de bijbehorende knop klikt. _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!*/





/*    2. Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
jouw `generateTV`-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!*/
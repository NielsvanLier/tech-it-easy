/*#### Opdracht 2 - Elementen in de DOM plaatsen*/

/*_Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
een oude vertrouwde for-loop voor!*/

/** **Opdracht 2a:** Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.*/
// Itereer door alle tv's
// Tel alle sold values op
// Log de uitkomst

let totalSales = 0;

for (let i = 0; inventory.length > i; i++) {
    totalSales = totalSales + inventory[i].sold;
}
console.log(totalSales);


/** **Opdracht 2b:** Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.*/
// const body = document.body;
// body.style.color('green')
// body.innerHtml = ``;

const totalSalesElement = document.getElementById("totalsales")
totalSalesElement.innerHTML = `The total number of sold tv's is: ${totalSales}`;



/** **Opdracht 2c:** Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
console.*/
let totalStock = 0;
for (let i = 0; inventory.length > i; i++) {
    totalStock += inventory[i].originalStock;
}
console.log(totalStock);

/** **Opdracht 2d:** Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.*/

const totalStockElement = document.getElementById("totalstock")
totalStockElement.innerHTML = `The total number of tv's in our original stock was: ${totalStock}`;

/** **Opdracht 2e:** Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.*/
let toBeSold = totalStock - totalSales;

const toBeSoldElement = document.getElementById("tobesold")
toBeSoldElement.innerHTML = `The total number of tv's in stock is: ${toBeSold}`;
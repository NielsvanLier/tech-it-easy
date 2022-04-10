/** **Opdracht 1a:** Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
console.*/

    const tvTypes = inventory.map((tv) => {
    return tv.type;
})
console.log(tvTypes);

/** **Opdracht 1b:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
zijn. Log de uitkomst in de console.*/

// filter methode
// sold - originalStock

const soldOutTvs = inventory.filter((tv) => {
    return (tv.sold - tv.originalStock) === 0;
})

console.log(soldOutTvs);

/** **Opdracht 1c:** Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
beschikken. Log de uitkomst in de console.*/

const hasAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
})
console.log(hasAmbilight);

/*
* **Opdracht 1d:** Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
console.*/

// Filter op prijs
// Sort prijzen van laag naar hoog
// Log


const ascendingPrice = inventory.sort((a, b) => {
    return a.price - b.price;
})
console.log(ascendingPrice);
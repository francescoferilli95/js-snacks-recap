/**
 * 
 *  SNACK: 1
 *  Crea un array composto da 10 brand famosi
 *  Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" e aggiungere, sempre in questo contesto di "clonazione", una proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno in cui l'azienda è stata fondata
 * 
 */

const maxYear = 1990;
const minYear = 1950;

const brands = [
    {
        name: 'Sony',
    },
    {
        name: 'Gucci',
    },
    {
        name: 'Apple',
    },
    {
        name: 'Samsung',
    },
    {
        name: 'Dolce&Gabbana',
    },
    {
        name: 'Nike',
    },
    {
        name: 'Ferrero',
    },
    {
        name: 'Xiaomi',
    },
    {
        name: 'Asus',
    },
    {
        name: 'Nokia',
    },
];

console.log(brands);

const clonArray = brands.map((el) => {
    return {
        ...el,
        name: el.name.toLowerCase(),
        foundationYear: getRandomNumber(maxYear, minYear)
    }
});

console.log(clonArray);

/**
 * 
 * FUNCTIONS 
 * 
 */

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 *  SNACK: 2
 *  Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione(benzina, diesel,gpl, elettrico, metano).
 *  Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto.
 *  Infine stampa seperatamente i 3 array
 * 
 */

const auto = [
    {
        marca: 'Ford',
        modello: genModello(),
        alimentazione: 'benzina',
    },
    {
        marca: 'BMW',
        modello: genModello(),
        alimentazione: 'diesel',
    },
    {
        marca: 'Audi',
        modello: genModello(),
        alimentazione: 'gpl',
    },
    {
        marca: 'Opel',
        modello: genModello(),
        alimentazione: 'elettrico',
    },
    {
        marca: 'Dacia',
        modello: genModello(),
        alimentazione: 'metano',
    },
    {
        marca: 'Volkswagen',
        modello: genModello(),
        alimentazione: 'benzina',
    },
    {
        marca: 'Opel',
        modello: genModello(),
        alimentazione: 'benzina',
    },
    {
        marca: 'Audi',
        modello: genModello(),
        alimentazione: 'diesel',
    },
    {
        marca: 'BMW',
        modello: genModello(),
        alimentazione: 'diesel',
    },
    {
        marca: 'Dacia',
        modello: genModello(),
        alimentazione: 'diesel',
    },
    {
        marca: 'Ford',
        modello: genModello(),
        alimentazione: 'idrogeno',
    },
];

console.log(auto);

console.log(auto);

const autoBenzina = auto.filter((element) => {
    return element.alimentazione === 'benzina';
});
const autoDiesel = auto.filter((element) => {
    return element.alimentazione === 'diesel';
});
const restoAuto = auto.filter((element) => {
    return element.alimentazione !== 'benzina' && element.alimentazione !== 'diesel';
});

console.table(autoBenzina);
console.table(autoDiesel);
console.table(restoAuto);

/**
 * 
 *  FUNCTIONS 
 * 
 */
function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genModello() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    let chars = '';
    let numbers = '';

    for (let i = 0; i < 3; i++) {
        chars += letters[getRandomNumber(0, letters.length - 1)];

        numbers += getRandomNumber(0, 9);
    }

    return chars + numbers;
}
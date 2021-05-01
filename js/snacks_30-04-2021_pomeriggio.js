/**
 * 
 *  SNACK: 1
 *  Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
 *  Crea un nuovo array con la lista dei mammiferi
 * 
 */

const animali = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi',
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi',
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli',
    },
    {
        nome: 'coccodrillo',
        famiglia: 'crocodilidi',
        classe: 'rettili',
    },
    {
        nome: 'falco',
        famiglia: 'falconidi',
        classe: 'uccelli',
    },
];

console.log(animali);

const soloMammiferi = animali.filter(element => {
    return element.classe === 'mammiferi';
});

console.log(soloMammiferi);

/**
 * 
 *  SNACK: 2
 *  Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
 *  Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età
 * 
 */

const persone = [
    {
        nome: 'Francesco',
        cognome: 'Ferilli',
        eta: '25',
    },
    {
        nome: 'Fabrizio',
        cognome: 'Verdi',
        eta: '20',
    },
    {
        nome: 'Orazio',
        cognome: 'Cuore',
        eta: '16',
    },
    {
        nome: 'Veronica',
        cognome: 'Lesta',
        eta: '29',
    },
    {
        nome: 'Silvia',
        cognome: 'Gialli',
        eta: '35',
    },
    {
        nome: 'Paola',
        cognome: 'Pila',
        eta: '17',
    },
    {
        nome: 'Stefano',
        cognome: 'Inquadrato',
        eta: '14',
    },
    {
        nome: 'Ciro',
        cognome: 'Esposito',
        eta: '18',
    },
];

console.log(persone);

const puoGuidare = persone.map((element) => {

    const { nome, cognome, eta } = element;

    return eta >= 18 ? `${nome} ${cognome} può guidare` : `${nome} ${cognome} non può guidare`
});


// const puoGuidare2 = persone.map(e => `${e.nome} ${e.cognome}${e.eta >= 18 ? '' : ' non'} può guidare`);


console.log(puoGuidare);

/**
 * 
 *  SNACK: 3
 *  Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano che indica se esce con Windows come OS di fabbrica, il prezzo ed il prezzo scontato.
 *  Creaiamo un nuovo array che indichi i pc che hanno Windows e di quest iandiamo a tirar fuori la differenza tra prezzo originale e scontato.
 * 
 */

const computers = [
    {
        nome: 'XA123ES',
        marca: 'X',
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 800,
    },
    {
        nome: 'XA123ES',
        marca: 'Y',
        hasWindows: false,
        prezzoOriginale: 1100,
        prezzoScontato: 850,
    },
    {
        nome: 'XA123ES',
        marca: 'X',
        hasWindows: false,
        prezzoOriginale: 1200,
        prezzoScontato: 900,
    },
    {
        nome: 'XA123ES',
        marca: 'Y',
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 750,
    },
    {
        nome: 'XA123ES',
        marca: 'X',
        hasWindows: true,
        prezzoOriginale: 1000,
        prezzoScontato: 700,
    },
    {
        nome: 'XA123ES',
        marca: 'Y',
        hasWindows: false,
        prezzoOriginale: 1350,
        prezzoScontato: 1000,
    },
    {
        nome: 'XA123ES',
        marca: 'X',
        hasWindows: true,
        prezzoOriginale: 1150,
        prezzoScontato: 750,
    },
    {
        nome: 'XA123ES',
        marca: 'Y',
        hasWindows: false,
        prezzoOriginale: 1000,
        prezzoScontato: 500,
    },
];

console.log(computers);

const pcWindows = [];
computers.forEach((element) => {
    if (element.hasWindows === true) {
        pcWindows.push({
            ...element,
            differenzaPrezzo: element.prezzoOriginale - element.prezzoScontato
        });
    }
});
console.log(pcWindows);

/*
const pcWindows2 = computers.filter(e => { return e.hasWindows === true }).map(e => {
    return {
        ...e,
        differenzaPrezzo: e.prezzoOriginale - e.prezzoScontato
    }
});

console.log(pcWindows);
*/
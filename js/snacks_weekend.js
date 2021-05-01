/**
 * 
 *  SNACK: 1
 *  A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
 * 
 */

const strings = ['pippo','PLUTO','Paperino'];

console.log(strings);

const strings2 = strings.map((element, index) => { return element.charAt(0).toUpperCase() + strings[index].slice(1).toLowerCase()});

console.log(strings2);





/**
 * 
 *  SNACK: 2
 *  Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array
 *  Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab. nel caso la tab fosse attiva, deve attivare la successiva.
 * 
 */

const browser = {
    tab: ['Facebook','GitHub','Gmail'],
    activeTab: 0,
};

console.log(browser);

const newBrowser = browser.tab.filter((element, index) => {

    return index === browser.activeTab + 2;

});

console.log(newBrowser);
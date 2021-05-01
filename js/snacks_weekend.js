/**
 * 
 *  SNACK: 1
 *  A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
 * 
 */

const strings = ['pippo','PLUTO','Paperino'];

console.log(strings);

const strings2 = strings.map((element, index) => {return element.charAt(0).toUpperCase() + strings[index].slice(1).toLowerCase()});

console.log(strings2);





/**
 * 
 *  SNACK: 2
 *  Un oggetto rappresenta una finestra di un browser e contiene due campi: un array di tab aperte e un numero che indica l'indice della tab aperta nell'array
 *  Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab. nel caso la tab fosse attiva, deve attivare la successiva.
 * 
 */

const browser = {
    tab: ['Facebook', 'GitHub', 'Gmail'],
    activeTab: 0,
};

console.log(browser);

const newBrowser = browser.tab.filter((element, index) => {return index !== browser.activeTab});

console.log(newBrowser);





/**
 * 
 *  SNACK: 3
 *  Si potrebbe ottimizzare con una funzione separata per il capitalize
 *  A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
 * 
 */

const strings = ['pippo', 'PLUTO', 'Paperino'];

console.log(strings);

const strings2 = strings.map((element, index) => { return element.charAt(0).toUpperCase() + strings[index].slice(1).toLowerCase() });

console.log(strings2);




/**
 * 
 *  SNACK: 4 VUE
 *  Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true, false)
 *  Andiamo a stampare nome cognome e numero dentro una lista.
 *  Fare in modo poi che i contatti non attivi siano stampati di colore rosso mentre gli altri normalmente di nero.
 *  Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
 * 
 */

const app = new Vue({
    el: '#app',
    data: {
        contacts: [
            {
                name: 'John',
                surname: 'Doe',
                number: 3200195820,
                active: true,
            },
            {
                name: 'Ann',
                surname: 'Doe',
                number: 3203357820,
                active: false,
            },
            {
                name: 'Lize',
                surname: 'Doe',
                number: 3209012320,
                active: true,
            },
            {
                name: 'Chriss',
                surname: 'Doe',
                number: 3208765420,
                active: false,
            },
            {
                name: 'Johnny',
                surname: 'Doe',
                number: 3201678520,
                active: true,
            },
        ],
        index: 0,
    },
    methods: {
        showSurname(index) {
            console.log(this.contacts[index].surname);
        }
    },
});

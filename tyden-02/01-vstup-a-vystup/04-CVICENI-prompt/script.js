console.log('%c CVIČENÍ: Prompt ', 'background:black;color:yellow;');

/*
Cvičení 1: Vytvoření uvítací zprávy
Napište kód, který použije funkci `prompt()` k získání jména uživatele a poté do konzole napíše uvítací zprávu:
“Ahoj. Jsem [jméno] a učím se JavaScript.”
*/

const jmeno = prompt('Zadej svoje jméno');
console.log('Ahoj. Jsem ' + jmeno + ' a učím se JavaScript.');



/*
Cvičení 2: Výpočet roku narození:
Vytvořte program, který se pomocí funkce `prompt()` zeptá uživatele na jeho věk a poté vypočítá a zobrazí rok jeho narození.
Aktuální rok můžete v JavaScriptu zjistit pomocí:
*/

const aktualniRok = new Date().getFullYear();
const vek = prompt('Kolik je ti let?');
console.log('Tvůj rok narození je', aktualniRok - vek);



/*
Cvičení 3: Konverze měn
Vytvořte jednoduchý konvertor měn, který se zeptá uživatele na částku v eurech a poté ji převede na koruny a vypíše do konzole. Předpokládejte, že směnný kurz je 23.79 Kč za 1 euro.
*/

const castkaEur = Number(prompt('Zadej částku v Eurech'));
const castkaKc = castkaEur * 23.79;
console.log(castkaEur + ' EUR je ' + castkaKc + ' Kč');

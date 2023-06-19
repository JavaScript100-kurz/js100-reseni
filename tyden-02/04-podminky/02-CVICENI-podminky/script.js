console.log('%c CVIČENÍ: Podmínky ', 'background:black;color:yellow;');

/*
Cvičení 1: Pivo
Máte životně důležitý úkol. Nesmíte zklamat! Použijte podmínku `if` a dejte mi výpisem do konzole vědět, jestli je moje pivo podmírák (tj. objem je méně než 0.5 litru). Pokud je vše v pořádku, nemusíte vypisovat nic (ale můžete).
*/
const objem = 0.46;

if (objem < 0.5) {
  console.log('Áááá, tvoje pivo je podmírák');
} else {
  console.log('Všechno je v pořádku');
}



/*
Cvičení 2: Heslo
Nechte uživatele pomocí `prompt()` zadat heslo. Pokud zadal správné a extrémně bezpečné heslo `heslo123`, napište do konzole, že ho vítáte v tajné části aplikace. Pokud zadal heslo špatně, odkažte ho do místa, kam ☀ nesvítí (tj. do sklepa).
*/
const spravneHeslo = 'heslo123';
const heslo = prompt('Zadej heslo');
if (heslo === spravneHeslo) {
	console.log('Vítej v tajné části aplikace');
} else {
	console.log('Špatné heslo. Sem nemůžeš.');
}



/*
Cvičení 3: Klady a zápory
Nechte uživatele zadat pomocí `prompt()` číslo. Do konzole vypište, zda jde o kladné nebo záporné číslo, nebo zda je číslo nula.
*/
const cislo = prompt('Zadej číslo');
if (cislo < 0) {
	console.log('záporné číslo');
} else if (cislo > 0) {
	console.log('kladné číslo');
} else {
	console.log('číslo je nula');
}


/*
Cvičení 4: Sleva
V programu mějte proměnnou s celkovou hodnotou zboží v košíku. Je-li v košíku zboží za více jak 1000 Kč, dostane zákazník slevu 10 %. Pokud je hodnota zboží větší jak 3000 Kč, dostane slevu 20 %. Do konzole vypište, kolik zákazník za svoje zboží zaplatí.
*/
const cenaZbozi = 1850;
let slevaProcent = 0;

if (cenaZbozi > 3000) {
	slevaProcent = 20;
} else if (cenaZbozi > 1000) {
	slevaProcent = 10;
}

const cenaPoSleve = cenaZbozi - (cenaZbozi * slevaProcent / 100);
console.log(`Zákazník za zboží v hodnotě ${cenaZbozi} Kč zaplatí ${cenaPoSleve} Kč (sleva ${slevaProcent} %)`);


/*
Cvičení 5: Muž nebo žena?
Máme textový řetězec s rodným číslem ve formátu RRMMDD/XXXX. Druhé dvojčíslí představuje měsíc narození a u žen je k tomuto číslu přičteno `50`. Pokud se tedy žena narodila v lednu, bude mít jako měsíc v rodném čísle uvedeno 51, pokud by se narodila v prosinci, bude tam mít 62.

Napište program, který z textového řetězce získá druhé dvojčíslí a podle něho zjistí, zda jde o může nebo ženu a výsledek vypíše do konzole.

Pro účely příkladu vynecháme jakékoliv kontroly na potenciální pravost/nepravost rodného čísla a budeme řešit pouze druhé dvojčíslí s měsícem.
*/
const rodneCislo = '865411/1234';
const mesic = Number(rodneCislo.slice(2, 4));

if (mesic > 50) {
	console.log('Rodné číslo patří ženě');
} else {
	console.log('Rodné číslo patří muži');
}




/*
Cvičení 6: Známky
Nechte uživatele zadat, kolik bodů získal v testu (číslo mezi 0 a 100). Do konzole vypište, jakou písmennou známku dostal. A pro 91-100 bodů, B pro 81-90 bodů, C pro 71-80 bodů, D pro 61-70 bodů, E pro 51-60 bodů. 50 a méně bodů znamená propadnutí se známkou F.
*/
const pocetBodu = Number(prompt('Kolik bodů jsi získal v testu?'));
let znamka;

if (pocetBodu > 91) {
	znamka = 'A';
} else if (pocetBodu > 81) {
	znamka = 'B';
} else if (pocetBodu > 71) {
	znamka = 'C';
} else if (pocetBodu > 61) {
	znamka = 'D';
} else if (pocetBodu > 51) {
	znamka = 'E';
} else {
	znamka = 'F';
}

console.log(`V testu jsi získal ${pocetBodu} bodů, což stačí na známku ${znamka}.`);

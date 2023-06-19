console.log('%c CVIČENÍ: Ternární operátor ', 'background:black;color:yellow;');

/*
Cvičení 1: Sudé nebo liché číslo
Nechte uživatele zadat libovolné číslo. Použijte ternární operátor a interpolaci textových řetězců a do konzole vypište text v tomto formátu: “Číslo `7` je `liché` číslo.”
*/

const cislo = Number(prompt('Zadej číslo'));

console.log(`Číslo ${cislo} je ${cislo % 2 === 0 ? 'sudé' : 'liché'} číslo.`);



/*
Cvičení 2: Denní doba
Nechte uživatele zadat, kolik je hodin (jen celé číslo mezi 0-23). Jedná-li se o hodiny 0-11, budeme je považovat za “ráno a dopoledne”. 12-23 budeme brát jako “odpoledne a večer”. Použijte ternární operátor a interpolaci textových řetězců a do konzole napište text ve formátu: “Je `7` hodin, přejeme krásné `ráno a dopoledne`.”
*/

const hodiny = Number(prompt('Kolik je hodin? Zadej 0-23.'));

console.log(`Je ${hodiny} hodin, přejeme krásné ${hodiny < 12 ? 'ráno a dopoledne' : 'odpoledne a večer'}.`);



/*
Cvičení 3: Síla hesla
Nechte uživatele zadat heslo. Do konzole vypište text ve formátu “Máte `silné` heslo.”
Heslo je silné, pokud má délku 8 a více znaků. Jinak je slabé.
*/

const heslo = prompt('Zadej heslo');

console.log(`Máte ${heslo.length >= 8 ? 'silné' : 'slabé'} heslo.`);



/*
Cvičení 4: Oblíbená barva
Nechte uživatele zadat barvu. Použijte ternární operátor a do konzoly vypište “Tuhle barvu mám taky rád”, pokud se jedná o zelenou nebo modrou. Pro jakoukoliv jinou barvu napište “To není moje oblíbená barva”.
*/

const barva = prompt('Jaká je tvoje oblíbená barva?');
const vysledek =
	(barva === 'modrá' || barva === 'zelená')
	? 'Tuhle barvu mám taky rád'
	: 'To není moje oblíbená barva';
console.log(vysledek);




/*
Cvičení 5: Mezinárodní předvolba
Nechte uživatele zadat telefonní číslo včetně mezinárodní předvolby (např. +420 123 456 789). Použijte ternární operátor a do konzoly vypište “Jé, ty jsi taky čechoslovák”, pokud číslo začíná na +420 nebo +421. Jinak raději použijte mezinárodní pozdrav “Hello. How are you?”
*/

const telefon = prompt('Zadej telefonní číslo ve tvaru +XXX XXX XXX XXX');

const predvolba = telefon.slice(0, 4);
console.log(
	(predvolba === '+420' || predvolba === '+421')
	? 'Jé, ty jsi taky čechoslovák.'
	: 'Hello. How are you?'
);




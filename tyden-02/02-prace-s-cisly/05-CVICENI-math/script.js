console.log('%c CVIČENÍ: Objekt Math ', 'background:black;color:yellow;');

/*
Cvičení 1: Obsah kruhu
Nechte uživatele pomocí `prompt()` zadat poloměr kruhu. Výsledek si uložte do proměnné `r`. Spočitejte a do konzoly vypište, jaký je obsah kruhu.
Vzorec pro obsah kruhu je πr^2 (pí * r na druhou).
*/

const r = Number(prompt('Zadej poloměr kruhu'));
const obsahKruhu = Math.PI * (r ** 2);
console.log('Obsah kruhu je', obsahKruhu);



/*
Cvičení 2: Nejmenší a největší číslo
Nechte uživatele pomocí `prompt()` zadat postupně 3 čísla, tj. použijte `prompt()` třikrát za sebou a výsledek si pokaždé uložte do proměnné, např. `cislo1`, `cislo2` a `cislo3`.
Zjistětě nejmenší a největší číslo ze všech tří a vypište do konzole zprávu:
Nejmenší číslo je [x].
Největší číslo je [y].
*/

const cislo1 = Number(prompt('Zadej 1. číslo'));
const cislo2 = Number(prompt('Zadej 2. číslo'));
const cislo3 = Number(prompt('Zadej 3. číslo'));

const nejmensi = Math.min(cislo1, cislo2, cislo3);
const nejvetsi = Math.max(cislo1, cislo2, cislo3);

console.log('Nejmenší číslo je', nejmensi);
console.log('Největší číslo je', nejvetsi);



/*
Cvičení 3: DnD kostka
Jste zapálený fanoušek/fanynka hry Dungeons & Dragons. Při hraní se používají různé kostky označené jako D4, D6, D8, D10, D12 apod. podle toho, jako hodnoty na nich mohou padnout. Např. na D12 může padnout hodnota 1 - 12.
Vyberte si jednu z kostek (jinou než D6) a její velikost si uložte do proměnné `kostka`.
Napište program, který vygeneruje náhodný hod touto kostkou a do konzoly vypíše zprávu:
Na D12 padla hodnota [x].
*/
const kostka = 12;
const hod = Math.floor(Math.random() * kostka) + 1;

console.log('Na kostce D' + kostka + ' padla hodnota ' + hod);


/*
Cvičení 4: Náhodné desítky
Vytvoř program, který vygeneruje a do konzoly vypíše náhodnou desítku - tj. jednu z hodnot 10, 20, 30, 40, … , 90, 100.
*/

// vygenerujeme náhodné číslo mezi 1-10 a vynásobíme deseti
const desitka = (Math.floor(Math.random() * 10) + 1) * 10;
console.log('Náhodná desítka je', desitka);

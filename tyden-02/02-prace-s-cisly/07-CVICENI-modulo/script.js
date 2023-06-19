console.log('%c CVIČENÍ: Modulo ', 'background:black;color:yellow;');

/*
Cvičení 1: Sudé nebo liché číslo
Nechte uživatele pomocí `prompt()` zadat číslo a do konzoly vypište `true` nebo `false`, podle toho, zda číslo je nebo není sudé.
*/

const cislo1 = Number(prompt('Zadej číslo'));
const jeSude = cislo1 % 2 === 0;
console.log(jeSude);



/*
Cvičení 2: Dělitelnost čísla
Nechte uživatele pomocí `prompt()` zadat číslo a do konzoly vypište `true` nebo `false`, podle toho, zda je číslo beze zbytku dělitelné číslem  `7`.
*/

const cislo2 = Number(prompt('Zadej číslo'));
const jeDelitelneSedmi = cislo2 % 7 === 0;
console.log(jeDelitelneSedmi);



/*
Cvičení 3: Ručičkové hodiny
Představte si obyčejné ručičkové hodiny, které mají 12 pozic a ukazují 0-11 hodin. (Pro zjednodušení dvanáctku bereme jako 0 hodin). Když je 9 hodin, ukazuje ručička na devítku. Když je 15 hodin, ukazuje ručička na trojku.

Nechte uživatele zadat, kolik je hodin (jako celé číslo mezi 0 a 23), a do konzoly vypište, na jakou číslici ukazuje hodinová ručička.
*/

const hodin = Number(prompt('Zadej kolik je hodin (0-23)'));
const rucicka = hodin % 12;
console.log('Ručička ukazuje na', rucicka);



/*
Cvičení 4: Výměna peněz
Předpokládejte, že máte k dispozici bankovky v hodnotě 1000, 500, 200 a 100 Kč.

Nechte uživatele pomocí `prompt()` zadat částku. Zjistěte, jak mu můžete částku vydat, abyste mu dali co nejméně bankovek (tj. co nejvíc tisícovek, pak pětiskovku, dvoustovky, stovky a zbytek drobných).

Do konzoly vypište např.:
-------------------------
Částku 3863 Kč rozměníme jako:
3 x 1000 Kč
1 x 500 Kč
1 x 200 Kč
1 x 100 Kč
a 63 Kč v drobných mincích
*/

const castka = Number(prompt('Zadej částku v celých Kč'));

const tisicovky = Math.floor(castka / 1000);
const petistovky = Math.floor((castka % 1000) / 500);
const dvoustovky = Math.floor((castka % 1000 % 500) / 200);
const stovky = Math.floor((castka % 1000 % 500 % 200) / 100);
const koruny = castka % 100;

console.log('Částku %d Kč rozměníme jako:', castka);
console.log('-------------------------------');
console.log(tisicovky + ' × 1000 Kč');
console.log(petistovky + ' × 500 Kč');
console.log(dvoustovky + ' × 200 Kč');
console.log(stovky + ' × 100 Kč');
console.log(koruny + ' Kč v drobných mincích');

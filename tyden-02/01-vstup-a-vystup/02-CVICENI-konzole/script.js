console.log('%c CVIČENÍ: Konzole ', 'background:black;color:yellow;');

/*
Cvičení 1:
Vytvořte proměnnou `jmeno` a nastavte její hodnotu na vaše jméno.
Použijte `console.log()` a vypište text "Jmenuji se [jméno]".
*/

const jmeno = 'Ludmila';
console.log('Jmenuji se ' + jmeno);
// nebo
console.log('Jmenuji se', jmeno);
// nebo
console.log('Jmenuji se %s', jmeno);



/*
Cvičení 2:
Vytvořte proměnnou `vek` a nastavte její hodnotu na jakékoliv číslo.
Použijte `console.error()` k výpisu "To je špatně. Můj věk není [vek] let.".
*/
const vek = 97;
console.error('To je špatně. Můj věk není %d let.', vek);



/*
Cvičení 3:
Vytvořte proměnnou `mesto` a nastavte její hodnotu na název města.
Použijte `console.info()` k výpisu "Bydlím v [město]".
*/
const mesto = 'Praha';
console.info('Bydlím ve městě', mesto);



/*
Cvičení 4:
Použijte `console.warn()` k výpisu varování "Pozor na chodce!".
*/
console.warn('Pozor na chodce!');



/*
Cvičení 5:
Vytvořte pole s názvem `ovocneKoktejly`, které obsahuje názvy tří ovocných koktejlů.
Použijte `console.table()` k výpisu pole do konzole.
*/
const ovocneKoktejly = [
	'Manhattan',
	'Blody Mary',
	'Skinny Bitch'
];
console.table(ovocneKoktejly);



/*
Cvičení 6:
Vytvořte objekt s názvem `auto`, který obsahuje vlastnosti:
`znacka`, `model` a `rokVyroby`.
Použijte `console.table()` k výpisu objektu do konzole.
*/
const auto = {
	znacka: 'Škoda',
	model: 'Octavia',
	rokVyroby: 2016,
};
console.table(auto);



/*
Cvičení 7:
Vytvořte pole s názvem `zvirata`, které obsahuje názvy pěti různých zvířat.
Použijte `console.table()` k výpisu pole na konzoli a pak použijte `console.info()` k výpisu textu "Celkový počet zvířat je [počet zvířat]".
*/
const zvirata = ['pes', 'kočka', 'jezevec', 'leopard', 'vrabec'];
console.table(zvirata);
console.info('Celkový počet zvířat je', zvirata.length);



/*
Cvičení 8:
Pomocí `console.log()` vypište do konzole text “Dnes je krásný den” a pomocí substitučního symbolu `%c` výstup nastylujte tak, aby text byl velikostí písma 20px a byl modou barvou na žlutém pozadí.
*/
console.log(
	'%cDnes je krásný den',
	'font-size: 20px; color: blue; background-color: yellow;'
);

console.log('%c CVIČENÍ: Textové řetězce ', 'background:black;color:yellow;');

/*
Cvičení 1: Základní interpolace řetězců
Vytvořte proměnnou s názvem `jmeno` a přiřaďte do ní své jméno.
Do konzole vypište text "Ahoj, mé jméno je [jméno]".
Pro doplnění jména na konec textu použijte template literal - zpětné uvozovky a `${ }`.
*/
const jmeno = 'Johana';
console.log(`Ahoj, mé jméno je ${jmeno}.`);


/*
Cvičení 2: Použití výrazů
Vytvořte dvě proměnné `x` a `y` a přiřaďte jim hodnoty 5 a 10.
Vypište do konzole text "10 plus 5 rovná se 15".
Pro doplnění proměnných do textu použijte template literal a výsledek (v našem příkladu 15) spočítejte přímo uvnitř textového řetězce.
*/
const x = 5;
const y = 10;
console.log(`${x} plus ${y} rovná se ${x + y}`);



/*
Cvičení 3: Použití funkcí uvnitř template literal
Do konzole vypište text  "Vaše šťastné číslo je [číslo]".
Použijte template literal pro doplnění čísla do textu. Přímo uvnitř `${ }` vygenerujte náhodné číslo mezi 1 a 100. Použijte k tomu `Math.random()` a `Math.round()`.
*/
console.log(`Vaše šťastné číslo je ${Math.round(Math.random() * 99 + 1)}`);


/*
Cvičení 4: Délka jména
Nechte uživatele pomocí `prompt()` zadat jeho jméno.
Do konzole vypište text “Jméno Alena má 5 písmen”. Do textu samozřejmě doplňte jméno které zadal uživatel a zjistěte jeho správnou délku.
*/

const krestniJmeno = prompt('Zadej svoje jméno');
console.log(`Jméno ${krestniJmeno} má ${krestniJmeno.length} písmen`);



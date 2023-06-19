console.log('%c CVIČENÍ: Logické operátory ', 'background:black;color:yellow;');

/*
Cvičení 1: Přístup do knihovny
Mějte dvě proměnné. V jedné bude uloženo, zda má uživatel členskou kartičku do knihovny. Ve druhé bude uloženo, zda je knihovna právě otevřená nebo ne. Obě proměnné mohou být typu boolean.

Má-li uživatel kartičku a knihovna je zrovna otevřená, napište do konzole “Přístup povolen”. Jinak napište “Přístup nepovolen”.

Bonus: Pod “Přístup nepovolen” napište i důvod, proč uživatel do knihovny nemůže. Není členem nebo knihovna není otevřená?
*/

const maKarticku = true;
const jeOtevreno = false;

if (maKarticku && jeOtevreno) {
	console.log('Přístup do knihovny povolen');
} else {
	console.log('Přístup nepovolen');

	// bonus
	if (!maKarticku) {
		console.log('Nemáš členskou kartičku');
	}
	if (!jeOtevreno) {
		console.log('Knihovna je zavřená');
	}
}



/*
Cvičení 2: Ovoce
Moje oblíbené ovoce je jahoda, meloun nebo hruška. Nechte uživatele pomocí `prompt()` zadat, jaké ovoce mi nabízí (např. “borůvky”). Do konzole vypište, zda si dnes zamlsám nebo ne (tj. zjistěte,  zda zadané ovoce je jahoda, meloun nebo hruška).
*/

const ovoce = prompt('Jaké ovoce mi nabídneš?');

if (ovoce === 'jahoda' || ovoce === 'meloun' || ovoce === 'hruška') {
	console.log('Mňam, tohle ovoce miluju.');
} else {
	console.log('Díky, ale nechci.');
}


/*
Cvičení 3: Velikost trička
Nechte uživatele zadat velikost trička (zadá jednu z velikostí XS, S, M, L, XL). Do konzole vypište, zda je tričko skladem nebo ho musíme objednat. Bohužel nemáme skladem velikosti S a M.
*/

const velikostTrika = prompt('Zadej velikost trička (XS, S, M, L, XL)');

if (velikostTrika.toUpperCase() === 'S' || velikostTrika.toUpperCase() === 'M') {
	console.log(`Velikost ${velikostTrika.toUpperCase()} bohužel nemáme skladem.`);
} else {
	console.log('Tričko ihned posíláme.');
}



/*
Cvičení 4: Přestupný rok
Napište program, který zjistí, zda se jedná o přestupný rok. Přestupný rok je dělitelný číslem `4`. Roky dělitelné číslem `100` jsou ale přestupné jen tehdy, pokud jsou zároveň dělitelné číslem `400`.
*/
const rok = 1984;

// možnost 1
if (rok % 4 === 0) {
	if (rok % 100 === 0) {
		if (rok % 400 === 0) {
			console.log(`${rok} je přestupný`);
		} else {
			console.log(`${rok} není přestupný`);
		}
	} else {
		console.log(`${rok} je přestupný`);
	}
} else {
	console.log(`${rok} není přestupný`);
}

// možnost 2 - lepší
if (rok % 4 === 0 && (rok % 100 !== 0 || rok % 400 === 0)) {
	console.log(`${rok} je přestupný`);
} else {
	console.log(`${rok} není přestupný`);
}



/*
Cvičení 5: Víkend
Nechte uživatele zadat den v týdnu (zadá např. “úterý”). Napište proram, který do konzole vypíše, zda se jedná o pracovní den nebo víkend.
*/

const den = prompt('Zadej den v týdnu');

if (
	den === 'pondělí'
	|| den === 'úterý'
	|| den === 'středa'
	|| den === 'čtvrtek'
	|| den === 'pátek'
) {
	console.log(`${den} je pracovní den`);
} else if (den === 'sobota' || den === 'neděle') {
	console.log(`${den} je součástí víkendu`);
} else {
	console.log(`zadávej prosím dny v týdnu a ne nesmysly jako ${den}`);
}


/*
Cvičení 6: Roční období
Nechte uživatele zadat číslo měsíce 1-12. Do konzole vypište, o jaké roční období se jedná (jaro, léto, podzim, zima).
*/

const mesic = Number(prompt('Zadej číslo měsíce'));

if (mesic >= 3 && mesic <= 5) {
	console.log('jaro');
} else if (mesic >= 6 && mesic <= 8) {
	console.log('léto');
} else if (mesic >= 9 && mesic <= 11) {
	console.log('podzim');
} else if (mesic === 12 || mesic === 1 || mesic === 2) {
	console.log('zima');
} else {
	console.log('nezadávej nesmysly, ale číslo měsíce od 1 do 12');
}


/*
Cvičení 7: Login
Nechte uživatele zadat přihlašovací jméno a heslo. Jde-li o uživatele `mysicka47` s heslem `90210`, napíšeme do konzole “Přihlášení proběhlo úspěšně”, jinak napíšeme “Špatné jméno nebo heslo”.
*/

const jmeno = prompt('Zadej svoje přihlašovací jméno');
const heslo = prompt('Zadej svoje heslo');

if (jmeno === 'mysicka47' && heslo === '90210') {
	console.log('Přihlášení proběhlo úspěšně');
} else {
	console.log('Špatné jmeno nebo heslo');
}




/*
Cvičení 8: Pobyt na měsíci 🌖
Představte si, že žijete na Měsíci. Teploty se tam běžně pohybují od -173°C do +127°C. Než vylezete z domu, zeptejte se uživatele pomocí `prompt()`, jaká je venku teplota. Do konzole vypište, zda je venku teplota vhodná na kraťasy a tričko s krátkým rukávem, tj. teplota mezi 20°C a 38°C.
*/

const teplota = Number(prompt('Zadej aktuální venkovní teplotu na měsíci'));

if (teplota >= 20 && teplota <= 38) {
	console.log(`Venku je krásných ${teplota}°C, klidně si vezmi kraťasy a tričko.`);
} else {
	console.log(`Venku je ${teplota}°C, jen tričko a kraťasy si raději neber.`);
}


/*
Cvičení 9: Hipster kavárna
Provozujete malou kavárnu. Nechte uživatele zadat 2 hodnoty:
- jakou chce kávu (např. espresso, cappuccino, flat white, latte)
- jak velkou ji chce (mala, stredni, velka)

Jsme kávoví snobové, takže podáváme pouze malé espresso nebo střední capucino. Pokud si uživatel vyžádal jednu z těchto dvou variant, vypište do konzole “Objednávka přijata”, jinak napište “Tuto kombinaci nepodáváme”.
*/

const kava = prompt('Jakou chcete kávu? (espresso, cappuccino, flat white, latte)');
const velikost = prompt('Jak velkou kávu chcete? (mala, stredni, velka)');

if (
	(kava === 'espresso' && velikost === 'mala')
	|| (kava === 'cappuccino' && velikost === 'stredni')
) {
	console.log('Objednávka přijata');
} else {
	console.log('Tuto kombinaci nepodáváme');
}



/*
Cvičení 10: Výběr z bankomatu
V programu máte dvě proměnné. V jedné je, kolik peněz má uživatel na účtu. V druhé je, kolik peněz má bankomat k dispozici. Nechte uživatele zadat, kolik peněz si chce vybrat.

Má-li dostatek peněz na účtu a bankomat má celou částku k dispozici, napište do konzole “Výběr v pořádku proveden”.

V opačném případě napište “Chyba při výběru”. Při chybě napište, zda je důvodem nedostatek peněz na účtu nebo v bankomatu. Je-li málo peněz v bankomatu, napište i kolik maximálně může bankomat vydat.
*/

const penezNaUctu = 6842;
const penezVBankomatu = 13500;

const castka = Number(prompt('Kolik si chcete vybrat peněz?'));

if (castka <= penezNaUctu && castka <= penezVBankomatu) {
	console.log(`Výběr ${castka} Kč v pořádku proveden`);
} else {
	if (castka > penezNaUctu) {
		console.log('Nemáte dost peněz na účtu');
	} else if (castka > penezVBankomatu) {
		console.log(`V bankomatu není dostatek peněz. Maximální částka pro výběr je ${penezVBankomatu} Kč`);
	}
}




/*
Cvičení 11: Pobyt na měsící pro mezinárodní klienty 🚀

Vycházejte ze stejného předpokladu, jako ve cvičení 8 - Pobyt na měsíci. Tentokrát ale máte na měsíci hotel a přijde za vámi host a řekne něco jako *“Venku je 64 stupňů. Mám si vzít kraťasy nebo raději skafandr?”*

Bohužel jsou mezi hosty i američani, a vy nevíte, zda vám host teplotu říká jako normální člověk ve stupních Celsia, nebo po americku ve stupních Fahrenheita.

Napište program, který se pomocí `prompt()` zeptá:
- kolik je venku stupňů
- zda host říká teplotu ve stupních Celsia nebo Fahrenheita (zadá `C` nebo `F`)

Pokud host odpoví, že teplotu říká ve stupních Fahrenheita, musíte ji nejprve převést na stupně Celsia. Vzorec pro převod je `celsius = (fahrenheit - 32) * 0.5556`

Pohybuje-li se teplota mezi 20°C a 38°C, doporučíte kraťasy a tričko 🩳, jinak skafandr 👩‍🚀.
*/

const teplotaVenku = Number(prompt('Jaká je venku na měsíci teplota?'));
const stupne = prompt('Zadali jste teplotu ve stupních Celsia nebo Fahrenheita? Odpovězte C nebo F.');

let teplotaCelsius = teplotaVenku;
if (stupne === 'F') {
	teplotaCelsius = (teplotaVenku - 32) * 0.5556;
}

if (teplotaCelsius >= 20 && teplotaCelsius <= 38) {
	console.log(`Venku je krásných ${teplotaCelsius.toFixed(1)}°C, klidně si vezmi kraťasy a tričko.`);
} else {
	console.log(`Venku je ${teplotaCelsius.toFixed(1)}°C, raději si obleč skafandr.`);
}

console.log('number' + 3 + 3); // 'number33'-    плюс конкантинує number,3,3
console.log(null + 3); // 3 -    нуль+3
console.log(5 && "qwerty"); // "qwerty"-    якщо обидва значення true, то оператор && повертає останнє значення
console.log(+'40' + +'2' + "hillel"); // '42hillel'-   плюс перед 40 і 2 перетворюють з рядків в числа і конкантинуються з hillel
console.log('10' - 5 === 6); // false-    10-5 не доріврює 6
console.log(true + false); // 1-     1+0=1
console.log('4px' - 3); // NaN- 4px не може перетворитись в число і відняти від себе 3
console.log('4' - 3); // 1-   4-3=1
console.log('6' + 3 ** 0); // '61' - 3 множимо на нуль і 6 конкантинуємо з 1
console.log(12 / '6'); //2 -   6 перед діленням вважається числом 12/6=2
console.log('10' + (5 === 6)); // '10false' 5 не дорівнює тому це false, 10 клнкантинується з false
console.log(null == ''); // false  -  null не доріанює порожньому рядку
console.log(3 ** (9 / 3)); // 27-  спочатку виконуємо вирах у дужкахб потім 3 підносимо в 3 степені
console.log(!!'false' == !!'true'); // true - Оператор !! перетворює значення в логічне. 'false' та 'true' - це обидва істинні рядки
console.log(0 || '0' && 1); // 1 - Оператор && має вищий пріоритет ніж ||. Спочатку він оцінює '0' && 1, що є 1.Потім він оцінює 0 || 1.
console.log((+null == false) < 1); // true   +null перетворює null у 0. Таким чином, це 0 == false, що є true.Потім це true < 1, що також є true
console.log(false && true || true); // true -  Спочатку false && true, що є false. Потім false || true, що ж true
console.log(false && (false || true)); // false  -  Спочатку false || true, що є true бо один з операндів є істинним. Потім false && true, що є false, бо оператори не істинні обтдва
console.log((+null == false) < 1 ** 5); // false я не зрозуміла чому
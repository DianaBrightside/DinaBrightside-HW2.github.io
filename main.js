// Task 0

/*
let numberOfDay = Number(prompt("Insert a number of a day"));

switch (numberOfDay) {
    case 1:
        console.log("it\'s Monday." + '\n' + "You have a meeting in Epam at 14:00.");
        break;
    case 2:
        console.log("it'\s Tuesday" + '\n' + "You have an English lesson in International House at 19:00.");
        break;
    case 3:
        console.log("it'\s Wednesday" + '\n' + "You have a free day. Do whatever you want.");
        break;
    case 4:
        console.log("it'\s Thursday" + '\n' + "You need to meet your aunt at the airport at 21:30.");
        break;
    case 5:
        console.log("it'\s Friday" + '\n' + "You have a Birthday party at your parents' house at 13:00.");
        break;
    case 6:
        console.log("it'\s Saturday" + '\n' + "You have a Programming lesson in Lemon School at 19:00.");
        break;
    case 7:
        console.log("it'\s Sunday" + '\n' + "You have a free day. Do whatever you want.");
        break;
    default:
        console.log("There is no such value. Insert a number from 1 to 7.");
} */

// Task 1

/*
let cityCode = prompt("Введите город или код города:");

switch (cityCode) {
    case "Москва":
    case "905":
        console.log("10-минутный телефонный разговор по Москве стоит 4.15 руб.");
        break;
    case "Ростов":
    case "194":
        console.log("10-минутный телефонный разговор по Ростову стоит 1.98 руб.");
        break;
    case "Краснодар":
    case "194":
        console.log("10-минутный телефонный разговор по Краснодару стоит 2.69 руб.");
        break;
    case "Киров":
    case "800":
        console.log("10-минутный телефонный разговор по Кирову стоит 5.00 руб.");
        break;
    default:
        console.log("Вы ввели неверный город или код города.");
}
*/

// Task 2

/*
let $min = 0;
for (i = 0; i <= 60; i++) {
    $min++;
    if ($min <= 15) {
        console.log($min + " – данное число находится в первой четверти часа.");
        continue;
    }
    else if ($min >= 16 && $min <= 30) {
        console.log($min + " – данное число находится во второй четверти часа.");
        continue;
    }
    else if ($min >= 31 && $min <= 45) {
        console.log($min + " – данное число находится в третьей четверти часа.");
    }
    else {
        if ($min >= 46 && $min <= 60) {
            console.log($min + " – данное число находится в четвертой четверти часа.");
        }
    }
}
*/

// Task 3

/*
let $num = Number(prompt("Введите номер для вывода времени года."));
let $result;
switch ($num) {
    case 1:
        $result = "Зима";
        console.log($result);
        break;
    case 2:
        $result = "Весна";
        console.log($result);
        break;
    case 3:
        $result = "Лето";
        console.log($result);
        break;
    case 4:
        $result = "Осень";
        console.log($result);
        break;
    default:
        console.log("Вы ввели неверное значение. Введите номер от 1 до 4.");
}
*/

// Task 4

// 4.0

/*
let height = 23;
let width = 10;

s = height * width;

console.log(s + "squere centimeters");
*/

// 4.1

/*
let heightC = 10;
let dC = 4;

v = Math.PI * (dC / 2) * (dC / 2) * heightC;

console.log(v + " cubic meters");
*/

// 4.2

/*
let n = 3;
let m = 4;

let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k);
*/

// Task 5

/*
let gap = 45;
do {
    console.log(gap);
    gap++;
}
while (gap <= 67);
*/

// 5.1

/*
let bigGap = 45;
while (bigGap <= 670) {
    bigGap++;
    if (bigGap % 10 == 0) {
        console.log(bigGap);
    }
}
*/

// 5.2(1)

/*
let smallGap = 45;

for (i = 45; i <= 67; i++) {
    console.log(smallGap);
    smallGap++;
}
*/


// 5.2(2)

/*
let multipleGap = 45;
for (i = 0; i <= 670; i++) {
    multipleGap++;
    if (multipleGap <= 670 && multipleGap % 10 == 0) {
        console.log(multipleGap + " – данное число кратно 10.");
    }
}
*/

// Task 6

/*
let naturalNumber = prompt("Введите натуральное число.");
let evenNumeral = naturalNumber.split('');
let sum = 0;
console.log(evenNumeral);

for (i = 0; i < evenNumeral.length; i++) {
    if (evenNumeral[i] % 2 === 0) {
        sum = sum + Number(evenNumeral[i]);
        console.log(sum);
    }
    else {
        console.log("Данное число – нечетное.");
    }
}
*/

// Task 7

/*
let x = Number(prompt("Введите первое число."));
let operatorSign = prompt("Введите знак операции.");
let y = Number(prompt("Введите второе число."));

for (i = 0; ; i++) {
    switch (operatorSign) {
        case  "+":
            operationAddition = x + y;
            console.log(operationAddition);
            break;
        case "-":
            operationSubtraction = x - y;
            console.log(operationSubtraction);
            break;
    }
    break;
    let repeatOperation = prompt("Хотите продолжить операцию?");
    if (repeatOperation === "Да" || repeatOperation === "да") {
        continue;
    }
    else {
        break;
    }
}
*/

// Task 8

/*
let number = "255";

let splitNumber = number.split("");
console.log(splitNumber);
let sum = 0;

for (i = 0; i < splitNumber.length; i++) {
    if (splitNumber[i] % 2 === 1) {
        sum = sum + Number(splitNumber[i]);
    }
    else {
        console.log("Число четное");
    }
}
console.log("Сумма нечетных чисел: " + sum);
*/

// Task 9

/*
let multiTable = Number(3);
let factor = 0;

for (i = 0; i < 10; i++) {
    if (factor < 10) {
        factor++;
        let result = multiTable * factor;
        console.log(multiTable + " * " + factor + " = " + result);
    }
    else {
        break;
    }
}
*/

// Task 10

// Не решена задача для отрицательного и дробного числа

/*
let positiveNumber = Number(prompt("Введите целое положительное число."));
let addNumber = Number(0);

for (i = 0; i < positiveNumber; i++) {
    if (addNumber <= positiveNumber) {
        addNumber++;
        console.log(addNumber);
    }
    else if (Math.sign(positiveNumber) === -1) {
        console.log("vrve");
        break;
    }
    else {
        break;
    }
}
*/
 console.log(' Приклад домашнього завдання з JavaScript')
console.log("Завдання 1 ====================================");
/**#1** Створіть змінні зі значеннями.*/
// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10; //number
console.log(myNum)
let myStr = 'some string'; //String
console.log(myStr)
let myBool = true; //Boolean - для логічних значень, може бути true або false
console.log(myBool)
let myArr = [1, 2, 3, 4, 5]; /*massiv*/
console.log(myArr)
let myObj = { first: 'First Name', last: 'Last Name' }; //object
console.log(myObj)

console.log("Завдання 2 ====================================");
/** #2** Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.*/

myNum = 10;
console.log(myNum.toFixed(2));
let decimal2;
decimal2 = myNum;
console.log(decimal2)
// decimal2

console.log("Завдання 3 ====================================");
/** #3** Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.*/
//Инкремент ++ увеличивает переменную на 1
//Декремент -- уменьшает переменную на 1
//Когда оператор идёт после переменной — это «постфиксная форма»: counter++
//«Префиксная форма» — это когда оператор идёт перед переменной: ++counter

let i = 5;
i++;
console.log(i) //+1 = 6
i--; //-1 =5
console.log(i) //=5
++i; //+1 
console.log(++i) //+1=7
i++;//+1 = 8
console.log(i++) // (+1) no 8 staroe znachenie

i = 22
console.log(i++) //*vozvrashaet ctaroe znachenie*/

i = 7
/*console.log(3 * i++)*/
console.log(3 * ++i) //7+1 =>3*8=24

console.log("Завдання 4 ====================================");
/** #4*
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.*/
// myTest
// +=
// –=
// *=
// /=
// %=
let myTest = 20;
console.log(myTest += myNum)
myTest = 20;
console.log(myTest += 'myNum')
myTest = 20;
console.log(myTest += '10')
myTest = 20;
console.log(myTest -= myNum)
myTest = 20;
console.log(myTest *= myNum)
myTest = 20;
console.log(myTest /= myNum)
myTest = 20;
console.log(myTest %= 7) //Оператор взятия остатка %


console.log("Завдання 5 ====================================");
/** #5* Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.*/
// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

const myPi = Math.PI
console.log(myPi);

let number = 89.279;
let myRound = Math.round(number);//Math.round(), яка дозволяє округлити число до найближчого цілого.
console.log(myRound);  

let myRandom = Math.random(10) ; //Math.random(), яка повертає випадкове число між 0 (включно) та 1 (не включаючи).
console.log(myRandom);  

let myPow = Math.pow(3,5) //Підносить число до вказаного степеня та повертає результат.Math.pow(base, exponent)
console.log(myPow);

console.log("Завдання 6 ====================================");
/** #6*
 * * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.*/

// Мама мыла раму, рама мыла маму
// strObj

const str = "Мама мыла раму,рама мыла маму"
let length = str.length
let strObj = { str, length}; //
console.log(strObj);

console.log("Завдання 7 ====================================");
/** #7*
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.*/ 

// isRamaPos
// isRama

let isRama = str.includes("рама");
console.log(isRama);
let isRamaPos = str.indexOf("рама")
console.log(isRamaPos);
let ismyRamaPos = str.indexOf("рамe")
console.log(ismyRamaPos);//-1 Возвращает -1, если значение не найдено.


console.log("Завдання 8 ====================================");
/** #8*
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'*/

// strReplace

let strReplace = str.replace(('мыла', 'моет'), ('рама', 'Рама'), ('мыла', 'держит'));
console.log(strReplace);
let strReplace1 = str.replace("Мама мыла раму, рама мыла маму", "Мама моет раму, Рама держит маму")
console.log(strReplace1); 


console.log("Завдання 9 ====================================");
/** #9*
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.*/

// var someStr = 'some STRING'
// var upperStr
// var lowerStr

let someStr = 'some STRING'
let upperStr
console.log(someStr.toUpperCase(upperStr)); //Метод toUpperCase() возвращает значение строки, преобразованное в верхний регистр
let lowerStr
console.log(someStr.toLowerCase(lowerStr));//str.toLowerCase()возвращает значение строки, преобразованное в нижний регистр.
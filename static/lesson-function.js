/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */

// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Выполянется функция add');

//   return x + y;
// };

// const r1 = add(5, 3);
// console.log('r1: ', r1);

// const r2 = add(10, 15);
// console.log('r2: ', r2);

// const r3 = add(30, 50);
// console.log('r3: ', r3);

// const fn = function (value) {
//   console.log(1);
//   console.log(2);

//   if (value < 50) {
//     return 'Меньше чем 50';
//   }

//   return 'Больше чем 50';
// };

// console.log('Результат функции: ', fn(10));

// console.log('Результат функции: ', fn(1000));

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */


/*const fnA = function () {
    console.log('Выполняется функция A');
  };
  
  const fnB = function () {
    console.log('Выполняется функция B');
  };
  
  const fnC = function () {
    console.log('Выполняется функция C');
  };
  
  // console.log('Лог перед вызовом функции A');
  
  fnA();
  
  // console.log('Лог после вызова функции A');
  
  // console.log('Лог перед вызовом функции B');
  fnB();
  // console.log('Лог после вызова функции B');
  
  // console.log('Лог перед вызовом функции C');
  fnC();
  // console.log('Лог после вызова функции C');

*/
/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */
/*
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
total += value;
}

console.log('Total: ', total);
*/
/*
const calculateTotalPrice = function (items) {
  //console.log('items внутри функции: ', items);

  let total = 0;

  for (const item of items) {
    total += item;
  }

  return total;
};

const r1 = calculateTotalPrice([1, 2, 3]);

console.log(`Общая сумма покупок ${r1}`); // 6
console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
console.log(calculateTotalPrice([100, 200, 300])); // 600
*/


 /*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

//logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
//logItems([1, 2, 3, 4, 5]);
//logItems(['клавиатура', 'наушники', 'часы']);

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
/*
const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
     return `Пользователь ${loginToFind} найден.`;
    }
  }

  return `Пользователь ${loginToFind} не найден.`;
};
*/

const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;
};

//console.log(findLogin(logins, 'avocod3r'));
//console.log(findLogin(logins, 'k1widab3st'));
//console.log(findLogin(logins, 'jam4l'));
//console.log(findLogin(logins, 'poly1scute'));


/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

//console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
//console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
//console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4


/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }
  
  return invertedString;
};

//console.log(changeCase('qweRTY')); // QWErty
//console.log(changeCase('mAnGo')); // MaNgO
//console.log(changeCase('AjAx')); // aJaX


/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */
/*
const slugify = function (string) {
  // const normalizedString = string.toLowerCase();
  // const words = normalizedString.split(' ');
  // const slug = words.join('-');
  // return slug;

  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writing tips for non-native English speakers'));
*/
/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//   console.log(arguments);

//   const args = Array.from(arguments);

//   console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c, ...args) {
//   console.log(`${a} ${b} ${c}`);
//   console.log(args);
// };

// fn('hello', 1, 2, 3);
// fn('aloha', 1, 2, 3, 4, 5);
// fn('hi', 1, 2, 3, 4, 5, 6, 7);

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */

/*
const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));
*/
/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */


/*
const filterNumbers = function (array, ...args) {
  console.log('array: ', array);
  console.log('args: ', args);
  const uniqueElements = [];

  for (const element of array) {
    if (args.includes(element)) {
      uniqueElements.push(element);

      console.log(`${element} есть везде!`);
    }
  }

  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]
*/

/*
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line
 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0 ; // Change this line
      break;
    case "professional": // Change this line
      price = 20; // Change this line
      break;
    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }
  // Change code above this line
  return price;
}
console.log(getSubscriptionPrice("starter"));
*/

//? ----------------------------------------------- питання з таблиці-----------------

//? Чому в if (numbers[i] ...) показуються значення з нашого масиву,
//? адже в масиві немає "i", є лише числа


// const numbers = [1, 18, 4, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   console.warn(`i=${i} item=${numbers[i]}`);
//   // const item = numbers[i];
//   // if (item < threshold) {}

//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }





//? Аргументи всередині функції є змінними let, чи це вид локальних змінних?

// let value = 5;
// function doStuff(value) {
//   value += 5;
//   console.log('inside doStuff', value);
// }



// let arrayOfValues = [1];
// function doStuffWithArray(value) {
//   value.push(5);
//   console.log('inside doStuffWithArray', value);
// }




// doStuff(value);
// console.log('after doStuff', value);

// doStuffWithArray(arrayOfValues);
// console.log('after doStuffWithArray', arrayOfValues);


//? ----------------------------------------------------------------------------------




//? ## Example 0 - Логування контактів
/*
Створити функцію `printContactsInfo(names, phones)` яка виведе в консоль им'я і телефон
користувача. В параметри `names` і `phones` очікуються строки імен і номеров,
розділені комами.
Порядковий номер імені і телефона вказує на відповідність
Кількість імен і телефонів гарантовано однакова
*/
/*
function printContactsInfo(names = '', phones = '') {
const arrayOfNames = names.split(',');
const arrayOfPhones = phones.split(',');
console.log('arrayOfNames', arrayOfNames);
console.log('arrayOfPhones', arrayOfPhones);

const noPhone = 'no-phone';

for (let i = 0; i < arrayOfNames.length; i += 1) {
const aName = arrayOfNames[i];
const aPhone = arrayOfPhones[i];

//     // v1
//console.log(`name: ${aName}; phone: ${aPhone ? aPhone : noPhone}`);

//     // v2
console.log(`name: ${aName}; phone: ${aPhone || noPhone}`); 
  }
}

printContactsInfo(
'Jacob,William,Solomon,Nicolas',
'89001234567,89001112233,890055566377,890055566300',
);

printContactsInfo(
'Jacob,William,Solomon,Nicolas',
'89001234567,89001112233,890055566377',
);

*/




//? ## Example 1 - Площа прямокутника
/*
Написати функцію `getRectangleArea(dimensions)`  для обчислення прощі прямокутника
зі сторонами, значения яких отримуємо в параметр `dimensions` у вигляді строки.
Значення гарантовано розділені пробілом.
*/

/**
 * Calculates area of rectangle
 *
 * @param {string} sizes
 *
 * @returns {number}
 */
 function getRectangleArea(sizes) {
  const arrayOfSizes = sizes.split(' ');
  console.log('arrayOfSizes', arrayOfSizes);

  // const calculatedArea = arrayOfSizes[0] * arrayOfSizes[1];
  // return calculatedArea;

  // return arrayOfSizes[0] * arrayOfSizes[1];
  const lastElementIndex = arrayOfSizes.length - 1;
  console.log('lastElementIndex', lastElementIndex);
  return arrayOfSizes[0] * arrayOfSizes[lastElementIndex];
}


// const area = getRectangleArea('8 11');
// console.log(`Rect area is ${area}`);





//? ## Example 2 - Найменше з чисел

// Написати функцію `min(a, b)`, яка повертає найменше з чисел `a` и `b`.
/*
function min(a, b) {
return Math.min(a, b);
}

console.log( min(1.5, 5) ); // 2
console.log( min(3, -1) ); // -1
console.log( min(1, 1) ); // 1
console.log( min(1, 1) ); // 1
*/
/*
 stack:
  - console.log() <- 2
  -- min(2, 5) <- 2
  --- Math.min(2, 5) <- 2
*/





//? ## Example 3 - Пошук найбільшого елемента
/*
Написати функцію `findLargestNumber(numbers)` яка повертає найбільше значення
із переданого масиву.
*/
/*
function findLargestNumber(numbers = []) {
  // v1
//return Math.max(...numbers); // [42, 3, 7] => 42, 3, 7


  //v2 for-of
let maxNumber = 0;
for (const item of numbers) {
//console.log(item);

maxNumber = Math.max(item, maxNumber);
}

return maxNumber;
}

console.warn( findLargestNumber([2, 17, 94, 1, 23, 37]) ); // 94
console.warn( findLargestNumber([49, 4, 7, 83, 12]) ); // 83

*/




//? ## Example 4 - Середнє значення
/*
Написати функцію `getAverage()` що приймає будь-яку кількість аргументів
і повертає їх середнє значення. Всі аругменти - тільки числа.
*/
/*
function getAverage() {
  // v1 - arguments
  console.log('arguments', arguments); // довжина дорівнює кількості аргументів

  // early return
  if (arguments.length === 0) {
    console.warn('no arguments set');
    return null;
  }


  // console.log('length', arguments.length);
  const arrayOfValues = Array.from(arguments); 
  console.log('arrayOfValues', arrayOfValues);

  let total = 0;
  for (const number of arrayOfValues) {
    total += number;
  }

  return total / arrayOfValues.length;
}


function getAverageWithRest(...items) {
  console.log('> rest into items:', items);

  Math.max(...items); // [1, 2] => Math.max(1, 2)
  return Math.max(...items);
}

//console.log( getAverage(1, 2, 3, 4) ); // 2.5
//console.log( getAverage(14, 8, 2) ); // 8
//console.log( getAverage(27, 43, 2, 8, 36) ); // 23.2
//console.log( getAverage() );

console.log(getAverageWithRest(1, 45, 8));
console.log(getAverageWithRest());

*/



//? ## Example 5 - обчислення індексу маси тіла (BMI body mass index)
/*
Написати функцію `calcBMI(weight, height)` що розраховує і повертає
індекс маси тіла людини. Для цього необхідно розділити вагу в кг
на квадрат висоти людини в метрах.
Вага і зріст будуть передаватись у вигляді строк. Дробні числа можуть бути
задані як `24.7` або `24,7`, тобто десятичний розділювач або точка або кома.
Індекс маси необхідно округлити до однієї цифри після коми (до десятих)
*/

//function convertStringToNumber(str = '') {
//  const validString = str.replace(',', '.');
//  return Number(validString);
//}
/*
function calcBMI(weight = '', height = '') {
 const convertStringToNumber = function (str = '') {
 const validString = str.replace(',', '.');
 return Number(validString);
 }



  const validParam1 = convertStringToNumber(weight);
  const validParam2 = convertStringToNumber(height);

  console.log(validParam1, validParam2);


  const result = validParam1 / Math.pow(validParam2, 2);

  return result.toFixed(1);
}

const bmi = calcBMI('88,3', '1.75');
console.log('bmi', bmi); // 28.8

/*
  stack:
  - calcBMI('88,3', '1.75')
    - convertStringToNumber('88,3')
     - '88,3'.replace(',', '.') <- '88.3'
   - convertStringToNumber('1.75')
     - '1.75'.replace(',', '.') <- '1.75'
 */




//? ## Example 6 - Коллекция курсов (includes, indexOf, push и т. д.)
/*
Написати функції для роботи з колекцією навчальних курсов `courses`:
- `addCourse(name)` - добавляет курс в конец коллекции
- `removeCourse(name)` - удаляет курс из коллекции
- `updateCourse(oldName, newName)` - изменяет имя на новое
*/
/*
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// 1 - addCourse
function addCourse(courseName = '') {
  if (courses.includes(courseName)) {
    console.warn('Такий курс вже існує');
    return;
  }

  courses.push(courseName);
}


console.log('--- addCourse');
addCourse('Express');

console.log(courses);
// має вивести ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']

addCourse('CSS'); // має вивести ворнінг 'Такий курс вже існує'

// 2 - removeCourse
console.log('--- removeCourse');
function removeCourse(courseName = '') {
  if (!courses.includes(courseName)) {
    console.warn(`Курс з назвою ${courseName} не знайдено`);
    return;
  }

  const indexOfCourse = courses.indexOf(courseName);
  courses.splice(indexOfCourse, 1);
}

removeCourse('React');
console.log(courses);
// ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']

removeCourse('Vue'); // ворнінг 'Курс з назвою %назва_курсу% не знайдено'

// 3 - updateCourse
console.log('--- updateCourse');
function updateCourse(oldName = '', newName = '') {
  const oldNameIndex = courses.indexOf(oldName);
  courses[oldNameIndex] = newName;
}

updateCourse('Express', 'NestJS');
console.log(courses);
['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

*/
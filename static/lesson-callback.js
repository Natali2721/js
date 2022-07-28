// hw1
function makePizza() {
    return "Your pizza is being prepared, please wait.";
  }
  // Change code below this line
  
  const result = makePizza();
  const pointer = makePizza;

  //console.log(result);
  //console.log(pointer);

  function registerGuest(name, callback) {
    //console.log(`Регистрируем гостя ${name}.`);
    callback(name);
  }
  
  // Передаём инлайн функцию greet как колбэк
  registerGuest("Манго", function greet(name) {
    //console.log(`Добро пожаловать ${name}.`);
  });
  
  // Передаём инлайн функцию notify как колбэк
  registerGuest("Поли", function notify(name) {
    //console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
  });

  function greet(name) {
    //console.log(`Добро пожаловать ${name}.`);
  }
  
  // Функция высшего порядка
  function registerGuest(name, callback) {
    //console.log(`Регистрируем гостя ${name}.`);
    callback(name);
  }
  
  registerGuest("Манго", greet);

  /*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//     console.log(message);

//     console.log(callback);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Это лог при вызове fnB', number);
// };

// fnA('qweqwe', fnB);

/*
 * функция doMath(a, b, callback)
 */

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

// doMath(2, 3, function (x, y) {
//     return x + y;
// });

// doMath(10, 8, function (x, y) {
//     return x - y;
// });

/*
* Отложенный вызов: регистрация событий
*/

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
  console.log('Клик по кнопке ' + Date.now());
};

// buttonRef.addEventListener('click', handleBtnClick);

/*
* Отложенный вызов: геолокация
*/

const onGetPositionSuccess = function (position) {
  console.log('Это вызов onGetPositionSuccess');
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log('Это вызов onGetPositionError');
  console.log(error);
};

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

/*
* Отложенный вызов: интервалы
*/

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

// console.log('В коде перед таймаутом');
// setTimeout(callback, 2000);
// console.log('В коде после таймаута');

/*
* Отложенный вызов: http-запрос
* - API URL: https://pokeapi.co/api/v2/pokemon
*/

const onRequestSuccess = function (response) {
  console.log(
      'Вызов функции onRequestSuccess после успешного ответа бекенда',
  );
  console.log(response);
};

// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

/*
* Фильтр
*/

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
      console.log(el);
      const passed = test(el);

      if (passed) {
          filteredArray.push(el);
      }
  }

  return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const callback2 = function (value) {
  return value <= 4;
};

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);





/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

const fnA = function (parameter) {
  const innerVariable = 'значение внутренней переменной функции fnA';

  const innerFunction = function () {
      console.log(parameter);
      console.log(innerVariable);
      console.log('Это вызов innerFunction');
  };

  return innerFunction;
};

// const fnB = fnA(555);

// fnB();

// console.log(fnB);

/*
* Поварёнок
*/
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

const makeSheff = function (name) {
  const innverVar = 555;
  const message = 'hello';

  const makeDish = function (dish) {
      console.log(message);
      console.log(innverVar);
      console.log(`${name} готовит ${dish}`);
  };

  return makeDish;
};

// const mango = makeSheff('Mango');

// console.dir(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');

// console.dir(poly);

// poly('чай');
// poly('омлет');

// console.dir(mango);

/*
* Округлятор 🤷‍♂️
*/

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
  return function (number) {
      return Number(number.toFixed(places));
  };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
* Приватные данные и функции - скрытие реализации, интерфейс
*/

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
      raise(amount) {
          if (amount > 1000) {
              return 'Ты офигел?';
          }

          salary += amount;
      },
      lower(amount) {
          salary -= amount;
      },
      current() {
          return `Текущая зарпалата ${employeeName} - ${salary}`;
      },
  };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());




/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (a, b, c) => {
//     return a + b + c;
// };

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());
/*
const filter = (array, test) => {
  const filteredArray = [];

  for (const el of array) {
      console.log(el);
      const passed = test(el);

      if (passed) {
          filteredArray.push(el);
      }
  }

  return filteredArray;
};

// const callback1 = value => value >= 3;

const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

console.log(r1);

// const callback2 = value => value <= 4;

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
console.log(r2);

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);

*/


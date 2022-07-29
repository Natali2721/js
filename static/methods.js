const numbers = [1, 2, 3, 4, 5, 6, 15, 12];
const arrNumbers = [1, 2, 3, [5, 6], [7, [8, 9, 10]]];

const number = numbers.find(number => number > 10);
//console.log(number);

const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
//console.log(filteredNumbers);

/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

//const numbersR = [5, 10, 15, 20, 25];
/*
numbersR.forEach(function (number) {
  console.log('number', number);
});

*/
//console.log(numbers);
///console.log(arrNumbers);

const numbersDooble = numbers.map(num => num * 2);

//console.log(numbersDooble);

const numRow = arrNumbers.flatMap(number => number).flatMap(number => number);
const numRowElse = [...arrNumbers]
  .flatMap(number => number)
  .flatMap(number => number);
//console.log(numRow);
//console.log(numRowElse);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
//console.table(players);

/*
 * Получаем массив имён всех игроков
 */

const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('res', res);

/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

const upatedPlayers = players.map(player => ({
  ...player,
  points: player.points * 1.1,
}));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;
});

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);
/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */


/*
 * Получаем массив всех онлайн игроков
 */

const onlinePlayers = players.filter(({ online }) => online);
// console.table(onlinePlayers);

/*
 * Получаем массив всех оффлайн игроков
 */

const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

/*
 * Получаем список хардкорных игроков с временем больше 250
 */

/*
const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);

*/
const playerIdToFind = 'player-3';
const playerWithId = players.find(({ id }) => id === playerIdToFind);
//console.log(playerWithId);

const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(({ id }) => id === playerId);
};

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'player-4'));

/*
 * Ищем игрока по имени
 */
const playerNameToFind = 'Poly';
const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);

/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */

const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
console.log('anyHardcorePlayers: ', anyHardcorePlayers);



const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);

// console.log(totalTimePlayed);





const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */
/*
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

const stats = tweets
  .flatMap(tweet => tweet.tags)
  .reduce(
    (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
    {},
  );

//console.log(stats);


/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

/*
//! Объсните пример подсчета количества тегов.


// збирає всі теги в новий масив
const getTags = (tweets = []) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);

const tags = getTags(tweets);
// console.log(tags);

// підрахунок скільки разів тег зустрічається в масиві
const getTagStats = (acc = {}, tag = '') => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;
  return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
// console.log('tagCount', tagCount);
*/

const anims = ["cat", "dog", "bird", "cat", "cat", "cat"];

// підрахунок скільки разів тег зустрічається в масиві
const animStats = (acc = {}, anim = '') => {
  if (!acc.hasOwnProperty(anim)) {
    acc[anim] = 0;
  }

  acc[anim] += 1;
  return acc;
};

const countAnim = (anims) => anims
  .reduce(animStats, {});

const animCount = countAnim(anims);
//console.log('animCount', animCount);

//

/*

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: [
      'Jacklyn Lucas',
      'Linda Chapman',
      'Adrian Cross',
      'Solomon Fokes',
    ],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const getUsersNames = users.map(user => user.name);

const getSortedByFriendCount = users.sort(
  (firstUser, secondUser) =>
    secondUser.friends.length - firstUser.friends.length,
);

const getNamesSortedByFriendCount = users
  .sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length,
  )
  .map(user => user.name);
const getNamesSortedByFriendCountNew = users => (
  [...users]
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length,
    )
    .map(user => user.name)
);

const getSortedFriends = users.flatMap(user => user.friends)
  .filter((friend, index, array) => array.indexOf(friend) === index)
  .sort((a, b) => a.localeCompare(b))
;

const getNewSorted = [...users].flatMap(user => user.friends)
 .filter((friend, index, array) => array.indexOf(friend) === index)
 .sort((a, b) => a.localeCompare(b))
;


const getTotalBalanceByGender = (users, gender) => 
    [...users]
    .filter(user => user.gender === gender)
    .reduce((total, user) => {
      return total + user.balance;
     }, 0);
;


console.log(getUsersNames);
console.log(getSortedByFriendCount);
console.log(getNamesSortedByFriendCount);
console.log(getSortedFriends);
console.warn(getNewSorted);

console.log(getTotalBalanceByGender(users, 'male'));
*/


//? ----------------------------------------------------------------------------------



// Будемо працювати з даним списком автомобілів
const cars = [
  { make: 'Honda',  model: 'CR-V',     type: 'suv',   amount: 14, price: 24045, onSale: true },
  { make: 'Honda',  model: 'Accord',   type: 'sedan', amount: 2,  price: 22455, onSale: true },
  { make: 'Mazda',  model: 'Mazda 6',  type: 'sedan', amount: 8,  price: 24195, onSale: false },
  { make: 'Mazda',  model: 'CX-9',     type: 'suv',   amount: 7,  price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner',  type: 'suv',   amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia',  type: 'suv',   amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma',   type: 'truck', amount: 4,  price: 24320, onSale: true },
  { make: 'Ford',   model: 'F-150',    type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford',   model: 'Fusion',   type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford',   model: 'Explorer', type: 'suv',   amount: 6,  price: 31660, onSale: false },
  { make: 'Ford',   model: 'Explorer v2', type: 'suv',amount: 0,  price: 31660, onSale: false }
];


//? ## Example 0 - Метод map (easy)
/*
  Отримати масив в якому будуть назви моделей наявних авто (amount > 0)
*/
const getModelNames = (cars = []) => {
  // return cars.map((car) => car.model);

  // v1
  // return cars
  //   .map((car) => car.amount ? car.model : null)
  //   .filter((modelName) => !!modelName);     // !!'ford' => false => !false => true
    // .filter((modelName) => modelName !== null);

  // v2
  return cars
    .filter((car) => !!car.amount)
    .map((car) => car.model)

}


//console.log( getModelNames(cars) );




//? ## Example 1 - Метод map (not so easy)
/*
  Написати функцію applyDiscount(cars = [], discount = 0), яка буде застосовувати
  надану знижку (%)
  до ціни кожного автомобіля, і повертати масив з новими даними.
  ! Важливо: початкові дані в масиві cars мають залишатись незмінними
*/

function applyDiscount(cars = [], discount = 0) {

  // v1
  // return cars.map((car) => {
  //   return {
  //     ...car,
  //     price: car.price - discount
  //   }
  // });

  // v2
  return cars.map((car) => ({
      ...car,
      price: car.price - discount
  }));
}

//console.log( applyDiscount(cars, 10_000) );
//console.log(cars);






//? ## Example 2 - Метод filter (easy)
/*
  Написати функцію filterByPrice(limit = 0), яка має фільтрувати автомобілі за ціною,
  і повертати  масив авто у яких ціна нижче за переданий ліміт
*/

function filterByPrice(cars = [], limit = 0) {
  // v1
  // return cars.filter((car) => car.price <= limit)

  // v2
  return cars.filter(({ price }) => price <= limit);
}


//console.log( filterByPrice(cars, 10_000) );
//console.log( filterByPrice(cars, 25_000) );
// console.log( filterByPrice(cars, 100_000) );





//? ## Example 3 - Метод find
/*
  Функція getCarByModel має повертати об'єкт авто із заданою моделлю
*/
// v1
const getCarByModel = (cars = [], model = '') => {
  return cars.find(({ model: carModel }) => carModel === model);
};

// v2
const getCarByModelV2 = (cars = [], model = '') => cars
  .find(({ model: carModel }) => carModel === model);

// приклади
//console.log( getCarByModel(cars, 'F-150') );
// console.log( getCarByModel(cars, 'CX-9') );
// console.log( getCarByModel(cars, 'CX-9999.99') );






//? ## Example 4 - Метод filter + every (not so easy)
/*
  Написати функцію filterBy(cars, filterObject), яка буде отримувати масив, і фільтр у вигляді
  об'єкта з потрібними умовами
  Повертати масив авто які відповідають всім умовам для переданого фільтра
*/

const filterByHondaAndFord = {
  make: (make) => ['Honda', 'Ford'].includes(make)
}

const filterCheapFords = {
  make: (make) => make === 'Ford',
  price: (price) => price < 30_000
}

const filterTrucksOnSale = {
  onSale: (onSale) => onSale === true,
  type: (type) => type === 'truck'
}

/**
 * Отримує об'єкт з фільтрами, і повертає масив із авто для яких
 * кожний фільтр з об'єкта повернув true
 *
 * @param {Object[]} cars
 * @param {Object} filterObject об'єкт з колбеками в якості фільтрів
 *
 * @returns {Object[]}
 */


function filterBy(cars, filterObject) {
  const filterKeys = Object.keys(filterObject);
  // console.log('filterKeys', filterKeys);

  return cars.filter((car) => {
    const isAllFiltersOK = filterKeys.every((key = '') => {
      const currentFilterFn = filterObject[key];
      //console.log(key, filterObject[key], car[key]);

      // return currentFilterFn( car[key] ); // car.make => Ford, Toyota...
      return currentFilterFn( car[key] ); // car.price => 20000...
    });

    return isAllFiltersOK;
  });
}


//console.log( filterBy(cars, filterByHondaAndFord) );
//console.log( filterBy(cars, filterCheapFords) );
//console.log( filterBy(cars, filterTrucksOnSale) );






//? ## Example 5 - Метод sort (easy)
/*
  Написати функцію sortByAmountAscending(cars), що повертає новий масив з
  відсортованими авто за значенням в ключі amount, сортування за зростанням
*/

/**
 * @param {Object[]} cars
 */
const sortByAscendingAmount = function (cars = []) {
  return [...cars].sort((current, next) => current.amount - next.amount);
};


// console.log( sortByAscendingAmount(cars) );
// console.log(cars);









//? ## Example 6 - Метод sort (a bit harder)
/*
  Написати функцію sortByAmount(cars, isAsc = true), що повертає новий масив з відсортованими авто.
  Параметр isAsc відповідає за тип сортування - за збільшенням чи за зменшенням кількості
*/

//const sortAsc = (current, next) => current.amount - next.amount;
//const sortDesc = (current, next) => next.amount - current.amount;

/**
 * @param {Object[]} cars
 * @param {boolean} isAsc
 */

/*
const sortByAmount = function (cars = [], sortFn) {
  // return [...cars].sort(isAsc ? sortAsc : sortDesc);
  return [...cars].sort(sortFn);
};



console.log( sortByAmount(cars) );
console.log( sortByAmount(cars, false) );
*/

/*







/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
  { label: 'Oranges', price: 150, quantity: 5 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);

const totalQuantity = cart.reduce(
  (total, { quantity }) => total + quantity,
  0,
);

const assorty = cart.map(item => item.label);

const priceLux = cart.filter(item => item.price > 100);

const findApples = cart.find(item => item.label === 'Apples');

//const sortByPrice = cart.sort((a, b) => { return a.price - b.price; });
// змінює вихідний массив

const sortByPriceNew = [...cart].sort((a, b) => { return a.price - b.price; });
// не змінює вихідний массив



console.log(totalAmount);
console.log(totalQuantity);
console.log(assorty);
console.log(priceLux);
console.log(findApples);
//console.log(sortByPrice);


console.log(sortByPriceNew);

console.log(cart);




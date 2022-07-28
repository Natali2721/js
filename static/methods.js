const numbers = [1, 2, 3, 4, 5, 6];
const arrNumbers = [1, 2, 3, [5, 6], [7, [8, 9, 10]]];

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

console.log(numbersDooble);

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

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

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


const anim =["cat", "dog", "bird", "cat", "cat", "cat"];

//const obj = anim.forEach((item) => ({ `${item}` : 1, }));
//obj();



  
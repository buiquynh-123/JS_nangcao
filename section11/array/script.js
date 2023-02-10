"use strict";
const account1 = {
  owner: "Jonas Schnedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const accounts = [account1, account2, account3, account4];
const form = document.querySelector("#form-add");
const username = document.querySelector(".username");
const iduser = document.querySelector(".iduser");
const login = document.querySelector(".login");
const container = document.querySelector(".container");
const totalmoney = 0;

let arr = ["a", "b", "c", "d", "e"];
// trường hợp 1: cắt mảng từ phần tử thứ mấy
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
// SPLICE
console.log(arr.splice(2));

console.log(arr);
// REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(" - "));

// The new at Method
const arr3 = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
// th1: at dùng để lấy ra phần tử thứ mấy theo mong muốn
console.log(arr.at(-1));
console.log("jonas".at(0));
// Looping Arrays : forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("---------- FOREACH");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// MAP

const currentcies = new Map([
  ["USE", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
currentcies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// SET
const currentciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currentciesUnique);
currentciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
// The map method
const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, index) => {
  `Movement ${index + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
    mov
  )}`;
});

console.log(movementsDescriptions);

const user = "Steven Thomas Williams";
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

// filter Method
const deposits = movements.filter((mov, i, arr) => {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// the reduce method
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur
// }, 0)
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
let balance2 = 0;

for (const mov of movements) balance2 += mov;
console.log(balance2);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
// findIndex
// some & every
console.log(movements);
// dùng includes để tìm xem có -130 không nếu có thì trả về true
console.log(movements.includes(-130));
// dùng some để kiểm tra xem mảng có phần tử nào thỏa mãn điều kiện không nếu có trả về true còn ko thì trả về false

const anyDeposits = movements.some((mov) => mov > 0);
console.log(anyDeposits);
// every
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

// flap: có tác dụng làm phẳng mảng & flapmap

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
const overalBalance2 = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

const overalBalance3 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance3);

// =====================================
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);
// Numbers
console.log(movements);
console.log(movements.sort());
// return < 0 , A, B ( keep order)
// return > 0 , B, A (switch order)
// tăng dần
movements.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});
// c2:
movements.sort((a, b) => a - b);
// giảm dần
movements.sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
});
movements.sort((a, b) => b - a);

console.log(movements);

console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));
const x = new Array(7);
console.log(x);
// fill dùng để thêm phần tử vào mảng fill(giá trị, bắt đầu từ index, kết thúc từ index)
x.fill(1, 3, 5);
x.fill(1);
console.log(x);
arr.fill(23, 2, 6);
console.log(arr);

//  Array.form()
const y = Array.form({ length: 7 }, () => 1);
console.log(y);
const z = Array.form({ length: 7 }, (cur, i) => i + 1);
console.log(z);

// Array Methods Practice
// 1.
const backDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(backDepositSum);
// 2.
// const numDeposits1000 = account
//   .flatMap((acc) => acc.movements)
//   .filter((mov) => mov > 1000).length;
const numDeposits1000 = account
  .flatMap((acc) => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
console.log(
  account.flatMap((acc) => acc.movements).filter((mov) => mov > 1000)
);
console.log(numDeposits1000);
let a = 10;
console.log(a++);
// 3.
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits.withdrawals);

// 4. viet hoa chu dau
const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toLowerCase() + str.slice(1);
  const expection = ["a", "an", "the", "but", "or", "on", "in", "with"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      (exceptions.includes(word) ? word : capitzalize(word)))
    
    .join(" ");
  return capitzalize(titleCase);
};
console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));

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
const containerMovements = document.querySelector(".money_transfer_list");
const money = document.querySelector(".money");

const totalmoney = document.querySelector(".totalmoney");
const labelSumIn = document.querySelector(".labelSumIn");
const labelSumOut = document.querySelector(".labelSumOut");
const labelSumInterest = document.querySelector(".labelSumInterest");
const labelWelCome = document.querySelector(".labelwelcome");
const currentBalance =document.querySelector('.current--balance');
const btnTransFer = document.querySelector(".btntransfer");
const transferTo = document.querySelector(".transferto");
const amount = document.querySelector(".amount");
const btnClose = document.querySelector(".btn-close");
const inputCloseName = document.querySelector('.input_close_name');
const inputClosePin = document.querySelector('.input_close_pin')
const btnLoan = document.querySelector('.btn--loan');
const inputLoanAmount = document.querySelector('.input--loan-amount');
const btnSort = document.querySelector('.btn-sort');

console.log(inputCloseName, inputClosePin)
console.log(totalmoney);
const moneyTransferList = document.querySelector(".money_transfer_list");
console.log(moneyTransferList);

console.log(container);

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

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function(mov, index){
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html  =  `
    <div class="flex justify-between bg-white  border border-b-zinc-900 py-6 px-8">
    <div class="flex">
        <div class="rounded-xl text-center px-2 border border-inherit ${
          mov < 0 ? "bg-red-500" : "bg-green-500"
        }">
            ${index + 1}  ${type}
        </div>
        <div class="ml-4">03/02/2023</div>
    </div>
    <div class="flex"> 
        <p class="movements__value">${mov}</p>
        <i class="pt-1 ml-1 fa-solid fa-dollar-sign"></i>
    </div>
</div>

`;
containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  totalmoney.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  console.log(interest);
  labelSumInterest.textContent = `${interest} EUR`;
};
const updateUI = function (acc) {
  displayMovements(acc.movements)
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
};

let currentAccount;
form.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.owner === username.value);
  // console.log(currentAccount);
  accounts.forEach((item) => {
    if (username.value == item.owner && iduser.value == item.pin) {
      // clear input
      container.style.display = 'block';
     
      username.value = iduser.value = "";
      updateUI(currentAccount);

      // const money = item.movements;

      labelWelCome.textContent = `Welcome back, ${item.owner.split(" ")[0]}`;
      
    }
  });
});

btnTransFer.addEventListener("click", function (e) {
  e.preventDefault();
  const amountValue = Number(amount.value);
  const receiverAcc = accounts.find((acc) => acc.username === transferTo.value);
  console.log(amountValue, receiverAcc, currentAccount);
  console.log(currentAccount.balance);
  console.log(amountValue);
  amount.value = transferTo.value = " ";
  if (
    amountValue > 0 && receiverAcc &&
    currentAccount.balance >= amountValue 
  ) {
    currentAccount.movements.push(-amountValue);
    // receiverAcc.movements.push(amountValue);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value = ""
})

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if(inputCloseName.value === currentAccount.username && Number(inputClosePin.value)){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username)
    console.log(index)
    accounts.splice(index, 1);
    container.style.opacity = 0;
    labelWelCome.textContent = `Log in to get started`;

  }
  inputCloseName.value = inputClosePin.value = " ";

})

let sorted = false;


btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted;
})


totalmoney.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
  console.log(movementsUI.map(el => Number(el.textContent.replace('USD', ''))));
  console.log(movementsUI);
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
})
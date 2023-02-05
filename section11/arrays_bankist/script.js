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


console.log(container)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    accounts.forEach((item) => {
        if(username.value == item.owner && iduser.value == item.pin){

            const money = item.movements;
            console.log(money)
          
            
         
            container.innerHTML = `
            <div class="flex justify-between py-10">
            <div>
                <h2 class="text-3xl font-medium">HELLO ${item.owner}</h2>
                <h2 class="text-3xl font-medium">Current balance</h2>
                <p class="text-slate-400">As of 03/02/2023 8:21</p>
            </div>
            <div class="flex"> 
                <p class="text-4xl">
               
                
                </p>
                <i class="text-center text-3xl pt-1 ml-1 fa-solid fa-dollar-sign"></i>
            </div>
        </div>
        <div class="flex">
            <div class="w-3/5 h-18">
                ${money.reverse().map((item, index) => {

                    return `
                        <div class="flex justify-between bg-white  border border-b-zinc-900 py-6 px-8">
                        <div class="flex">
                            <div class="rounded-xl text-center px-2 border border-inherit ${item < 0 ? 'bg-red-500' : 'bg-green-500'}">
                              ${index}  ${item < 0 ? 'WITHDRAWAL': 'DEPOSIT'}
                            </div>
                            <div class="ml-4">03/02/2023</div>
                        </div>
                        <div class="flex"> 
                            <p class="">${item}</p>
                            <i class="pt-1 ml-1 fa-solid fa-dollar-sign"></i>
                        </div>
                    </div>
                    `
                }).join("")
            }
                
                   
                
            </div>
                  
            <div class="w-2/5 ml-4 ">
                <div class="bg-yellow-400 rounded p-7">
                    <h2 class="my-3 font-medium text-lg">Transfer money</h2>
                    <div class="flex">
                        <div class="text-center">
                            <input class="rounded w-32 border border-inherit" type="text" placeholder="">
                            <label for="">Transfer to</label>
                        </div>
                        <div class="text-center ">
                            <input class="rounded mx-1 w-32 border border-inherit" type="text" placeholder="">
                            <label for="">Amount</label>
                        </div>
                        <div class="text-center rounded h-6 px-2 bg-white">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
  
                <div class="bg-green-500 rounded p-7 mt-4">
                    <h2 class="my-3 font-medium text-lg">Request loan</h2>
                    <div class="flex">
                        <div class="text-center ">
                            <input class="rounded mx-1 w-32 border border-inherit" type="text" placeholder="">
                            <p>Amount</p>
                        </div>
                        <div class="text-center rounded h-6 w-12 bg-white">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="bg-red-500 rounded p-7 mt-4">
                    <h2 class="my-3 font-medium text-lg">Close account</h2>
                    <div class="flex">
                        <div class="text-center ">
                            <input class="rounded mx-1 w-32 border border-inherit" type="text" placeholder="">
                            <p>Confirm user</p>
                        </div>
                        <div class="text-center ">
                            <input class="rounded mx-1 w-32 border border-inherit" type="text" placeholder="">
                            <p>Confirm PIN</p>
                        </div>
                        <div class="text-center rounded h-6 px-2 bg-white">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `
        }
    
  });
});

'use strict';
const booking = [];
const createBooking = function(flighNum, numPassengers, price){
    numPassengers = numPassengers || 1;
    price = price || 199;
    const booking = {
        flighNum,
        numPassengers,
        price
    }
    console.log(booking)
    // booking.push(booking)
}
createBooking('LH123')
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 24739479284
}
const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if(passenger.passport === 24739479284){
        alert('Check in')
    }else{
        alert('Wrong passport!')
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas)

const flighNum = flight;
const passenger = jonas;
const newPassport = function(person){
    person.passport = Math.trunc(Math.random() + 100000000)
}
newPassport(jonas)
checkIn(flight, jonas)

const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toLowerCase(), ...other].join(' ')
};
// Higher-order function
const transformer = function(str, fn){
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}   

transformer('javaScript is the best', upperFirstWord)
transformer('JavaScript is the best', oneWord)
const high5 = function(){
    console.log('high5')
}
document.body.addEventListener('click', high5);
['jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}
const greeterHey = greet('Hey');
greeterHey('jonas');
greeterHey('steven');
greet('Hello')('jonas');
const greetArr = greeting => name => console.log(`${greeting} ${name}`)
greetArr('Hi')('Jonas')

// IIFE
const runOnce = function() {
    console.log('This will never run again');

};
runOnce();
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
    
})();
console.log(isPrivate)

(() => console.log('This will ALSO never run again'))();
{
    const isPrivate = 23;
    var notPrivate = 46;
}
console.log(isPrivate)
console.log(notPrivate)

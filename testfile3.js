// MUTIPLE PROJECTS AND CHALLENGES

'use strict';
// DATA
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
  
const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
  
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
  
const accounts = [account1, account2, account3, account4];

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map(name => name[0])
            .join("")
    });
}
createUsernames(accounts);
console.log(accounts);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FILTER METHOD
const deposits = movements.filter(function (mvmt) {  // regular function, and..
    return mvmt > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mvmt => mvmt < 0);  // arrow function..(same job)
console.log(withdrawals);

//REDUCE METOD
const balance = movements.reduce(function (acc, val, i) {
    console.log(`Iteration ${i}: ${val}`)
    return acc + val;
}, 0);
console.log(balance);

// Now, the same code as above but using the Arrow Function
const balanceWithArrowFunc = movements.reduce((acc, val) => acc + val, 1);
console.log(balanceWithArrowFunc);

// MAXIMUM VALUE WITH ARROW FUNCTION
const max = movements.reduce((acc, move) => acc > move ? acc : move);
console.log(max);

// MAXIMUM VALUE WITHOUT ARROW FUNCTION
const max2 = movements.reduce(function (acc, mov) {
    if (acc > mov)
        return acc
    else return mov;
});
console.log(max2 + 1);

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(
        age => age <= 2 ? 2 * age : 16 + age * 4
    );
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc
        + age, 0) / adults.length;
    return average;
};
const firstCalc = Math.floor(calcAverageHumanAge([15, 16, 18, 9, 1, 2, 3]));
const secondCalc = calcAverageHumanAge([90, 4, 12, 7, 18, 56, 30]);
console.log(firstCalc, secondCalc);

const calcDisplaySummary = function (movements) {
    const moneyIn = movements.filter(mov => mov > 0).reduce(    // Deposits
        (acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${moneyIn}`;

    const moneyOut = movements.filter(mov => mov < 0).reduce(   // Withdrawals
        (acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(moneyOut)}`;

    const interest = movements                                  // Interest
        .filter(mov => mov > 0)
        .map(deposit => deposit * 1.2 / 100)
        .filter((int, i, arr) => {
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}`;
};
calcDisplaySummary(account1.movements);



const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(
        age => age <= 2 ? 2 * age : 16 + age * 4
    );
    const adults = humanAges.filter(age => age >= 18);
    const average = adults.reduce((acc, age) => acc
        + age, 0) / adults.length;
    return average;
};

const calcAverageHumanAge2 = ages => ages
    .map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
*/

// EVENT HANDLER 
let currentAccount; // -- must be outside of the function!!

// attach the click event function to the login button 
btnLogin.addEventListener("click", function (e) {
    // Prevent form from immediately submitting
    e.preventDefault;
    // find is the best method for this use-case, to locate the username.
    currentAccount = account.find(
        acc => acc.username === inputLoginUsername.value
    );

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back 
        ${currentAccount.owner.split(" ")[0]}`;

        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        // Display movements (transfers)
        displayMovements(currentAccount.movements);

        // Display balance
        calcDisplayBalance(currentAccount.movements);

        // Display summary
        calcDisplaySummary(currentAccount);
    }
});


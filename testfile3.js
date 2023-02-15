/* code being reworked-through/improved weekly as courses/studies completed
mixed examples go-alongs*/

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

// A SINGLE ARRAY OF ALL THE DATA
const accounts = [account1, account2, account3, account4];

// ALL OF THE ELEMENTS
/*
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// FUNCTIONS
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";
        const html = `
            <div class="movements__row">
                <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
            <div class="movements__value">${mov}€</div>
        </div>
        `;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

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

const updateUI = function(acc) {
    // Display movements (transfers)
    displayMovements(acc.movements);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

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

        updateUI(currentAccount);
    }
});
*/

// TRANSFER FUNDS - TO,AMOUNT,BUTTON -
btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = ""; // clears the boxes

    if (amount > 0 &&
        receiverAcc && 
        currentAccount.balance >= amount &&
        receiverAcc?.username !== currentAccount.username
    ) {
        // DO THE TRANSFER
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        // UPDATE THE UI
        updateUI(currentAccount);
    }
});

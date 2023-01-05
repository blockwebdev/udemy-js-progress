// Udemy The Complete JavaScript Course 2023: From Zero to Expert!

// PART 1

/*//let bodyMassIndex = mass / (height * height);

let marksMass = 78;
let marksHeight = 1.69;
let marksBMI = marksMass / marksHeight ** 2;
console.log(marksBMI);

let johnsMass = 92;
let johnsHeight = 1.95;
let johnsBMI = johnsMass / johnsHeight ** 2;
console.log(johnsBMI);

//let markHigherBMI = marksBMI > johnsBMI;

if (marksBMI > johnsBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's!`);
} else {
    console.log(`Mark's BMI (${marksBMI}) isn't higher than John's!`);
}*/

// PART 2

/*let avgScoreDolphins = Math.floor((96 + 108 + 89) / 3);
console.log(avgScoreDolphins);
let avgScoreKoalas = Math.floor((88 + 91 + 110) / 3);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas) {
    console.log("Dolphins Win!");
} else if (avgScoreKoalas > avgScoreDolphins) {
    console.log("Koalas Win!");
} else if (avgScoreDolphins === avgScoreKoalas) {
    console.log("Tie Breaker!");
}*/


/*let avgScoreDolphins = Math.floor((97 + 112 + 101) / 3);
console.log(avgScoreDolphins);
let avgScoreKoalas = Math.floor((109 + 95 + 123) / 3);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log("Dolphins Win!");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log("Koalas Win!");
} else if (avgScoreDolphins === avgScoreKoalas) {
    console.log("Tie Breaker!");
}*/


/*let avgScoreDolphins = Math.floor((97 + 112 + 101) / 3);
console.log(avgScoreDolphins);
let avgScoreKoalas = Math.floor((109 + 95 + 106) / 3);
console.log(avgScoreKoalas);

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log("Dolphins Win!");
} else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
    console.log("Koalas Win!");
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log("Tie Breaker!");
} else {
    console.log("No Tie Breaker Or Minimum!");
}*/

// PART 3

/*let billValue = 430;

let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

console.log(`The bill was ${billValue}, the tip was ${tip}, and the total value was ${billValue + tip}`);*/


// CODING CHALLENGE # 1 ********************************************************************************

/*let dolphinsScore1 = 44;
let dolphinsScore2 = 23;
let dolphinsScore3 = 71;

let koalasScore1 = 65;
let koalasScore2 = 54;
let koalasScore3 = 49;*/



/*const calcAverage = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;

//const dolphinsScore = calcAverage(44, 23, 71);
//const koalasScore = calcAverage(65, 54, 49);

const dolphinsScore = calcAverage(85, 54, 41);
const koalasScore = calcAverage(23, 34, 27);

console.log(dolphinsScore, koalasScore);

function checkWinner(dolphinAvg, koalaAvg) {  // <-- parameters here are just placeholders, can be anything!
    if (dolphinAvg >= koalaAvg * 2) {
        console.log(`Dolphins win (${dolphinAvg} vs. ${koalaAvg})`);
    } else if (koalaAvg >= dolphinAvg * 2) {
        console.log(`Koalas win (${koalaAvg} vs ${dolphinAvg})`);
    } else {
        console.log(`There is no winner :(`);
    }
}

checkWinner(dolphinsScore, koalasScore); // <-- plug the arguments into the parameters, takes place of .. */

// CODING CHALLENGE #2 **************************************************************************

// original function I came up with, revised function with ternary operator right below this one!

/*const calcTip = function(billValue) {
    if (billValue >=50 && billValue <= 300) {
        return (billValue + 0.15 * billValue) - billValue;
    } else {
        return (billValue + 0.2 * billValue) - billValue;
    }
}*/

// revised function with ternary operator

/*const calcTip = function(billValue) {
    return billValue >=50 && billValue <=300 ? billValue * 0.15 : billValue * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
    bills[0] + tips[0], 
    bills[1] + tips[1], 
    bills[2] + tips[2]
];

console.log(bills, tips, total);*/


/*const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${
        this.job} and has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    },

};

/*console.log(`${jonas.firstName} has ${jonas.friends.length} friends 
and his best friend is called ${jonas.friends[0]}`
);*/

//console.log(jonas.getSummary());
//console.log(jonas.calcAge());

// CODING CHALLENGE #3 **********************************************************************************

/*const mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmiValue = this.mass / (this.height * this.height);
        return this.bmiValue;
    }
}

const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmiValue = this.mass / (this.height * this.height);
        return this.bmiValue;
    }
}

mark.calcBMI(); // <--- be sure to call the method first if you are going to log the property to console
john.calcBMI(); // -- otherwise it will log undefined to the console

console.log(mark.bmiValue); // <-- logging the property directly to the console instead of mark.calcBMI()
console.log(john.bmiValue); // -- because it's already been called on lines 191-192

if (mark.bmiValue > john.bmiValue) {
    console.log(`${mark.fullName}'s BMI (${mark.bmiValue}) is higher than ${
    john.fullName}'s BMI (${john.calcBMI()})`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmiValue}) is higher than ${
    mark.fullName}'s BMI (${mark.calcBMI()})`);
}*/

// CODING CHALLENGE #4 ************************************************************************************

/*let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

const calcTip = function(billValue) {
    return billValue >=50 && billValue <=300 ? billValue * 0.15 : billValue * 0.20;
}

for (let bill = 0; bill < bills.length; bill++) {
    tips.push(calcTip(bills[bill]));  // calculated the value twice here, instead store it in a variable
    totals.push(bills[bill] + calcTip(bills[bill])); // as written below from lesson tutorial
    /* OR as written in lesson tutorial:

    const tip = calcTip(bills[bill]); 
    tips.push(tip);
    totals.push(tip + bills[bill]);     
}

console.log(tips);
console.log(totals);



let calcAverage = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    return sum / arr.length;
    
}
console.log(calcAverage(totals));*/

// LESSON 62 CHALLENGE # 1 ************************************************************

/*const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

let printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${ arr[i] }C in ${i + 1} days...`;
    }
    console.log("..." + str);
}
console.log(printForecast(data2));*/

/*document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start guessing";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});*/

// SECTION 9 CODING CHALLENGE #1 *****************************************************

// -- code example from github

/*

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};

// ! create one player array for each team (variables 'players1' and 'players2');
//** let players1 = game.players[0]; <-- incorrect
//** let players2 = game.players[1]; <-- incorrect

let [players1, players2] = game.players; // <-- as written in tutorial

// ! the first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich team (Team1) create one variable ('gk') with the 
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field
// players

let [gk, ...fieldPlayers] = players1; // <-- as written in tutorial

// ! Create an array 'allPlayers' containing all players of both teams (22 players)

let allPlayers = [...players1, ...players2]; // <-- as written in tutorial

// ! During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
// new array ('players1Final) containing all the original team1 players plus 'Thiago',
// 'Coutinho', and 'Perisic'

let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // <-- tutorial

// ! Based on the game.odds object, create one variable for each odd called (team1, 
// draw, team2)
// let team1 = game.odds.team1; <-- incorrect
// let draw = game.odds.x; <-- incorrect
// let team2 = game.odds.team2; <-- incorrect

const {odds: {team1, x: draw, team2}} = game; // <-- as written in tutorial

/*let printGoals = function (...name) { <-- incorrect
    if (name === "Lewandowski") {
        console.log(`${name} scored 2 points`);
    } else if (name === "Gnarby" || name === "Hummels") {
        console.log(`${name} scored 1 point`);
    } else {
        console.log(`${name} has not scored any points`);
    }  
}

*/

/*

// ! Write a function ('printGoals') that receives an arbitrary number of player names
// (NOT an array) and prints each of them to the console, along with the number of 
// goals that were scored (number of player names passed in)

const printGoals = function (...players) {
    console.log(`${players.length} goals were scored`);
}

console.log(printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'));
console.log(printGoals("Chris", "Mike"));
console.log(printGoals(...game.scored));

// ! The team with the lower odd is more likely to win. Print to the console which 
// team is more likely to win without using an if/else statement or ternary operator.
// !! With the OR operator (||) if the first value is true (team1 < team2) everything 
// else after will short circuit meaning the second part of statement WILL NOT be  
// evaluated. With the AND operator (&&) if the first value (team1 < team2) is true 
// the rest of the statement will continue and will not short circuit

team1 < team2 && console.log('Team 1 is more likely to win'); //<-- continues after 
team1 < team2 || console.log('Team 1 is more likely to win'); //<-- short circuits

*/

// SECTION 9 CODING CHALLENGE #2 *****************************************************

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};

// Loop over the game.scored array and print each player name to the console, along with the goal
// number (Example: "Goal 1: Lewandowski")
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`)
}   
console.log("-----------------");

// Here I am storing the Objects keys and values into a variable, notice how this is done differently
// with Objects as opposed to how it is done with an array
let oddEntries = Object.entries(game.odds); // both key and value
let keyObj = Object.keys(game.odds); // just key
let valObj = Object.values(game.odds); // just value

// Use a loop to calculate the average odd and log it to the console (add all numbers and divide by
// how many numbers there are)
let averageOdd = 0;
for (const odd of valObj) {
    averageOdd += odd; // <-- adding each value to averageOdd stays inside block!
} // <-- can technically do without curly braces since statement is only 1 line.
averageOdd /= valObj.length; // <-- for proper calc. division must be outside block!
console.log(averageOdd);
console.log("-----------------");

// Print the 3 odds to the console in a nice formatted way like this: Odd of victory Bayern Munich:
// 1.33, Odd of draw: 3.25, Odd of victory Borrussia Dortmund: 6.5, get the team names directly from
// the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game
// objects have the same property names!
for (const [team, odd] of oddEntries) {
    let teamStr = team === 'x' ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} : ${odd}`);
}
console.log("-----------------");

// Create an object called 'scorers' which contain the names of the players who scored as properties,
// and the number of goals as the value
let scorers = {};
for (let player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log("these are the scorers", scorers);




















// continuation from testFile3 - challenges only until updated
// ---------------------------------------------------------------

// 167. Coding Challenge #4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

/* 1. Loop over the array containing dog objects, and for each dog,
calculate the recommended food portion and add it to the object as
a new property. Do NOT create a new array, simply loop over the array.
Formula: recommendedFood = weight ** 0.75 * 28. (The result is in grams
of food, and the weight needs to be in kg)
*/
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

/* 2. Find Sarah's dog and log to the console whether it's eating too
much or too little. HINT: Some dogs have multiple owners, so you first
need to find Sarah in the owners array. Tricky at first!
*/
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
const results = dogSarah.curFood > dogSarah.recFood ? "much" : "little";
//console.log(`Sarah's dog is eating too ${results}`);

/* 3. Create an array containing all owners of dogs who eat too 
much ('ownersEatTooMuch') and an array with all owners of dogs who
eat too little ('ownersEatTooLittle').
*/
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

/* 4. Log a string to the console for each array created in 3., Like 
this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and
John and Michael's dogs eat too little!"
*/
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little!`);

/* 5. Log to the console whether there is any dog eating EXACTLY the
amount of food that is recommended (just true or false)
*/
console.log(dogs.some(dog => dog.curFood === dog.recFood));

/* 6. Log to the console whether there is any dog eating an OKAY
amount of food (just true or false)
--> HINT: Being within a range 10% above and below the recommended portion
means: current > (recommended * 0.9) && current < (recommended * 1.1)
Basically, the current portion should be between 90% and 110% of the
recommended portion.
*/
const checkEatingOkay = dog => dog.curFood > dog.recFood * 0.9 &&
    dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

/* 7. Create an array containing the dogs that are eating an OKAY amount
of food (Try to re-use the condition from 6.)
*/
console.log(dogs.filter(checkEatingOkay));

/* 8. Create a shallow copy of the dogs array and sort it by 
recommended food portion in an ascending order (keep in mind that 
the portions are inside the array's objects)
*/
const dogShallowCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogShallowCopy);

"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const items = [{ name: "coffee mug", price: 11.50 }, { name: "coffee", price: 20.50 }];
const getTotal = (products) => {
    let total = 0;
    products.map(p => total += p.price);
    return total;
};
console.log(getTotal(items));

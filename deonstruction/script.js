'use strict';

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }, //

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, adreess }) {
    console.log(
      `  order received ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} will be delived to ${adreess} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  adreess: 'vi e del,21',
  mainIndex: 2,
  statrIndex: 2,
});

// Destructioring Objects!!!
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { menu = ['Shemomechama'] } = restaurant;
console.log(menu);

// mutating objects in destructioring
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 24 };
({ a, b } = obj);
console.log(obj);

// destuctioring nested Objects

const {
  fri: { open, close },
} = openingHours;

console.log(open, close);

// Destructioring arrays!!!

// const [first, second] = restaurant.categories;
// console.log(first, second);

// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested destructioring
// const nested = [2, 4, [5, 6]];

// const [a, b, [c, d]] = nested;
// console.log(a, b, c, d);

//defaulted destractaring
// const [p = 1, q = 1, r = 1] = [8, 9];

// console.log(p, q, r);

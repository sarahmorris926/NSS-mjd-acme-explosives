'use strict';

// UI interface with dropdown  
// Grab the selected value

// Make XHR requests for data -- factory.js

// Format the data -- formatter.js

// Display the appropriate data to the user

console.log("Acme Explosives");

const $ = require('jquery');
const factory = require('./factory');
const formatter = require('./formatter');
const prodView = require('./prodView');

const acmeData = [];

// factory.getCategories()
// .then( (categories) => {
//   console.log(categories);
//   acmeData.push(categories);
//   return factory.getTypes();
// })
// .then( (types) => {
//   console.log(types);
//   acmeData.push(types);
//   return factory.getProducts();
// })
// .then( (products) => {
//   console.log(products);
//   acmeData.push(products);
//   console.log(acmeData);
//   // Send the data to a method
// })
// .catch( (err) => {
//   console.log(`There was a problem: ${err.status} ${err.statusText}`);
// });

let promArr = [
  factory.getCategories(), 
  factory.getTypes(), 
  factory.getProducts()
];
Promise.all(promArr)
.then( (dataArr) => {
  let revisedProds = formatter.formatData(dataArr);
  prodView.displayProducts(revisedProds);
})
.catch( (err) => {
  console.log(err);
});


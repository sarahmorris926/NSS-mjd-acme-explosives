'use strict';

const $ = require('jquery');

// Make XHR requests for data

module.exports.getCategories = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '../data/categories.json'
    })
    .done( (cats) => {
      resolve(cats.categories);
    })
    .fail( (error) => {
      reject(error);
    });
  });
};

module.exports.getProducts = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '../data/products.json'
    })
    .done( (prods) => {
      resolve(prods.products);
    })
    .fail( (error) => {
      reject(error);
    });
  });
};

module.exports.getTypes = () => {
  return new Promise( (resolve, reject) => {
    $.ajax({
      url: '../data/types.json'
    })
    .done( (types) => {
      resolve(types.types);
    })
    .fail( (error) => {
      reject(error);
    });
  });
};






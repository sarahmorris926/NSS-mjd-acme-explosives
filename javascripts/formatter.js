'use strict';

// Format the data 

module.exports.formatData = (data) => {
  console.log("our data", data);
  // Untangle the array of arrays and make the data ready to present to the user
  

  // Mutate the products array:
  //  add "category" key to each item
  //  change "type" value from integer to string value, ie "fragmentation" 

  let revisedProds = data[2].map( (prod) => {
    prod.category = "new thing";
    prod.type = "blowy up thing";
    return prod;
  });

};
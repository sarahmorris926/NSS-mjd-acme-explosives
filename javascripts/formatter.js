'use strict';

// Format the data 

module.exports.formatData = (data) => {
  console.log("our data", data);
  // Untangle the array of arrays and make the data ready to present to the user
  
  const products = data[2];
  const types = data[1];
  const cats = data[0];

  // Mutate the products array:
  //  add "category" key to each item
  //  change "type" value from integer to string value, ie "fragmentation" 

  let revisedProds = products.map(prod => {
    let currentProd = Object.keys(prod)[0];
    console.log(currentProd);
    let prodType = types.find(type => type.id === prod[currentProd].type);
    console.log('prodType', prodType);
    let prodCat = cats.find(category => category.id === prodType.category);

    prod[currentProd].type = prodType.name;
    prod[currentProd].category = prodCat.name;


    return prod;
  });
  console.log('revised', revisedProds);
  return revisedProds;
};


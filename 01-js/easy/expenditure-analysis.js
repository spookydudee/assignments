/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  const catTotals = {};

  for(let i = 0;i<transactions.length;++i){
    if(!catTotals.hasOwnProperty(transactions[i].category)){
      catTotals[transactions[i].category]=0;
    }
    catTotals[transactions[i].category]+=transactions[i].price;
  }
  const output = [];
  for (const category in catTotals) {
    const totalAmountSpent = catTotals[category];
    output.push({"category": category,"totalSpent": totalAmountSpent });
  }

  return output;
}


module.exports = calculateTotalSpentByCategory;

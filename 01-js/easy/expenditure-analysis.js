/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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

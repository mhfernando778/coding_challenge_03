// Task 1 - Product Price Management //
let prices = [100, 120, 90, 300, 210]; // an array of 5 different prices
console.log("Prices:", prices); // logging the prices

prices.push(150); // adding the price: 150 to the array
console.log("Updated Prices:", prices); // logging the updated array of prices

let removedPrices = prices.shift(); // removing the first price from the array
console.log("Prices:", prices); // logging the updated array of prices


//Task 2 - Modifying Customer Orders //
let orders = [10, 15, 12, 20, 18];
console.log(orders);

orders[2] += 5;
console.log("New Orders:", orders);

let totalOrders = orders.reduce((sum, orders) => sum + orders, 0)
console.log(totalOrders);
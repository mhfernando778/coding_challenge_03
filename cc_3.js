// Task 1 - Product Price Management //
let prices = [100, 120, 90, 300, 210]; // an array of 5 different prices
console.log("Prices:", prices); // logging the prices

prices.push(150); // adding the price: 150 to the array
console.log("Updated Prices:", prices); // logging the updated array of prices

let removedPrices = prices.shift(); // removing the first price from the array
console.log("Prices:", prices); // logging the updated array of prices


//Task 2 - Modifying Customer Orders //
let orders = [10, 15, 12, 20, 18]; // declaring an array with 5 orders
console.log("Orders:", orders); // logging the the array of orders

orders[2] += 5; // adding 5 to the third order
console.log("New Orders:", orders); // logging the addition to the array

let totalOrders = orders.reduce((sum, orders) => sum + orders, 0); // adding all the orders togther
console.log("Total Orders Amount", totalOrders); // logging the total ammount of orders

// Task 3 - Employee Performance Tracking //
let employee = {
    name: "Employee Name",
    role: "Accountant",
    performanceScore: 100,
    isActive: true
};
console.log("Employee:", employee);

employee.performanceScore = 95;
console.log("Updated Performance Score:", employee.performanceScore);

employee.promotionEligible = true;
console.log(employee);

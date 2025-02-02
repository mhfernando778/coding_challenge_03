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

// Task 4 - Customer Feedback Records //
let feedback = [
    {customerName: "Customer Name", feedbackText: "Excellent experience", rating: 5},
    {customerName: "New Customer", feedbackText: "Good experience", rating: 4},
    {customerName: "Regina George", feedbackText: "Totes BAD!!", rating: 1}
]; // an array with three different objects
console.log("Customer Feedback:", feedback); //logging the array countaining customer feedback

feedback.push({customerName: "Bucky Barnes", feedbackText: "I loved it", rating: 5}); // adding a new object to the array
console.log("New Feedback:", feedback); // logging the updated array

// Task 5 - Inventory Management System //
let inventory = {
    itemName: "PS5",
    stockCount: 10,
    price: 500,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    } // multiplies stock count by price
}; // creating an object with inventory details

console.log("Inventory:", inventory); // logging the inventory information and output


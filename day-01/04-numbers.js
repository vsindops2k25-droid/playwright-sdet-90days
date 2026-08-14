const itemPrice = 29.99
const quantity = 3
const taxRate = 0.07

console.log("Item Price:", itemPrice);  
console.log("Quantity:", quantity);
console.log("Tax Rate:", taxRate);

const subTotal = itemPrice * quantity
const tax = subTotal * taxRate
const total = subTotal + tax

console.log("Subtotal:", subTotal.toFixed(2));
console.log("Tax:", tax.toFixed(2));
console.log("Total:", total.toFixed(2));

console.log("\n...........Other Operations ........")

console.log("Addition:", itemPrice + quantity);
console.log("Subtraction:", itemPrice - quantity);
console.log("Multiplication:", itemPrice * quantity);
console.log("Division:", itemPrice / quantity);
console.log("Modulus:", itemPrice % quantity);  
console.log("Exponentiation:", itemPrice ** quantity);  

// Test scenario for Login validation

const userName = "testUser";
const password = "testPass@123";
const minPasswordLength = 8;

// Boolean Values

const hasUserName = true; // Assuming the username is provided
const isLockedOut = false; // Assuming the account is not locked

console.log("Has User Name Provided?:", hasUserName); // Output: true
console.log("Is Account Locked Out?:", isLockedOut); // Output: false


// comparison operators
console.log(".............. Comparison Operators ..............");
console.log("Password Length:", password.length)
console.log("Password Length Valid?:", password.length >= minPasswordLength); // Output: true   
console.log("Password matches 'testPass@123'?:", password === "testPass@123"); // Output: true
console.log("Password does not match 'wrongPass'?:", password !== "wrongPass"); // Output: true

// Logical operators


console.log("............ Logical Operators..........")
const hasSpecialChar = password.includes("@") || password.includes("#") || password.includes("$");
const isValidLength = password.Length >= minPasswordLength;
const isValidPassword = hasSpecialChar && isValidLength;

console.log("Password has special character?:", hasSpecialChar); // Output: true
console.log("Password has valid length?:", isValidLength);  
console.log("Is Password Valid?:", isValidPassword); // Output: true

// conditional check

console.log(".............. Conditional Check ..............");

if (hasUserName && !isLockedOut && isValidPassword) {
    console.log("Login Successful!");
}
else {
    console.log("Login Failed! Please check your credentials.");
    
}

// Test Case : User Registration validation

console.log("=========== User Registration Test ===========");

// Test data : const - won't change

const firstName = "Ton";
const lastName = "Jackie";
const age = 25;
const password = "Ton@1234";
const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

// Validation Rules

const minAge = 18;
const minPasswordLength = 8;

// Test Status (let - can change)
let testsPassed = 0;
let testsFailed = 0;

// Display Test Data

console.log(" =========== Test Data ===========");
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email}`);
console.log(`Password: ${password}`);   
console.log(`Full Name: ${firstName} ${lastName}`);

// Test 1: Age Validation
console.log(" =========== Test 1: Age Validation ===========");
const isAgeValid = age >= minAge;
if (isAgeValid) {
    console.log("Age Validation Passed");
    testsPassed++;
}
else {
    console.log("Age Validation Failed");
    testsFailed++;
}   

// Test 2 : Email Foramt Validation
console.log(" =========== Test 2: Email Format Validation ===========");
const hasDomain = email.includes(".com") || email.includes(".net") || email.includes(".org");
const hasAtSymbol = email.includes("@");
const isEmailValid = hasDomain && hasAtSymbol;
if (isEmailValid) {
    console.log("Email Format Validation Passed");
    testsPassed++;
}   
else {
    console.log("Email Format Validation Failed");
    testsFailed++;
}

// Test 3 : Password Validation
console.log(" =========== Test 3: Password Validation ===========");
const hasMinLength = password.length >= minPasswordLength;
const hasSpecialChar = password.includes("@") || password.includes("#") || password.includes("$");
const hasUpperCase = password !== password.toLowerCase();
const hasNumber = /\d/.test(password);

const isPasswordValid = hasMinLength && hasSpecialChar && hasUpperCase && hasNumber;
if (isPasswordValid) {
    console.log("Password Validation Passed");
    testsPassed++;
}   
else {
    console.log("Password Validation Failed");
    testsFailed++;
}   

// Test Summary
console.log(" =========== Test Summary ===========");
const totalTests = testsPassed + testsFailed;
const passRate = (testsPassed / totalTests) * 100;


console.log(`Total Tests: ${totalTests}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Total Tests Passed: ${testsPassed}`);
console.log(`Total Tests Failed: ${testsFailed}`);

// Overall Result
console.log(" =========== Overall Result ===========");

if (testsPassed === totalTests) {
    console.log("All Tests Passed! - Registration Successful!   ");
}
else {
    console.log("Some Tests Failed! - Registration Unsuccessful! Please check the details and try again.");



}


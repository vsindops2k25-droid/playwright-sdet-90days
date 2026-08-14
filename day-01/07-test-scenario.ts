// Test Case : User Registration validation



console.log("=========== User Registration Test ===========");

// Test data : const - won't change

const fname: string = "Ton";
const lname: string = "Jackie";
const age: number = 25;
const pwd: string = "Ton@1234";
const email1: string = `${fname.toLowerCase()}.${lname.toLowerCase()}@example.com`;

// Validation Rules

const minAge: number = 18;
const minPwdLength: number = 8;

// Test Status (let - can change)
let testsPassed: number = 0;
let testsFailed: number = 0;

// Display Test Data

console.log(" =========== Test Data ===========");
console.log(`First Name: ${fname}`);
console.log(`Last Name: ${lname}`);
console.log(`Age: ${age}`);
console.log(`Email: ${email1}`);
console.log(`Password: ${pwd}`);   
console.log(`Full Name: ${fname} ${lname}`);

// Test 1: Age Validation
console.log(" =========== Test 1: Age Validation ===========");
const isAgeValid: boolean = age >= minAge;
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
const hasDomain: boolean = email1.includes(".com") || email1.includes(".net") || email1.includes(".org");
const hasAtSymbol: boolean = email1.includes("@");
const isEmailValid: boolean = hasDomain && hasAtSymbol;
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
const hasMinLength: boolean = pwd.length >= minPwdLength;
const hasSplChar: boolean = pwd.includes("@") || pwd.includes("#") || pwd.includes("$");
const hasUpperCase: boolean = pwd !== pwd.toLowerCase();
const hasNumber: boolean = /\d/.test(pwd);

const isPasswordValid: boolean = hasMinLength && hasSplChar && hasUpperCase && hasNumber;
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
const totalTests: number = testsPassed + testsFailed;
const passRate: number = (testsPassed / totalTests) * 100;


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


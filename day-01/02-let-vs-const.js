const maxAttempts = 3;
console.log("Max Attempts:", maxAttempts);

let currentAttempts = 0;
console.log("Current Attempts:", currentAttempts);

currentAttempts = 1;
console.log("Current Attempts after first try:", currentAttempts);

currentAttempts = 2;
console.log("Current Attempts after second attempt:", currentAttempts);

maxAttempts = 5; // This will throw an error because maxAttempts is a constant. it will return type error
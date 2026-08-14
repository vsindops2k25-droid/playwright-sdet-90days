# DAY 1 - JAVASCRIPT/TYPESCRIPT FOUNDATION

**Read this COMPLETELY before writing any code!**

---

## 📋 TABLE OF CONTENTS

1. [Variables - Complete Rules](#1-variables-complete-rules)
2. [Data Types - All Types Explained](#2-data-types-all-types-explained)
3. [Operators](#3-operators)
4. [Type Conversion](#4-type-conversion)
5. [Naming Conventions](#5-naming-conventions)
6. [Best Practices](#6-best-practices)
7. [Common Mistakes](#7-common-mistakes)

---

## 1. VARIABLES - COMPLETE RULES

### What is a Variable?

**Variable = Named container to store data**

**Real-world analogy:**
```
Box with label = Variable
Label name = Variable name
Contents = Value
```

---

### Variable Declaration Keywords

JavaScript/TypeScript has **THREE** ways to declare variables:

| Keyword | Can Change? | Scope | Hoisting | Use When |
|---------|-------------|-------|----------|----------|
| `let` | ✅ Yes | Block | No | Value will change |
| `const` | ❌ No | Block | No | Value won't change (constant) |
| `var` | ✅ Yes | Function | Yes | ❌ DON'T USE (old way) |

---

### 1.1 `let` - Changeable Variables

**Syntax:**
```javascript
let variableName = value;
```

**Rules:**
- ✅ Can reassign value later
- ✅ Block-scoped (only exists inside `{ }`)
- ✅ Must declare before use
- ❌ Cannot redeclare same name

**Examples:**
```javascript
let testStatus = "Pass";
console.log(testStatus);  // Output: Pass

testStatus = "Fail";      // ✅ Allowed - value changed
console.log(testStatus);  // Output: Fail

let testStatus = "Pass";  // ❌ ERROR! Cannot redeclare
```

**Use when:**
- Counters (loop variables)
- Status that changes
- Temporary values

---

### 1.2 `const` - Constants (Cannot Change)

**Syntax:**
```javascript
const variableName = value;
```

**Rules:**
- ❌ Cannot reassign value
- ✅ Block-scoped
- ✅ Must initialize when declaring
- ❌ Cannot redeclare

**Examples:**
```javascript
const apiUrl = "https://api.example.com";
console.log(apiUrl);      // Output: https://api.example.com

apiUrl = "https://new.com";  // ❌ ERROR! Cannot reassign const

const userName;           // ❌ ERROR! Must initialize
```

**Use when:**
- API URLs
- Configuration values
- Fixed test data
- Mathematical constants (PI, etc.)

**⚠️ Important:** For objects/arrays, you CAN modify contents, but NOT reassign:
```javascript
const user = { name: "John" };
user.name = "Jane";       // ✅ Allowed (modifying property)
user = { name: "Bob" };   // ❌ ERROR! Cannot reassign
```

---

### 1.3 `var` - Old Way (DON'T USE!)

**Syntax:**
```javascript
var variableName = value;
```

**Rules:**
- ✅ Can reassign
- ⚠️ Function-scoped (NOT block-scoped)
- ⚠️ Hoisted (can use before declaration - confusing!)
- ✅ Can redeclare

**Why NOT to use:**
```javascript
// Problem 1: Function scope (not block scope)
if (true) {
  var x = 10;
}
console.log(x);  // 10 (accessible outside block - BAD!)

if (true) {
  let y = 10;
}
console.log(y);  // ❌ ERROR (not accessible - GOOD!)

// Problem 2: Hoisting confusion
console.log(z);  // undefined (doesn't error!)
var z = 5;
```

**Modern rule: ALWAYS use `let` or `const`, NEVER `var`**

---

### 1.4 Let vs Const - When to Use?

**Decision flowchart:**
```
Will the value change later?
│
├── NO  → Use `const`
│   Examples:
│   - const maxLoginAttempts = 3;
│   - const baseUrl = "https://app.com";
│   - const taxRate = 0.08;
│
└── YES → Use `let`
    Examples:
    - let loginAttempts = 0;  (counter)
    - let testStatus = "Pending";  (changes to Pass/Fail)
    - let currentPage = 1;  (pagination)
```

**Modern best practice:**
1. ✅ Default to `const`
2. ✅ Change to `let` only if value needs to change
3. ❌ Never use `var`

---

## 2. DATA TYPES - ALL TYPES EXPLAINED

JavaScript has **7 primitive types** + **1 object type**

### 2.1 String (Text)

**Definition:** Sequence of characters (text)

**Declaration:**
```javascript
let name1 = "John";        // Double quotes
let name2 = 'Jane';        // Single quotes
let name3 = `Bob`;         // Backticks (template literal)
```

**All three are valid, but backticks have superpowers:**
```javascript
let firstName = "John";
let age = 30;

// Regular quotes - concatenation
let msg1 = "Name: " + firstName + ", Age: " + age;

// Template literal - embed variables
let msg2 = `Name: ${firstName}, Age: ${age}`;  // ✅ Better!
```

**Common String Methods:**
```javascript
let text = "Hello World";

text.length              // 11 (length)
text.toLowerCase()       // "hello world"
text.toUpperCase()       // "HELLO WORLD"
text.includes("World")   // true
text.indexOf("World")    // 6 (position)
text.slice(0, 5)         // "Hello" (extract)
text.replace("World", "JS")  // "Hello JS"
text.split(" ")          // ["Hello", "World"] (array)
```

**TypeScript:**
```typescript
let name: string = "John";
let email: string = `${name}@test.com`;
```

---

### 2.2 Number (Integers & Decimals)

**Definition:** Numeric values (whole numbers or decimals)

**Declaration:**
```javascript
let age = 25;              // Integer
let price = 29.99;         // Decimal
let negative = -10;        // Negative
let large = 1_000_000;     // Underscores for readability (ES2021)
```

**All numbers are same type in JavaScript:**
```javascript
let x = 5;      // Number
let y = 5.0;    // Also Number (same as 5)
```

**Special numeric values:**
```javascript
let infinite = Infinity;
let notANumber = NaN;  // "Not a Number" (invalid operation)
```

**Math Operations:**
```javascript
let a = 10;
let b = 3;

a + b    // 13 (addition)
a - b    // 7  (subtraction)
a * b    // 30 (multiplication)
a / b    // 3.333... (division)
a % b    // 1  (modulo/remainder)
a ** b   // 1000 (exponent: 10^3)
```

**Math Object:**
```javascript
Math.round(4.7)     // 5
Math.ceil(4.1)      // 5 (round up)
Math.floor(4.9)     // 4 (round down)
Math.max(5, 10, 3)  // 10
Math.min(5, 10, 3)  // 3
Math.random()       // Random 0-1
Math.abs(-5)        // 5 (absolute)
```

**TypeScript:**
```typescript
let age: number = 25;
let price: number = 29.99;
```

---

### 2.3 Boolean (True/False)

**Definition:** Only two values: `true` or `false`

**Declaration:**
```javascript
let isLoggedIn = true;
let hasError = false;
```

**Used for:**
- Conditions (if/else)
- Flags (on/off, yes/no)
- Test results (pass/fail)

**Comparison operators return booleans:**
```javascript
let age = 25;

age > 18     // true
age < 18     // false
age === 25   // true (equal)
age !== 30   // true (not equal)
age >= 25    // true
age <= 20    // false
```

**Logical operators:**
```javascript
let isAdult = age > 18;
let hasLicense = true;

isAdult && hasLicense   // true (AND - both must be true)
isAdult || hasLicense   // true (OR - at least one true)
!isAdult                // false (NOT - opposite)
```

**TypeScript:**
```typescript
let isActive: boolean = true;
let hasPermission: boolean = false;
```

---

### 2.4 Undefined

**Definition:** Variable declared but NOT assigned a value

**Example:**
```javascript
let x;
console.log(x);  // undefined

let y = undefined;  // Explicitly set (rare)
```

**Common scenario:**
```javascript
let result;  // undefined initially

if (testPassed) {
  result = "Success";
} else {
  result = "Failed";
}
```

---

### 2.5 Null

**Definition:** Intentionally empty or "no value"

**Difference from undefined:**
- `undefined` = Variable not assigned yet
- `null` = Explicitly set to "nothing"

**Example:**
```javascript
let user = null;  // Intentionally no user

// Later, after login:
user = { name: "John", email: "john@test.com" };
```

**Common use:**
- Default value for objects
- Reset value
- API responses (missing data)

---

### 2.6 Symbol (Advanced - Skip for Now)

**Definition:** Unique identifier (we won't use in 90 days)

---

### 2.7 BigInt (Advanced - Skip for Now)

**Definition:** Very large integers (beyond regular number limit)

---

### 2.8 Object (Complex Type)

**Definition:** Collection of key-value pairs

**Declaration:**
```javascript
let user = {
  name: "John",
  age: 30,
  email: "john@test.com"
};
```

**Access properties:**
```javascript
console.log(user.name);     // "John" (dot notation)
console.log(user["age"]);   // 30 (bracket notation)
```

**Modify properties:**
```javascript
user.age = 31;              // Update
user.phone = "123-456";     // Add new property
delete user.email;          // Remove property
```

**TypeScript with interface:**
```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

let user: User = {
  name: "John",
  age: 30,
  email: "john@test.com"
};
```

---

### 2.9 Array (Special Object)

**Definition:** Ordered list of values

**Declaration:**
```javascript
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null];  // Can mix types (not recommended)
```

**Access elements:**
```javascript
fruits[0]     // "Apple" (first element - zero-indexed!)
fruits[1]     // "Banana"
fruits[2]     // "Orange"
fruits.length // 3 (total elements)
```

**Common array methods:**
```javascript
let arr = [1, 2, 3];

arr.push(4)          // [1, 2, 3, 4] (add to end)
arr.pop()            // [1, 2, 3] (remove from end)
arr.unshift(0)       // [0, 1, 2, 3] (add to start)
arr.shift()          // [1, 2, 3] (remove from start)
arr.includes(2)      // true (check if exists)
arr.indexOf(2)       // 1 (find position)
```

**TypeScript:**
```typescript
let numbers: number[] = [1, 2, 3];
let names: string[] = ["John", "Jane"];
let flags: Array<boolean> = [true, false];  // Alternative syntax
```

---

## 3. OPERATORS

### 3.1 Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `+` | Addition | `5 + 3` | 8 |
| `-` | Subtraction | `5 - 3` | 2 |
| `*` | Multiplication | `5 * 3` | 15 |
| `/` | Division | `6 / 3` | 2 |
| `%` | Modulo (remainder) | `5 % 2` | 1 |
| `**` | Exponent (power) | `2 ** 3` | 8 |
| `++` | Increment | `x++` | x = x + 1 |
| `--` | Decrement | `x--` | x = x - 1 |

**Examples:**
```javascript
let x = 10;
x++;        // x = 11
x--;        // x = 10
x += 5;     // x = 15 (same as x = x + 5)
x *= 2;     // x = 30 (same as x = x * 2)
```

---

### 3.2 Comparison Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal (loose) | `5 == "5"` | true ⚠️ |
| `===` | Equal (strict) | `5 === "5"` | false ✅ |
| `!=` | Not equal (loose) | `5 != "5"` | false |
| `!==` | Not equal (strict) | `5 !== "5"` | true ✅ |
| `>` | Greater than | `5 > 3` | true |
| `<` | Less than | `5 < 3` | false |
| `>=` | Greater or equal | `5 >= 5` | true |
| `<=` | Less or equal | `5 <= 3` | false |

**⚠️ ALWAYS use `===` and `!==` (strict), NEVER `==` or `!=` (loose)**

**Why?**
```javascript
5 == "5"    // true (type conversion happens - confusing!)
5 === "5"   // false (checks type AND value - clear!)

0 == false  // true (confusing!)
0 === false // false (clear!)
```

---

### 3.3 Logical Operators

| Operator | Name | Description | Example |
|----------|------|-------------|---------|
| `&&` | AND | Both must be true | `true && true` → true |
| `\|\|` | OR | At least one true | `true \|\| false` → true |
| `!` | NOT | Opposite | `!true` → false |

**Truth table:**
```javascript
true && true    // true
true && false   // false
false && false  // false

true || true    // true
true || false   // true
false || false  // false

!true           // false
!false          // true
```

**Real example:**
```javascript
let age = 25;
let hasLicense = true;

// Can drive if age > 18 AND has license
let canDrive = (age > 18) && hasLicense;  // true

// Can enter if age > 18 OR has parent permission
let canEnter = (age > 18) || hasParentPermission;
```

---

### 3.4 String Operators

**Concatenation:**
```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;  // "John Doe"
```

**Template literals (preferred):**
```javascript
let name = "John";
let age = 30;

let message = `My name is ${name} and I am ${age} years old.`;
// Output: "My name is John and I am 30 years old."
```

---

## 4. TYPE CONVERSION

### 4.1 Checking Type

```javascript
typeof "Hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (JavaScript bug - null is actually primitive)
typeof []           // "object" (arrays are objects)
typeof {}           // "object"
```

---

### 4.2 String Conversion

```javascript
let num = 123;

String(num)         // "123"
num.toString()      // "123"
num + ""            // "123" (implicit conversion)
```

---

### 4.3 Number Conversion

```javascript
let str = "123";

Number(str)         // 123
parseInt(str)       // 123 (integer only)
parseFloat("12.5")  // 12.5 (decimal)
+"123"              // 123 (unary plus - shorthand)

// Invalid conversions:
Number("hello")     // NaN (Not a Number)
parseInt("12abc")   // 12 (parses until non-digit)
```

---

### 4.4 Boolean Conversion

```javascript
Boolean(1)          // true
Boolean(0)          // false
Boolean("hello")    // true
Boolean("")         // false (empty string)
Boolean(null)       // false
Boolean(undefined)  // false
Boolean(NaN)        // false

// Falsy values (convert to false):
// false, 0, "", null, undefined, NaN

// Everything else is truthy!
```

---

## 5. NAMING CONVENTIONS

### 5.1 Variable Naming Rules

**Must follow:**
- ✅ Start with letter, `$`, or `_`
- ✅ Can contain letters, numbers, `$`, `_`
- ❌ Cannot start with number
- ❌ Cannot use reserved keywords (`if`, `let`, `const`, etc.)
- ❌ Case-sensitive (`name` ≠ `Name`)

**Valid:**
```javascript
let userName = "John";
let user_name = "John";
let $element = document.getElementById("id");
let _privateVar = "data";
let user2 = "Second user";
```

**Invalid:**
```javascript
let 2users = "data";     // ❌ Starts with number
let user-name = "John";  // ❌ Hyphen not allowed
let let = "value";       // ❌ Reserved keyword
```

---

### 5.2 Naming Conventions (Style)

**camelCase (JavaScript/TypeScript standard):**
```javascript
let firstName = "John";
let userLoginAttempts = 0;
let maxRetryCount = 3;
```

**PascalCase (Classes/Constructors):**
```javascript
class UserAccount { }
class LoginPage { }
```

**UPPER_SNAKE_CASE (Constants):**
```javascript
const MAX_LOGIN_ATTEMPTS = 3;
const API_BASE_URL = "https://api.com";
const TAX_RATE = 0.08;
```

**Descriptive names:**
```javascript
// ❌ Bad (not clear)
let x = 10;
let temp = "data";
let flag = true;

// ✅ Good (descriptive)
let loginAttempts = 10;
let userEmail = "data";
let isAuthenticated = true;
```

---

## 6. BEST PRACTICES

### 6.1 General Rules

1. ✅ **Use `const` by default, `let` only when value changes**
   ```javascript
   const apiUrl = "https://api.com";  // Won't change
   let currentPage = 1;               // Will change
   ```

2. ✅ **Use strict equality (`===`) always**
   ```javascript
   if (age === 18) { }  // ✅ Good
   if (age == 18) { }   // ❌ Bad
   ```

3. ✅ **Use template literals for strings with variables**
   ```javascript
   const msg = `Hello ${name}`;  // ✅ Good
   const msg = "Hello " + name;  // ❌ Less readable
   ```

4. ✅ **Declare variables at the top of scope**
   ```javascript
   function test() {
     const name = "John";  // Declare at top
     const age = 30;
     
     // ... rest of code
   }
   ```

5. ✅ **One declaration per line**
   ```javascript
   // ✅ Good
   const name = "John";
   const age = 30;
   
   // ❌ Bad
   const name = "John", age = 30;
   ```

---

### 6.2 TypeScript Best Practices

1. ✅ **Always specify types (don't rely on inference for learning)**
   ```typescript
   // ✅ Explicit (better for learning)
   let name: string = "John";
   let age: number = 30;
   
   // ⚠️ Inference (TypeScript guesses - okay for experienced)
   let name = "John";  // TypeScript infers string
   ```

2. ✅ **Use interfaces for objects**
   ```typescript
   interface User {
     name: string;
     age: number;
   }
   
   const user: User = {
     name: "John",
     age: 30
   };
   ```

3. ✅ **Avoid `any` type**
   ```typescript
   let data: any = "hello";  // ❌ Bad - defeats TypeScript purpose
   let data: string = "hello";  // ✅ Good
   ```

---

## 7. COMMON MISTAKES

### 7.1 Mistake: Using var

```javascript
// ❌ DON'T DO THIS
var count = 0;

// ✅ DO THIS
let count = 0;
```

---

### 7.2 Mistake: Loose equality

```javascript
// ❌ DON'T DO THIS
if (age == "18") { }

// ✅ DO THIS
if (age === 18) { }
```

---

### 7.3 Mistake: Modifying const

```javascript
const name = "John";
name = "Jane";  // ❌ ERROR! Cannot reassign const
```

---

### 7.4 Mistake: Forgetting to initialize

```javascript
let age;
console.log(age + 5);  // NaN (undefined + 5 = NaN)

// ✅ Initialize first
let age = 0;
console.log(age + 5);  // 5
```

---

### 7.5 Mistake: Type mismatch in TypeScript

```typescript
let age: number = 30;
age = "thirty";  // ❌ ERROR! Type 'string' not assignable to 'number'
```

---

## 📊 QUICK REFERENCE TABLE

### Data Types Summary

| Type | Example | typeof | Mutable? |
|------|---------|--------|----------|
| String | `"Hello"` | `"string"` | No |
| Number | `42` | `"number"` | No |
| Boolean | `true` | `"boolean"` | No |
| Undefined | `undefined` | `"undefined"` | No |
| Null | `null` | `"object"` | No |
| Object | `{name: "John"}` | `"object"` | Yes |
| Array | `[1, 2, 3]` | `"object"` | Yes |

---

### Declaration Keywords

| Keyword | Reassignable | Redeclarable | Scope | Use |
|---------|--------------|--------------|-------|-----|
| `const` | ❌ No | ❌ No | Block | Default choice |
| `let` | ✅ Yes | ❌ No | Block | When value changes |
| `var` | ✅ Yes | ✅ Yes | Function | ❌ Never use |

---

## ✅ CHECKLIST BEFORE CODING

Before starting programs, make sure you understand:

- [ ] Difference between `let`, `const`, `var`
- [ ] When to use `let` vs `const`
- [ ] All 7 primitive data types
- [ ] String, Number, Boolean basics
- [ ] Arithmetic operators (+, -, *, /, %)
- [ ] Comparison operators (===, !==, >, <)
- [ ] Logical operators (&&, ||, !)
- [ ] typeof operator
- [ ] Naming conventions (camelCase)
- [ ] Template literals (backticks)

**If all checked ✅ → Ready for programs!**

---

**Next:** Apply this knowledge in 5 structured programs! 🚀

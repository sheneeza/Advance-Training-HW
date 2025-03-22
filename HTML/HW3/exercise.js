//1. Write the code to sum all salaries and store in the variable sum.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log("Sum of salaries:", sum);

//2. Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        obj[key] *= 2;
      }
    }
};

multiplyNumeric(menu);
console.log(menu);
  
//3. Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure
//'@' must come before '.' and there must be some characters between '@' and '.'The function must be case-insensitive

function checkEmailId(str) {
    const regex = /^[^@.\s]+@[^@.\s]+\.[^@.\s]+$/i;
    return regex.test(str);
};

console.log(checkEmailId("hello22@gmail.com")); // true
console.log(checkEmailId("hello22gmail.com")); // false
console.log(checkEmailId("hello22@gmailcom")); // false
console.log(checkEmailId("hello22gmail@.com")); // false
console.log(checkEmailId("hello22gmailcom")); // false


//4. Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
//The result of the function should be the truncated (if needed) string.
function truncate(str, maxlength) {
    if (str.length > maxlength) {
      return str.slice(0, maxlength - 1) + "…";
    }
    return str;
};  

console.log(truncate("What I'd like to tell on this topic is:", 20));


console.log(truncate("Hi everyone!", 20));

// 5. Array operations
// 1: Create the array
let styles = ["James", "Brennie"];
console.log(styles);

// 2: Append "Robert"
styles.push("Robert");
console.log(styles); 

// 3: Replace the middle value with "Calvin"
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles); 

// 4: Remove the first value and show it
let removed = styles.shift();
console.log(styles); 

// 5: Prepend "Rose" and "Regal"
styles.unshift("Rose", "Regal");
console.log(styles); 

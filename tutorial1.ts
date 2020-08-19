function greatPersonS(name: string) {
    let greet = "";
    if (name === "PRCV") {
        greet = "Helloooooo PRCV - from tutorial1.ts file !!!";
    } else {
        greet = "Hi PRCV";
    }
    console.log(greet)
}
greatPersonS("PRCV");

console.log("Using var inside the for loop");
for (var i = 1; i <= 5; i++) {
    console.log(i)
}
console.log("Using var inside the for loop with timer");
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log("inside for loop setTimeout func using `var` keyword  => " + i) })
}
console.log("With setTimeout function var will be replace as 6 for 5 times  because loop is running behind but the time out function is executed after some time.");
console.log("To over come this problem we can use  `let` keyword.");
for (let i = 1; i <= 5; i++) {
    setTimeout(function () { console.log("inside for loop setTimeout func using `let` keyword => " + i) })
}


console.log("Rest Operator (using three dots in function parameters `...`)");
let displayColors = function (message: string, ...colors: any) {
    console.log("Title: " + message)
    console.log("ColorsList is " + colors)
    for (let color in colors) {
        console.log(colors[color]);
    }
}
let message = "lis of colors using Rest Operator :";
let colorArray = ['Gray', 'Green', 'Yellow'];
displayColors(message, 'Orange', 'Red', 'Pink', colorArray);

let displayColors1 = function (message: string, ...colors: any) { // Here again ...colors will form it as an array object
    console.log(message); // It will display string message value.

    for (let i in colors) {
        console.log(colors[i]); // It will display each value in the array object.
    }
}

let message1 = "List of Colors using Spread Operator: ";
let colorArray1 = ['Green', 'Blue', 'Yellow'];
displayColors1(message1, ...colorArray1); // Here it will split the array in to individual variables.


function createPerson(firstName: string, lastName: string, age: number) {
    let fullName = firstName + " " + lastName;
    return {
        firstName,
        lastName,
        fullName,
        isSenior() { // This is the new syntax in ES6
            return age > 60;
        },
        isSeniorfunc: function () { // This is the old syntax
            return age > 60;
        }
    };
}
let p = createPerson("John", "Smith", 62);
console.log("Object Literals using Function return statements: ")
console.log(p.firstName)
console.log(p.lastName)
console.log(p.fullName)
console.log(p.isSenior())
console.log(p.isSeniorfunc())
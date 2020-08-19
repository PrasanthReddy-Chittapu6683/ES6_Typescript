"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function greatPersonS(name) {
    var greet = "";
    if (name === "PRCV") {
        greet = "Helloooooo PRCV - from tutorial1.ts file !!!";
    }
    else {
        greet = "Hi PRCV";
    }
    console.log(greet);
}
greatPersonS("PRCV");
console.log("Using var inside the for loop");
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Using var inside the for loop with timer");
for (var i = 1; i <= 5; i++) {
    setTimeout(function () { console.log("inside for loop setTimeout func using `var` keyword  => " + i); });
}
console.log("With setTimeout function var will be replace as 6 for 5 times  because loop is running behind but the time out function is executed after some time.");
console.log("To over come this problem we can use  `let` keyword.");
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log("inside for loop setTimeout func using `let` keyword => " + i_1); });
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
console.log("Rest Operator (using three dots in function parameters `...`)");
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log("Title: " + message);
    console.log("ColorsList is " + colors);
    for (var color in colors) {
        console.log(colors[color]);
    }
};
var message = "lis of colors using Rest Operator :";
var colorArray = ['Gray', 'Green', 'Yellow'];
displayColors(message, 'Orange', 'Red', 'Pink', colorArray);
var displayColors1 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message); // It will display string message value.
    for (var i_2 in colors) {
        console.log(colors[i_2]); // It will display each value in the array object.
    }
};
var message1 = "List of Colors using Spread Operator: ";
var colorArray1 = ['Green', 'Blue', 'Yellow'];
displayColors1.apply(void 0, __spreadArrays([message1], colorArray1)); // Here it will split the array in to individual variables.
function createPerson(firstName, lastName, age) {
    var fullName = firstName + " " + lastName;
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        isSenior: function () {
            return age > 60;
        },
        isSeniorfunc: function () {
            return age > 60;
        }
    };
}
var p = createPerson("John", "Smith", 62);
console.log("Object Literals using Function return statements: ");
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);
console.log(p.isSenior());
console.log(p.isSeniorfunc());
//# sourceMappingURL=tutorial1.js.map
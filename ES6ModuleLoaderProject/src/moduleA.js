console.log('Module A log1')
import { fname as f, lname as l, obj, greet, GreetMessge } from "./moduleB.js";
console.log('Module A log2')

// f = "Prasanth" // This will throw error because Import properties cannot be changed its READ ONLY. We can change the Object properties.
obj.name = 'Tanz'
console.log(`Changing the Imported Object Propery name : ${obj.name}`)

console.log(`Name is coming from moduleA ->  First Name: ${f},  Last Name: ${l}`);

greet('Hey Prasanth ! How you doing today ....?')

let clGM = new GreetMessge();
clGM.greetFun('Hi Prasanth. Hope you are doing good');
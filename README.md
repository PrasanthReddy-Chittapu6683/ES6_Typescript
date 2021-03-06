# ES6_Typescript

### ES6: Introduction:
#### ES5 / ES2015 (ES6) 
* ES6 is also refered as ES2015 (ES5 + Awesom features).
#### TypeScript:
* It is a super set of Javascript which complies the .ts files to .js files.
* Transpilers: ctrl+shft B (Select watch:tsconfig.json to run the Transpilers which converts .ts to .js files)
    In Transpilers ES2015 will Transpile (using Traceur / Babel / Typescript) to ES5 to run in all the browsers

### Commands:
  * npm install typescript -g (It will install typescript modules globally)
  * npm install lite-server -g (It's server which can run the application on the port number to run)
  * lite-server (This will run and opens a default port number 3000)
  * tsc --init (It will create tsconfig.json file)
  * ctrl+shft B (Select watch:tsconfig.json to run the Transpilers which converts .ts to .js files)

### var:
  * It is functional scope. If we declare & use the var variable outside or insde the if, for, switch functions ..etc..,.
  * We can redeclare the same var variable (duplicate var variables) with in the same scope
  * Can initialize the var variable any where in the function scope (Its hoistlie)
### let
  * It's a scope decleration, We should declare let varable global level to access inside or outside the block fucntions.
  * we cannot redeclare the same let variable (duplicate let variables) with in the same scope   
  * Should initialize the let variable at the starting of the function scope (Its not hoistlie)
    Ex: var & let:
        var a = 1;
        var b = 2;
        if(a === 1){
            var a = 10; // Here it will change var a =1 to 10  
            let b = 20; // Here b is the new let variable which is different from var b = 1 
            console.log(a); // Print 10
            console.log(b); // Print 20 from let b=20 
        }
        console.log(a); // Print 10 from var a = 10 inside the if condition
        console.log(b); // Print 2 from var b=2 declared before if condition.
### Const:
  * Its a readonly variable
  * Its a block scoped
  * Must initialize the value
  * If we create an object with `const` we cannot reassign the object(Throws error). But we cann re-assign the property for an object
     Ex: const obj1{
         name:'prcv'
     }
     obj1 = {} // Throws error
     obj1.name = 'Reddy' // name property value is replaced.


### Arrow Functions:
* it a simplified version of javascript function.
    Ex: Javascript function
        var getMsg =function(m){
            return 10*m;
        }
* Arrow Function:
        const getMsg = (m) => 10*m; // Here it will return 10 * m.
        (or)
        const getMsg = m => 10*m; // Here it will return 10.
        const getMsg = (m, bonus) => 10*m+bonus; // Here it will return 10*m+bonus.

### lexical 'this' Keyword:
* this keyword always carry the value of that current function. 
    Ex: In Javascript:
        var employee = {
            id : 1,
            geet : function() {
                var self = this; // Here are assigning `this` to self var varble to access this inside other functions
                setTimeout(function(){console.log(self.id)},1000) // Here we are using self instead of this. because this can have setTimeout function scope. so we using self variable.
            }
        }
    Other way apprach using Arrow Functions:
    var employee = {
            id : 1,
            geet : function() {
                setTimeout(() => {console.log(this.id)},1000) // Here we are using `this` directly
            }
        }

### Rest Operators:
* It takes variable number of arguments and puts them in to single array.
* It Specify's in the function decleration.
        Ex: 
            let displayColors = function(message, ...colors){
                console.log(message); // It will display string message value.
                console.log(colors); // It will display all the of arguments as array object
                for(let i in colors) {
                    console.log(colors[i]); // It will display each value in the array object.
                }
            }

            let message = "List of Colors using Rest Operator: "
            displayColors(message,'Red');
            displayColors(message,'Red','Blue');
            displayColors(message,'Red','Blue','Green');



### Spread Operator:
* It is opposite to Rest Operator, It will split the array of arguments and splits it into individual elements.
* It Specify's in function call.
        Ex: 
             let displayColors = function(message, ...colors){ // Here again ...colors will form it as an array object
                console.log(message); // It will display string message value.
                
                for(let i in colors) {
                    console.log(colors[i]); // It will display each value in the array object.
                }
            }

            let message = "List of Colors using Spread Operator: ";
            let colorArray = ['Green', 'Blue', 'Yellow'];
            displayColors(message, ...colorArray); // Here it will split the array in to individual variables.

### Object Literals:
* Usually will create an object with key value pairs. In ES6 we have shot hand method like:
        Ex: Old method
                let firstName = "John"
                let lastName = "Doe"
                let person = { // Here we are giving Key Value pairs for firstName and  lastName.
                    firstName : firstName, 
                    lastName : lastName
                }
                console.log(person.firstName);
                console.log(person.lastName);
        Ex: New ES6 syntax:
                let firstName = "John"
                let lastName = "Doe"
                let person = { // Here no need to giving Key Value pairs if the both key and value names are same for firstName and  lastName.
                    firstName  , 
                    lastName
                }
                console.log(person.firstName);
                console.log(person.lastName);
        Ex: New ES6 with function return:
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
* In Object Literals we can have spaces in the property names:
            Ex: let ln = "last Name";
                let person = {
                    "fist Name": "John",
                    [ln] : "Doe"
                }
                console.log(person); // It will print person object {"first Name": John, "last Name":Deo};
                console.log(person["first Name"]); // It will print   `John`;

### Destructuring Array: 
* Here, we are assigning the values of array to individual variables in ES6
            Ex: 
                let employee =["John", "Doe"]
                let [fname, lname, gender] = employee;

                console.log(fname);//  It will print `John`
                console.log(lname);//  It will print `Deo`
                console.log(fname);//  It will print `undefined` because we are not passing gender information in 3rd parameter.
* We can Destructuring the necessary value in the array
            Ex: 
                let employee =["John", "Doe","Male"]
                let [, , gender] = employee; // Here jsut pass an empty space in 1st and 2nd arguments. we are using only Gender information from array.

                console.log(gender);//  It will print `Male`
* We can Destructuring the array in to single argument and list of array elements also using Rest Operator:
            Ex:
                let employee =["John", "Doe","Male","Married"]
                let [fname, ...elements] = employee;

                console.log(fname);
                console.log(elements); // It will print the array object with ["Doe","Male","Married"]
* We can Destructuring with default values
            Ex:
                 let employee =["John", "Doe"]

                let [fname, lname, gender = "Male"] = employee;

                console.log(fname);//  It will print `John`
                console.log(lname);//  It will print `Deo`
                console.log(fname);//  It will print `Male`

### Destructuring Object: 
* In ES6 we can create alias name if the property name are big to use mutiple places
            Ex:
                let employee ={
                  fname: "John",lname: "Doe",gender: "Male"
                }
                let {fname :f,lname : l,gender: g} = employee; // Createing alias names.
                console.log(f);//  It will print `John`
                console.log(l);//  It will print `Doe`
                console.log(g);//  It will print `Male`

### String Templates:
* We can concatinate the string with + symbol. But in ES6, we use ${} syntax.
* It will support multi line string concatination when using back ticks `
            Ex:
                let user = "Prasanth"

                let greet = `Welcome 'single' "double" ${user} to ES6 Tutorial.
                    This is Second line.
                `;
                console.log(greet);// It will print ` Welcome Prasanth to ES6 Tutorial 


### for of Loop:
    Ex: 
        let colors = ["Red", "Green", "Blue"];

        //Fist way usin `in`
        for (let i in colors) {
            console.log(colors[i]); // It will display each value in the array object using index position.
        }

        // Second way using `of`
        for (let color of colors) {
            console.log(color); //  It will display each value in the array object without index position.
        }

        let letter ="ABCDEF"
        for(let lett of letter) {
            console.log(letter); 
        }

### Classes in ES6:
*  Classes are just a special functions, but only different is Classes and Unlike functions are not hoisted.
            Ex: 
                class Person {

                }
                let p = new Person();
                console.log(typeof Person); // It will Print `function`
* Adding method to  the class is same as adding method to the prototype object.
            Ex: 
                class Person {
                    greetings(){

                    }
                }
                console.log(p.greetings === Person.prototype.greetings); // It will Print `true`

### Class Body and Methods:

            Ex:
                class Person {
                    constructor(name){
                        this.name = name;
                        console.log(this.name +" Constructor"); // It will Print
                    }
                    staticMethod(){
                        console.log("Hello PRCV Static Methods")
                    }
                    greetPerson(){
                        console.log(" From Prototype Method : Hello "+ this.name)
                    }
                }
                let p = new Person("PRCV") // Constructor Method:  Here it will call directly constructor of the class Person
                Person.staticMethod(); // Static Method: Here we can call the staticMethod using directly with class name Person instead of p.staticMethod()
                p.greetPerson(); // Prototype Method: Which can call each object.

### Class Inheritance:
* In ES6, Class Inheritance is possible using `extends` keyword.
* `Exenteds` keyword is used to create a new class that inhertits Parent class.
            Ex: Constructor in Parent class
                class Person {
                    constructor() {
                        console.log("Person class Constructor")
                    }
                }               
                class Employee  extends Person{
                }
                let e= new Employee(); // It prints `Person class Constructor`from Person class constructor.
            Ex: Parameter Constructor in Parent class
                class Person1 {
                    constructor(name ) {
                        console.log(name + " Person class Constructor")
                    }
                }
                class Employee1  extends Person1{
                }
                 let e= new Employee1("PRCV"); // It will print `PRCV Person class Constructor` It will invoke Person1 class parameter constructor even if the Employee1 class doent have parameter constructor.
### Constructor in derived class:
* To create constructor in derived class, need to use super() call
* super() keyword is, Parent class constructor needs to call before the sub class constructor. This ensure if we call any method on the Parent class in the constructor, 
            the parent is already successfully setup.
            Ex: 
                class Person1 {
                    constructor(name ) {
                        console.log(name + " Person1 class Constructor")
                    }
                    getID(){
                        return 10;
                    }
                }
                class Employee1  extends Person1 {
                    constructor(name) {
                        super(name); // Here it will invoke the constructor of the parent class
                        console.log(name + " Employee1 class Constructor")
                    }
                    
                }
                 class Employee2  extends Person1 {
                    constructor(name) {
                        super(name); // Here it will invoke the constructor of the parent class
                        console.log(name + " Employee1 class Constructor")
                    }
                    getID(){
                        return 10;
                    }
                }
                let e= new Employee1("PRCV");
                console.log(e.getID());// Here we are calling getID mentod which is there in Person1 (parent) class using Employee1 (derived) class object `e.getID()` 
                let e1 = new Employee2("PRCV");
                console.log(e1.getID());// Here we are calling getID  fro,m Employee1 (derived) class object `e.getID()` 
            Output:
                PRCV Person1 class Construct
                PRCV Employee1 class Construct
                10

                PRCV Person1 class Construct
                PRCV Employee1 class Construct
                50
* Suppose if we  want to access the Parent class getID method. we need to use super() method.
            Ex:
                class Person1 {
                    constructor(name ) {
                        console.log(name + " Person1 class Constructor")
                    }
                    getID(){
                        return 10;
                    }
                }
                class Employee2  extends Person1 {
                    constructor(name) {
                        super(name); // Here it will invoke the constructor of the parent class
                        console.log(name + " Employee1 class Constructor")
                    }
                    getID(){
                        return super.getID(); // Calling Parent class getID method using super keyword.
                    }
                }
                let e1 = new Employee2("PRCV");
                console.log(e1.getID());
            Output:
                PRCV Person1 class Construct
                PRCV Employee1 class Construct
                10


### Modules: 
* In ES6, we can create multiple modules and export / import them in different classes.
* Modules are  divided the progrma that section of code in to Moduel.

### Module Loader:
* Here we are creating new folder called `ES6ModuleLoaderProject`
* Here we are going to use `Traceur` Transpilers instead of TypeScript
* Run the command to create the node_module folder with the Traceur, System.js and es6-module-loader folders
  * `npm install es6-module-loader traceur systemjs`

### Named Exports:
* In Es6 we are two different types of Exports:
  * Named Exports
            * In this we need to specify the names of the varibles while immporting from other file.
            Ex:
                While Exporting
                    export { fname, lname, obj };
                WWhile Importing:
                    import { fname as f, lname as l, obj } from "./moduleB.js";

    * Default  Exports
            *Default export is used when we export single value from the module file.
            * while Importing no need to provide  { }
                ex: While Exporting:
                        export default fname;
                    While Importing
                        import fname from './moduleB.js'
                        import {default as f } from '....' (This is for chaning the alias names)
    * We are using two files ModuleA.js and ModuleB.js and transfering the date to each files.

### Sets (Strong Set) & Maps:
* In Es5, We have only 1 type of collection ie., Array type
* Sets: Strong Set means it will store the Object references
  * Its having list of values which doesn't haev duplicates
  * Sets is used weather the value exists or not
  * To create new set
      let myset = new Set();
  * Add values to Set:
            myset.add('PRCV') // Can have strings
            myset.add(1)// Can have numbers
            myset.add(1)// Cannot have duplicates, It will ignore this.
            myset.add(2.111)// Can have Float values
            myset.size // Checking the size of the Set

            let obj1 ={}
            let obj2 ={}
            myset.add(obj1)// Can have Object
            myset.add(obj2)// Can have Object
  * Can initialize the values in Set 
            let newSet = new Set({1,2,4,4,6,7,3}) // Here also duplicate values will ignore
  * Can do chaining the add method to set    
            let chainset = new Set().add('PRC').add('Reddy')
  * TO check weather the value exists or not
            chainset.has('PRCV') // It will return `true`
  * To delete the value from Set()
            chainset.delete('PRCV');
### Sets (Weak Sets):
            let myset = new Set();
            let key={}
            myset.add(key)
            console.log(myset.size) // Prints: 1
            key = null;
            console.log(myset.size) // Prints: 1, reference of the key object still exists even if it declare as null
  * We can retreve the reference object back using spread operator below syntax
            key = [...myset][0]; 
  * Some times, for Garbage collection and to avoid memory leak we prefere that the reference of the set to 
           disapper when all other references disappes. So for this purpose ES6 brings WEAKSETS
  * WeakSet is are same as Strong Set. Only difference in Week Sets are:
            -  It can store only Object References, not Primitive values and Object references are weak
                Ex: To create week set
                    let wset = new WeakSet();
                    let key={}
                    wset.add(key)
                    console.log(wset.has(key)) // PRINT: true
                    key = null; // Here it will clear the object and cannot check the key value.
                    
        Ex: In ES5:
            let myset = Object.create(null);
            myset.id = true; // Whith this stateement it will print the below log statement
            if(myset.id){
                console.log('ID Exists)
            }
            (Or)
            myset.id= 0 // Whith this stateement it will not print the below log statement. In ES5, weather its checking value exists or non zero. Its confusing.
            if(myset.id){
                console.log('ID Exists)
### Maps:
  * Its collection/ordered list of Key value pairs.
        * Both Key and Value can have any type. Where in object always can have string type.
        * It mainly uses to retreve the data.
            Ex: In ES5:
                let myMap = Object.create(nulll)
                myMap.name='PRCV'
                let val = myMap.name;
                console.log (val)
        * Creat new Maps
            let myMap = new Map()
            muMap.set('fname','PRCV')
            muMap.set('age',30)
            console.log(muMap.get('age'))
            let obj1={}
            let obj2={}

            myMap.set(obj1,10)
            myMap.set(obj2,20)
            console.log(muMap.get(obj1))
            console.log(muMap.size)
            console.log(muMap.has('fname')) // PRINT: true  
            muMap.delete('fname')
            console.log(muMap.has('fname')) // PRINT: false
            muMap.clear() // It will clear all the elements.

### Iterating over Maps:

            let mymap= new Map([
                ['fname','Prcv'],
                ['lname','Reddy']
            ])
            for(let key of mymap.keys()){
                console.log(key)
            }
            for(let val of mymap.values()){
                console.log(val)
            }
            for(let ent of mymap.entries()){
                console.log(`${ent[0]} -> ${ent[1]}`)
            }
            for(let [k,val] of mymap.entries()){
                console.log(`${k} -> ${val}`)
            }

### ForEach:
            let myMap= new Map([
                ['fname','Prcv'],
                ['lname','Reddy']
            ])
            myMap.forEach(mapfun)
            function mapfun(val,k, callingMap){
                console.log(k+" "+val)
                console.log(myMap === callingMap)
            }

### Symbols:   
  * It will generate the Unique ID, WE can use this in obj proerties
        Ex:
            let s= Symbol();
            console.log(typeof s);// PRINT: symbol
            console.log(s.toString());// PRINT: 
            let s2= Symbol("Test");
            let s3= Symbol("Test");
            console.log(s2===s3);// PRINT:false

            let s4 = Symbol.for('RegSymbol'); // Here it will check the symbol name `RegSymbol` in Global Registory. If it exists it will return the existing otherwise it will create new symbol
            let s5 = Symbol.for('RegSymbol'); 
            console.log(s4===s5);// PRINT:true
            console.log(Symbol.keyfor(s4));// PRINT:RegSymbol

            let fname = Symbol('FirstName');
            let person = {
                [fname]:'PRCV';
            }
            console.log(Object.getOwnPropertySymbols(person));// PRINT: [Symbol(FirstName)]

  * Symbol.Iterating:
        for .. of iterater will not work for all types of object. Object should be Iterator Method.
        To check Object is Iterator Method we use symbol.iterator
        Ex:
            let str="Helo'
            let arr = [1,2,3]
            let num = 5;
            let Obj = {name:'PRCV'};
            consoel.log('for string-"+ typeof str[Symbol.iterator]) // PRINT : function 
            consoel.log('for array-"+ typeof arr[Symbol.iterator]) // PRINT : function
            consoel.log('for number-"+ typeof num[Symbol.iterator]) // PRINT : undefined - we cannot use for loop
            consoel.log('for oject-"+ typeof Obj[Symbol.iterator]) // PRINT : undefined - we cannot use for loop

### Iterables and Iterators:
  *  Iterables: It is an object implements the method key 
        Iterabke{
            [symbol.iterator](): Iterator
        }
  * Iterator: Its an object that implements next object
            Iterator{
                next(): IResultObj
            }
            IResultObj{
                value: any
                done: bool // This is true / false which returns iteration is complete or not
            }
    
        Ex:
            let lst =[1,2,3]
            function creteIterator(array) {
                let cont =0;
                return {
                    next : function() {
                        return count < array.length ? 
                                { value : array[count++], done:false}:
                                {value: undefined, done:true};
                    }
                }
            }
            let myIterartor = creteIterator(lst)
            console.log(myIterartor.next()); //PRINT : Object: {value: 1, done: false}
            console.log(myIterartor.next()); //PRINT : Object: {value: 2, done: false}
            console.log(myIterartor.next()); //PRINT : Object: {value: 3, done: false}
            console.log(myIterartor.next()); //PRINT : Object: {value: undefined, done: true}

### Iterating Objects:
  * for .. of loop will not work by  default on Object. There is a way to do that    
        Ex:
            let person ={
                fname : 'PRCV',
                lname:'Reddy'
            }

            person[Symbol.iterator] = function() {
                let properties = Object.keys(person);
                let count =0 ;
                let isDone: false;
                let next = () => {
                    if(count >= properties.length) {
                        isDone: true;
                    }
                    return { done: isDone, value: this[properties[count++]]};
                }
                return {next};
            }

            for(let p of person){
                console.log(p); // PRINT: PRCV Reddy
            }

### Genertors:
  * Its new in ES6.
  * Using this we can puase the function1 and in middle we can call other function2 and resume  back the functon1 and resume back it.
  * Pausing the function is possible usng `yield` keyword.
        Ex:
            fucntion *createGene(){
                yield 1;
                console.log('After 1st yield');
                yield 2;
            }

            let myGen = createGene();

            console.log(myGen.next()); // PRINT: Object{value: 1, done: false}
            console.log(myGen.next()); //  PRINT: After 1st yied 
                                                  Object{value: 2, done: false}
            console.log(myGen.next()); // PRINT: Object{value: undefined, done: true}
        Ex:
              let person ={
                fname : 'PRCV',
                lname:'Reddy'
            }

            person[Symbol.iterator] = function*() {
                let properties = Object.keys(person);
                for(let t of properties) {
                    yield this[t];
                }
            }
            for(let p of person) {
                console.log(p) : //PRINT: PRCV Reddy
            }

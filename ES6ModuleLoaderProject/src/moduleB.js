let fname = 'PRCV'
let lname = 'Reddy'
let obj = {
    name: 'Shahsi'
}
console.log(`Changing the Imported Object Propery name : ${obj.name} to  :`)


console.log('Module B loaded')


function greet(message) {
    console.log(`Message from funtion exports: ${message}`)
}

class GreetMessge {
    constructor() {
        console.log(`Inside Constructor`)
    }
    greetFun(message) {
        console.log(`INside Class function : ${message}`)
    }
}
export { fname, lname, obj, greet, GreetMessge };
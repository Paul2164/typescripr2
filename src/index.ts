let id:number = 15

let company : string = 'Lifestyle industrial'

let isPublished : boolean = true

console.log('ID :',id)


//any

let course : any = 'Typescript'

course = 25

console.log(course)

function showMe (document:any) {

    console.log(document)
}
showMe('Hello')


// Array

let isArray : number[] = [1,2,3,4,5]

isArray.push(6)
isArray.shift()

console.log(isArray)

//Typle

let Array1 : [number,string,boolean] = [1,'Great',true]
console.log(Array1[2])

let employee : [number,string][] 

employee = [

    [1,'Paul'],
    [2,'Angel'],
    [3,'Peter']
]

//union

let point : number| string = 24

point = 24
point = '23'

function calculateKgToLbs(weight:number|string):number {
    if(typeof weight === 'number')
     return weight * 2.2
     else
     return parseInt(weight) * 2.2
}

console.log(calculateKgToLbs(10))
console.log(calculateKgToLbs('10'))

console.log(parseInt('30'))

//object

// let person : {
//     id : number
//     name : string
// } = {

//     id : 1,
//     name : 'Paul'
// }

// let person : {
//     name:string,
//     id:number
// } = {name:'Paul',id :2}

type Person = {
    name : string
    id : number
    registered() : string
}

let person : Person = {

    name : 'Angel',
    id : 2,
    registered () {

        return `${person.name} ${person.id}`
    }
}

console.log(person.registered())

//function as interface annotation

interface UserInterface {
    name : string
    id : number
    age : number
    height : number
    weight? : number
    sayHello() : string
} 

function userData(user :UserInterface) {

    return `${user.name} ${user.id} ${user.age} ${user.height}`
};

let user1 = {
    name : 'Peter',
    id : 10,
    age : 26,
    height : 163,
    sayHello() {
        return `Hello, my name is${user1.name} `
    }
};

console.log(userData(user1))
console.log((user1.sayHello()))

//enum

enum Car {
    model='model',
    year = 'year',
    color = 'color',
    make = 'make'

}

let myEnum : Car = Car.make
console.log(myEnum)

//interface as a function

interface myfunctionAdd {
    (x : number, y : number, z : number) : number
} 

const add : myfunctionAdd = (x,y,z) : number => x + y + z
console.log(add(2,5,8))
const subtract : myfunctionAdd = (a,b,c) => {

    return a-b-c
}
console.log(subtract(10,4,3))

const multiply : myfunctionAdd = (e,f,g) : number => e*f*g

console.log(multiply(2,5,9))

function addNumber(a:number,b:number) {
    return a + b
}

const sum :number =  addNumber(10,30)
console.log(sum)


let num1 : number = 1;

function declareVal () {
    let num2 : number = 2;

    if(num2 > num1) {
        let num3 : number = 3;
        num3++;
    }
    while(num1 < num2) {
        let num4 : number = 4;
        num1++;
    }

    console.log(num1)
    console.log(num2)
    // console.log(num3)
    // console.log(num4)
}
declareVal();

//string

let employeeName : string = 'James';

let employeeDept : string = 'Finance'

console.log(employeeName.charAt(2))
console.log(employeeName.concat(' ',employeeDept))
console.log(employeeDept.indexOf('c'))
console.log(employeeDept.indexOf('n', -3))
console.log(employeeName.replace('Jam','Pet'))

let str1 : string = 'Hello, Good, World'

console.log(str1.split(',',1))

let values : (string | number)[] = ['Apple',1,'Orange',2,3,'Grape'] 
console.log(values[0])

console.log(values.sort())

console.log(values.pop())
console.log(values.push('Pawpaw'))
console.log(values)
console.log(values.indexOf('Pawpaw'))

//tuple

let customer : [string,number] = ['Paul',2]
console.log(customer[0])

let customer1 : [string,number][];

customer1 = [
    ['James',2],
    ['Petes',5],
    ['Games',12],
    ['Lames',22]
]

console.log(customer.sort())

let employee2 : [number,string] = [1, 'Steve']

employee2[1] = employee2[1].concat(' John')
console.log(employee2)

function displayType (code : string |number) {

    if (typeof code === 'number') {

        console.log('code is  number')
    }else if (typeof code === 'string') {

        console.log('code is string')
    }
}

displayType(123)
displayType('ABC')


function sumNumber (a:number, b:number) {

    return a + b
}

const add1 : number = sumNumber(12,20)
console.log(add1)

function addNumbers (a: number,b: number) : number {
    return a + b
}

console.log(addNumbers(23,24))

function getMessage (greeting : string, name : string) : string {

    return greeting + ' ,' + name
}

console.log(getMessage('Hello','James'))


interface Person1 {
    name : string;
    id : number
}

let person3 : Person1 = {

    name : 'Jane',
    id : 2
}

console.log(person3.name)

interface PersonalData1 {

    name : string;
    age : number;
    sayHello : () => string
}

class Myself implements PersonalData1  {

    name : string;
    age : number;
    
    constructor(name:string, age : number) {

        this.name = name;
        this.age = age;
    }

    sayHello(){

         return 'My name is ' + this.name
    }

}

let myPos : PersonalData1 = new Myself('Paul',39)

console.log(myPos.sayHello())
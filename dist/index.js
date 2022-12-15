import { map } from 'rxjs/operators';
console.log(map);
alert('Hello');
let id = 15;
let company = 'Lifestyle industrial';
let isPublished = true;
console.log('ID :', id);
//any
let course = 'Typescript';
course = 25;
console.log(course);
function showMe(document) {
    console.log(document);
}
showMe('Hello');
// Array
let isArray = [1, 2, 3, 4, 5];
isArray.push(6);
isArray.shift();
console.log(isArray);
//Typle
let Array1 = [1, 'Great', true];
console.log(Array1[2]);
let employee;
employee = [
    [1, 'Paul'],
    [2, 'Angel'],
    [3, 'Peter']
];
//union
let point = 24;
point = 24;
point = '23';
function calculateKgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(calculateKgToLbs(10));
console.log(calculateKgToLbs('10'));
console.log(parseInt('30'));
let person = {
    name: 'Angel',
    id: 2,
    registered() {
        return `${person.name} ${person.id}`;
    }
};
console.log(person.registered());
function userData(user) {
    return `${user.name} ${user.id} ${user.age} ${user.height}`;
}
;
let user1 = {
    name: 'Peter',
    id: 10,
    age: 26,
    height: 163,
    sayHello() {
        return `Hello, my name is${user1.name} `;
    }
};
console.log(userData(user1));
console.log((user1.sayHello()));
//enum
var Car;
(function (Car) {
    Car["model"] = "model";
    Car["year"] = "year";
    Car["color"] = "color";
    Car["make"] = "make";
})(Car || (Car = {}));
let myEnum = Car.make;
console.log(myEnum);
const add = (x, y, z) => x + y + z;
console.log(add(2, 5, 8));
const subtract = (a, b, c) => {
    return a - b - c;
};
console.log(subtract(10, 4, 3));
const multiply = (e, f, g) => e * f * g;
console.log(multiply(2, 5, 9));
function addNumber(a, b) {
    return a + b;
}
const sum = addNumber(10, 30);
console.log(sum);
let num1 = 1;
function declareVal() {
    let num2 = 2;
    if (num2 > num1) {
        let num3 = 3;
        num3++;
    }
    while (num1 < num2) {
        let num4 = 4;
        num1++;
    }
    console.log(num1);
    console.log(num2);
    // console.log(num3)
    // console.log(num4)
}
declareVal();
//string
let employeeName = 'James';
let employeeDept = 'Finance';
console.log(employeeName.charAt(2));
console.log(employeeName.concat(' ', employeeDept));
console.log(employeeDept.indexOf('c'));
console.log(employeeDept.indexOf('n', -3));
console.log(employeeName.replace('Jam', 'Pet'));
let str1 = 'Hello, Good, World';
console.log(str1.split(',', 1));
let values = ['Apple', 1, 'Orange', 2, 3, 'Grape'];
console.log(values[0]);
console.log(values.sort());
console.log(values.pop());
console.log(values.push('Pawpaw'));
console.log(values);
console.log(values.indexOf('Pawpaw'));
//tuple
let customer = ['Paul', 2];
console.log(customer[0]);
let customer1;
customer1 = [
    ['James', 2],
    ['Petes', 5],
    ['Games', 12],
    ['Lames', 22]
];
console.log(customer.sort());
let employee2 = [1, 'Steve'];
employee2[1] = employee2[1].concat(' John');
console.log(employee2);
function displayType(code) {
    if (typeof code === 'number') {
        console.log('code is  number');
    }
    else if (typeof code === 'string') {
        console.log('code is string');
    }
}
displayType(123);
displayType('ABC');
function sumNumber(a, b) {
    return a + b;
}
const add1 = sumNumber(12, 20);
console.log(add1);
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(23, 24));
function getMessage(greeting, name) {
    return greeting + ' ,' + name;
}
console.log(getMessage('Hello', 'James'));
let person3 = {
    name: 'Jane',
    id: 2
};
console.log(person3.name);
class Myself {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return 'My name is ' + this.name;
    }
}
let myPos = new Myself('Paul', 39);
console.log(myPos.sayHello());

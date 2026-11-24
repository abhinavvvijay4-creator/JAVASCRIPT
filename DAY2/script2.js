//arrays
let array =[1,2,3,4,5, 'red', 'blue' ,'green'];
console.log(array);
console.log(array.length);
console.log(array[2]);
array.push('black');
console.log(array);
array.pop(array);
console.log(array);
array.unshift('brown');
console.log(array);
array.shift();
console.log(array);

// extract a portion of an array
let array2=array.slice(2,5);
console.log(array2);

//splice 
array.splice(2,3,'orange','grape');
console.log(array);

//objects
let person={
    firstName:'Maya',
    age:22,
    place:'palghat'
}
console.log(person);
console.log(person.age);
console.log(person['place']);

let person2={
    firstName:'Leo Messi',
    age:39,
    place: 'Argentina'
}
console.log(person2);
console.log(person2.place);

let fruit= new Object();
fruit.name= 'orange';
fruit.colour='orange';
fruit.shape='round';
console.log(fruit);

// ES6 classes
class car{
    constructor(brand, model, year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }
}
let obj_car=new car('BMW','M5',2023);
console.log(obj_car);
let obj2_car=new car('Mahindra','3XO',2026);
console.log(obj2_car);

//array of objects
let students=[{firstName:'Jhon', age:23}, {firstName:'Amal',age:22}];
console.log(students);
console.log(students[1].age);
let person3={
    adrress:{
        street:'Thampanoor',
        city:'Trivandrum',
        state:'Kerala'
    }
};
console.log(person3);

//Functions
function addnum(a,b){
    sum=a+b;
   // console.log(`sum of two numbers is ${sum}`);
        return sum;
}
var result=addnum(25,80);
console.log(`sum of two numbers is ${sum}`);

function mulnum(a,b){
    multiply=a*b;
    return multiply;
}
var result=mulnum(6,9);
console.log(`multiply of two numbers is ${multiply}`);

//Arrow functiions -- ES6
let addnum1=(a,b)=>{
    return a+b;
}
let result2=addnum1(23,46);
console.log(`sum of two numbers is ${result2}`);

//object methods
let person4={
    firstName:'Krishnan',
   lastName:'kutty',
   fullName:()=>{
    return person4.firstName +" "+ person4.lastName;
   }
};
console.log(person4.fullName());

//Array Es6 methods (forEach)
let numbers=[1,2,3,4,5];
numbers.forEach((item,ind,arr3)=>{
    arr3[ind]=item>2;
})
console.log(numbers);

//filter function
let ages=[12,15,18,20,25];
let adult=ages.filter((age)=>{
    return age>=18;
})
console.log(adult);
console.log(ages);

// array destructuring
let [x,y,z]=[10,,30];
console.log(x);
console.log(y);
console.log(z);

//array spread operator
let arr4=[1,2,3];
let [a,b]=[...arr4,10];
//let arr6=[...arr4,10];
console.log([a,b]);

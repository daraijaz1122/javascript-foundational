//DataTypes 
//There are two types of data types (primitive and Non-Primitive)
//Primitive DataTypes : these include(string,number,boolean,null,undefined,symbol,bigint)
//Non-primitive/Reference Datatypes : these include(array,function,objects )
//examples of primitive data types


const Range = 100; 
//console.log(typeof(Range));this will give us number


const personName='Aijaz';
//console.log(typeof(personName));//will return a string

const RangeValue =100.5;
//console.log(typeof(RangeValue));//will return number

const isProgrammer = true;
//console.log(typeof(isProgrammer));//will return boolean

const outTemperature = null;
//console.log(typeof(outTemperature));will return object

let userEmail;
//console.log(typeof(userEmail));//will return undefined

const BigNumber = 123123123123123n;
//console.log(typeof(BigNumber));//will return bigint

//eg non-primitive data types

const Cars=['bmw','audi','toyota','tesla'];
//console.log(Cars,typeof(Cars));//this will returnn object

const MyDetails ={
    name:'aijaz',
    age:26,
    designation : 'software engineer'
}
//console.log(typeof(MyDetails));//this will return object

const myFunction = function(){
    console.log('this is a function body');
}
console.log(typeof(myFunction));//this will return function

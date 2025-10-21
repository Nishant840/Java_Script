// let firstName = "nishant";
// let age = 20;
// let isMarried = true;
// console.log("This person name is " + firstName + " and his age is " + age);

// if(isMarried){
//     console.log(firstName + " is married");
// }
// else{
//     console.log(firstName + " is not married");
// }
// let ans = 0;
// for(let i=1;i<=100;i++){
//     ans += i;
// }
// console.log(ans);

// let arr=[1,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     if(!(arr[i]&1)) console.log(arr[i]);
// }

// const user1 = {
//     firstName : "nishant",
//     gender : "male"
// }
// console.log(user1.firstName)

// const allUser = [{
//         firstName : "nishant",
//         gender : "male",
//         age : 20
//     },{
//         firstName : "anchal",
//         gender : "female",
//         age : 20
//     },{
//         firstName : "vivek",
//         gender : "transgender",
//         age : 20
//     }
// ]
// for(let i=0;i<allUser.length;i++){
//     console.log(allUser[i].firstName +" " + allUser[i].age);
// }

// function findSum(a,b){
//     return a+b;
// }
// console.log(findSum(2,3));

// let sum=0;
// for(let i=0;i<10000000000000;i++){
//     sum += i;
// }
// console.log(sum);
// top command to check cpu usage

// function findSum(a,b,fnTocall){
//     fnTocall(a+b);
// }
// function displayResult(data){
//     console.log("Result of sum is " + data);
// }
// function displayResultPassive(data){
//     console.log("Sum's result is " + data);
// }
// const ans = findSum(2,3,displayResult);

// function calcArithmatic(a,b,type){
//     return type(a,b);
// }
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// console.log(calcArithmatic(4,2,sum));

// function greet(){
//     console.log("Hello world");
// }
// setTimeout(greet,5*1000);

// length
// function getLength(str){
//     console.log("Length of " + str + " is " + str.length);
// }
// getLength("Hello World");

// finding target index
// function getIndex(str,target){
//     console.log("Index of first target is " + str.indexOf(target));
//     console.log("Index of last target is " + str.lastIndexOf(target));
// }
// getIndex("Hello World World World World","World");

// slice of a string
// function getSlice(str,start,end){
//     console.log("Slice of string is " + str.slice(start,end)); //end is excluded
// }
// getSlice("Hello World",0,5);
// console.log("Nishant Kumar".slice(0,4));

// replacing string
// function replaceString(str,target,replacement){
//     console.log("string after replacing: " + str.replace(target,replacement));
// }
// replaceString("Hello World","World","JavaScript");

// split
// function splitString(str,seperator){
//     console.log("After split: " + str.split(seperator));
// }
// splitString("Hello World It's Me"," ");

// const line = "Hi,I'm,Nishant";
// const words = line.split(",");
// console.log(words);

// triming from begning and end
// console.log("   Hello World    ".trim());

// to uppercase
// console.log("nishant kumar".toUpperCase());

// to lower
// console.log("NISHANT kumar".toLowerCase());

// converting to integer

// console.log(parseInt("32"));
// console.log(parseInt("32.2323"));
// console.log(parseInt("32edcxqeax"));

// console.log(parseInt("sdcxaxca32")); // gives NaN

// console.log(parseFloat("32.2323"));

// array 

// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// console.log(arr);
// arr.pop();
// console.log(arr);

// arr.shift(); // pop from front
// console.log(arr);
// arr.unshift(1); // putting something in front of array
// console.log(arr);

// merging two array
// arr1 = [1,2,3,4];
// arr2 = [5,6,7,8];
// console.log(arr1.concat(arr2));

// foreach
// const arr = [1,2,3,4];
// function logThing(str){
//     console.log(str);
// }
// arr.forEach(logThing);

// Classes 
// class Animal{
//     constructor(name, legcount, speaks){
//         this.name = name;
//         this.legcount = legcount;
//         this.speaks = speaks;
//     }
//     static myType(){
//         console.log("I am Animal");
//     }
//     getName(){
//         console.log(this.name);
//     }
//     getLegCount(){
//         console.log(this.legcount);
//     }
//     getSpeak(){
//         console.log(this.speaks);
//     }
// }
// let dog = new Animal("dog", 4, "bhaw bhaw");
// let cat = new Animal("cat", 4,  "meow meow");

// dog.getName();
// dog.getLegCount();
// dog.getSpeak();

// Animal.myType();


// Date
// const currDate = new Date();
// console.log(currDate);
// console.log("Today date is " + currDate.getDate()+ "/" + (currDate.getMonth()+1) + "/" + currDate.getFullYear());
// console.log("Hours: " + currDate.getHours());
// console.log("Minutes: " + currDate.getMinutes());
// console.log("Seconds: " + currDate.getSeconds());

// currDate.setFullYear(2026);
// console.log(currDate.getFullYear());

// const newDate = new Date(2025,2,7); // y,m,d
// console.log(newDate.getFullYear());

// finding time lapse beetween a block of code
// function calcSum(){
//     let sum=0;
//     for(let i=0;i<1000000000;i++){
//         sum = sum + i;
//     }
// }
// const beforeDate = new Date();
// const startTime = beforeDate.getTime();

// calcSum();

// const afterDate = new Date();
// const endTime = afterDate.getTime();
// console.log("Time in S: " + ((endTime-startTime)/1000));

// JSON
// const users = '{"name": "nishant","age": 20,"gender": "Male"}';

// const user = JSON.parse(users);
// console.log(user);

// const user2 = JSON.stringify(user);
// console.log(user2);

// math
// console.log(Math.random());
// console.log(Math.floor(3.2));
// console.log(Math.ceil(3.2));
// console.log(Math.max(2,3,4,5,6));
// console.log(Math.min(2,3,4,5,6));
// console.log(Math.pow(3,2));
// console.log(Math.sqrt(30));

// objects
function objectMethod(obj){
    console.log("Original Object: " + obj);
    
    console.log("Keys of objects are: " , Object.keys(obj));
    console.log("Values of objects are: " , Object.values(obj));
    console.log("Entries of objects are: " , Object.entries(obj));
    
    let hasProp = obj.hasOwnProperty("key1");
    console.log("After hasownProperty(): " , hasProp);

    let newObj = Object.assign({},obj,{key4:"val4"});
    console.log("After Object.assign(): ", newObj);
}
const sampleObjects={
    key1: "val1",
    key2: "val2",
    key3: "val3"
}
objectMethod(sampleObjects);

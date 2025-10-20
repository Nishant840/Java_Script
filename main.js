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
function replaceString(str,target,replacement){
    console.log("string after replacing: " + str.replace(target,replacement));
}
replaceString("Hello World","World","JavaScript");

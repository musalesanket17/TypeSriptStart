// npm init -y
// npm i typescript
// "scripts": {
    // "build" : "tsc index.ts",
    // "build:watch":"tsc index.ts --watch",
    // "test": "echo \"Error: no test specified\" && exit 1"
//   }
// 
//   npm run build
//   node index.js


console.log("typescript")

var s: string = "sanket"
var n:number =12
var b:boolean = true
// *********************************************
var arr=[1,2]
var arr2=[...arr,3]
console.log(arr)
// /****************************************** */

function x(a: number,b: number){

    return a+b
} 
var u=x(1,2)
console.log(u)
// ?********************************************




type human ={
    legs:number,
    hands:boolean,
    

}
type User ={
    age: number,
    name?: string,
    animal: human
}
// ? means optional its not show any error
var obj:User={
  age:33,
//   name:"Rupali",
  animal:{
    legs:4,
    hands:false
    
  }
}

console.log(obj)
// ?******************************************************************
interface dog {
    name?:string;
    legs:number
}
interface cat extends dog{
    food:string;
}
const mydog:cat ={
  food:"pegegree",
  legs:4,
  
}
console.log(mydog) //INheritance Example
// ************************************************************************
// Compostion Example
type animal={
    name:string;
    ears:number
}
type bird={
    wigs:boolean
}
// You Are also Able To Use & OR | Oprator
const Check: animal & bird ={
   ears:2,
   name:"vishal",
   wigs:true
}

console.log(Check)
// ?............................................................................

type man ={
    name:string,
    age?:number
}

const arr3:man[] = [{name:"saha"},{name:"Yun"},{name:"Khan"}]

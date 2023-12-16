
console.log("hello world");
// alert("hello world");
console.warn("this is warning");
console.error("this is error");

// variable in javascript
console.log("*******Variable in JS*****\n1. var num=1;\n2. let a=5\n3. const name='yogesh'")

var num1=2;
var num2= 3;


/*
Data type in Javascript
1. Number
2. String
3. Object(dictionary)
4. Boolean
*/
console.log("*******Data Type in JS*****")

var str1 ="yogesh devtulla";
var marks={ "maths":25, science:34, english:99};
var a=true;
var b=false;
console.log("string : ", str1);
console.log("object : ", marks);
console.log("boolean : ", a,b);

// reference data type in js
// 1. object
// 2. Array
console.log("*******Array in JS*****")
var arr=[1,2,'yogesh',"devtulla",true,null,undefined];
console.log("array : ",arr);
console.log("array[0] : ",arr[0]);
console.log("array[1] : ",arr[1]);
console.log("array[2] : ",arr[2]);
console.log("array[6] : ",arr[6]);

// Operator in JS 
/*
1. Arithmetic = + , - , / , *
2. Assignment = = , += , -= , *= , /=
3. Comparision = <= , >= , == , < , > 
4. Logical = && , || , ! 
*/
console.log("*******Operator in JS*****")

console.log("this is result ",num1+num2);
// Function in JS

function average(a,b){
    c=(a+b)/2;
    return c;
}
console.log("******Function in JS****** \nAverage Function ",average(2,4));

// Conditional statement
console.log("*****conditional if, else if, else********");
age=18;
if (age<18){
    console.log("you aren't eligible to vote");
}
else if(age ==18){
    console.log("Congrats you become eligible");
}
else{
    console.log("you are eligible to vote")
}

// loops in JavaScript
console.log("*******Loops in JS for, while*****")

arr=[1,2,3,4,5,6]
console.log("array : ",arr)
console.log("for loop")
for (var i=0;i<=arr.length;i++){
    console.log("arr[",i,"] = ",arr[i])

}
console.log("Using foreach")
arr.forEach(function(i){console.log(i)})

let j=0;
let sum=0;
console.log("while loop")
while(j<arr.length){
    sum+=j;
    j+=1 
}
console.log("Sum of error : ", sum)

console.log("*******Statements in JS Break, Continue*****")
console.log("Break Statement")
// var arr=[1,2,3,4,5,6]
for(var i=0;i<arr.length;i++){
    if (i==2){
        console.log("Break arr==2")
        break;
    }
    console.log("arr[",i,"] = ",arr[i]);
}
console.log("Continue Statement")
// var arr=[1,2,3,4,5,6]
for(var i=0;i<arr.length;i++){
    if (i==2){
        console.log("continue arr==2")
        continue;
    }
    console.log("arr[",i,"] = ",arr[i]);
}

console.log("*******ARRAY METHODS*****");
myarr=['yogesh',"devtulla",2,1,true,null,undefined];
console.log("calculate length : ",myarr.length);
console.log("POP : ",myarr.pop(),"\nNew array ", myarr);
console.log("Push : ",myarr.push("new"),"\nNew array ", myarr);
console.log("to convert element in str : ",myarr.toString());
console.log("Sorting in Arr : ",myarr.sort());
 
console.log("*******String Method in JS*****");

string="My name is yogesh devtulla and i m from uttarkhand and uttarkhand is best";
console.log(string);
console.log("Length of string", string.length);
console.log("Index of element", string.indexOf("uttarkhand"));
console.log(" Last Index of element", string.lastIndexOf("uttarkhand"));

console.log("Slice Method\n",string.slice(0,10));
console.log("Replace Method\n",string.replace("uttarkhand","Devbhoomi"));




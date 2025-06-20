let newObject={
    name: "John Doe",
   display:function(){
       console.log("Hello");
    }

}
newObject.display();

console.log("Hello Js");

console.table([{name:"Alice"},{name:"Bob"}]);
console.time("loop");

for(let i=0;i<1000000;i++){}
console.timeEnd("loop");
//strict mode
"use strict";
let a=10;
b=20;
//greatest value
let greatestValue=(1>2)?1:2;
console.log(greatestValue);
//&& operator
let c =(1>2)&&5;
//|| default operator
let input=3;
let d=input||4;
console.log(b);

//falsy values
//0'Nan undefined null
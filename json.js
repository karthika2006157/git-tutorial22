
const jsObject={
    name:"John Doe",
   display:function(){
       console.log("Hello");
    },

};
//js
let jsonObject={
    name:"John Doe",
    age:25,
};


//Json methods
let stringJSON=JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON=JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);
//local storage
localStorage.setItem("username","John Doe");
let item=localStorage.getItem("username");
console.log(item);

localStorage.removeItem("username");
let item2=localStorage.getItem("username");
console.log(item2);

sessionStorage.setItem("username","John Doe");

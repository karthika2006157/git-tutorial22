let newObject={
    name: "John Doe",
   display:function(){
       console.log("Hello");
    }

}
newObject.display();

console.log("Hello Js");
console.warn("This is a warning");
console.error("something went wrong");
console.table([{name:"Alice"},{name:"Bob"}]);
console.time("loop");

for(let i=0;i<1000000;i++){}
console.timeEnd("loop");


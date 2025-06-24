// function hello(){
//     console.log("hello from setTimeout")
// }

//const { reject } = require("async");

// console.log("hello from js")
// let count=0;
// let timer=setInterval(()=>{count++;
//    console.log("Hello again");
//    if(count>5){
//     clearInterval(timer);
// }

// },2000);


// console.log("Hello from async.js");
// /
//promises
// 
//try catch family
// try{
//     let result=10/0;
// }
// catch(error){
//     console.log(`Error: ${error}`);

// }
// finally{
//     console.log("Task completed");
// }
//async/await/
function orderFunction(){
let order=new Promise((resolve,reject)=>{
    let isWorking=false;
    setTimeout(()=>{
        if(isWorking){
            resolve("order is ready");
        }else{
            reject("Order delay");
        }
    },3000);
});
return order;
}
 async function orderFood(){
    try{
        const orderFoodStatus=await orderFunction();
        console.log(orderStatus);

    }catch(error){
        console.log(`Error: ${error}`);
    
    }
 }
 
 orderFood();


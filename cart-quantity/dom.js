const para=document.getElementById("msg");
console.log(para.innerText);
para.innerText="This is a javascript";
const hiButton =document.querySelector(".js-button");
hiButton.addEventListener("click",()=>{
    console.log("Hi");
});
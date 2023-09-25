let social=document.querySelector(".social")
let share=document.querySelector(".share")
let share_1=document.querySelector(".share-1")


console.log(social)
console.log(share)

share.addEventListener("click",(e)=>{
    social.classList.toggle("on")
})
share_1.addEventListener("click",(e)=>{
    social.classList.toggle("on")
})
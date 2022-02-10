let button = document.querySelector(".btn")
let containerOff=document.querySelector(".container-off")
let containerOn=document.querySelector(".container-on")
let closeModal=document.querySelector(".fa-xmark")

button.addEventListener("click",function(){
   containerOff.style.display = "none"
   containerOn.style.display = "flex"
})

closeModal.addEventListener("click",function(){
  containerOff.style.display = "flex"
  containerOn.style.display = "none"
})
let message = document.querySelector(".error");
const confirmPassword = document.querySelector("#confirmPassword")
const password = document.querySelector("#password")
const btn = document.querySelector("button")

confirmPassword.addEventListener("keyup", (e)=>{
  
  if(confirmPassword.value !== password.value){
    message.textContent = "password does not match"
  }else {
    message.textContent = "" 
  }
  
})

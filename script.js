"use strict"
const nameinput = document.querySelector(".name");
const nameerror = document.querySelector(".name + .errormessage")
const passwordEr = document.querySelector(".password + .errormessage");
const emailEr = document.querySelector(".email + .errormessage");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPass = document.querySelector(".passwordConfirm")
const confirmPassEr = document.querySelector(".passwordConfirm + .errormessage")

const form = document.querySelector(".form")
form.addEventListener("submit", function(e){
  e.preventDefault()
if( nameinput.value.trim() === '' ) {
  nameerror.textContent = "name can not be empty"
  nameinput.classList.add("error")
  nameinput.classList.remove("success")
  
} else{
  nameinput.textContent =""
  nameinput.classList.add("success")
  nameinput.classList.remove("error")
}
if(email.value.trim() === ''){
  emailEr.textContent = 'email is required'
  email.classList.add("error")
  email.classList.remove("success")
} else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.value.trim())){
emailEr.textContent = 'please enter a valid email'
email.classList.add("error")
 email.classList.remove("success")
} else {
  emailEr.textContent = ""
  email.classList.add("success")
 email.classList.remove("error")
}
if(password.value.trim() === '') {
 passwordEr.textContent = "password can not be empty"
  password.classList.add("error")
  password.classList.remove("success")
  
} else if(password.value.length < 8){
  passwordEr.textContent = "password must be longer than 8"
  password.classList.add("error");
  password.classList.remove("success");
}

else{
  password.textContent =""
 password.classList.add("success")
 password.classList.remove("error")
}
if (password.value !== confirmPass.value){
  confirmPassEr.textContent = "Passwords do not match "
  confirmPass.classList.add("error")
  confirmPass.classList.remove("success")
} else {
  confirmPassEr.textContent = ""
  confirmPass.classList.add("success")
  confirmPass.classList.remove("error")
}
})






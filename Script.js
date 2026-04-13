document.addEventListener("DOMContentLoaded", () => {
const signup =document.querySelector(".sign-up-container");
const signin =document.querySelector(".sign-in-container");
const left  =document.querySelector(".overlay-left");
const right =document.querySelector(".overlay-right");

signup.style.display = "none";
right.style.display = "none";
document.getElementById("log").addEventListener("click", e => {
  e.preventDefault();
  
signup.style.display = "none";
signin.style.display = "block";
left.style.display = "none";
right.style.display = "block";
  });

document.getElementById("reg").addEventListener("click", e => {
  e.preventDefault();
  
signup.style.display = "block";
signin.style.display = "none";
left.style.display = "block";
right.style.display = "none";
  });
});
  

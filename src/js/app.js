import Bouncer from "formbouncerjs";
import "../style/style.scss";

var validate = new Bouncer("form"); /*Initialising Form Validation*/

const open = document.querySelector("#menu-open");
const close = document.querySelector("#menu-close");
const navlist = document.querySelector("#nav-list");
const btn = document.querySelector("#btn");
const arrow = document.querySelector("#arrow");
const success = document.querySelector("#success");

window.addEventListener("load", () => {
  close.classList.add("no-display");
});

/*Burger Menu*/

open.addEventListener("click", () => {
  open.classList.add("no-display");
  close.classList.remove("no-display");
  navlist.classList.remove("hide");
});
close.addEventListener("click", () => {
  open.classList.remove("no-display");
  close.classList.add("no-display");
  navlist.classList.add("hide");
});

btn.addEventListener("mouseover", () => {
  arrow.classList.add("arrow-animation");
});
btn.addEventListener("mouseout", () => {
  arrow.classList.remove("arrow-animation");
});

/*Form input data capture*/

const form = document.getElementById("form");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("name");
  let lastName = document.getElementById("surname");
  let email = document.getElementById("email");

  if (firstName.value && lastName.value && email.value) {
    console.log(`${firstName.value}  ${lastName.value}  ${email.value}`);
    success.classList.add("success");
    success.innerHTML = `Name: ${firstName.value} <br> Surname: ${lastName.value} <br> Email: ${email.value}`;

    firstName.value = "";
    lastName.value = "";
    email.value = "";
  } else {
    console.log("fill all input fields to them see in console");
    success.classList.add("fail");
    success.innerHTML = "Ooops! Uncomplete form";
  }
});

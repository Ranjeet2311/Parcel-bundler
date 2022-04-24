import JustValidate from "just-validate";
import "../style/style.scss";

const open = document.querySelector("#menu-open");
const close = document.querySelector("#menu-close");
const navlist = document.querySelector("#nav-list");

window.addEventListener("load", () => {
  close.classList.add("no-display");
});

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

const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Name is required",
    },
    {
      rule: "maxLength",
      value: 30,
      errorMessage: "Name is required",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);

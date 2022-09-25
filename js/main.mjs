import { signUpForm, signUp } from "./signup.mjs";

const BASE_URL = "https://nf-api.onrender.com";

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = {
    name: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(user);
  signUp(`${BASE_URL}/api/v1/social/auth/register`, user);
});

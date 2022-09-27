import { submitSignUp, signUpForm } from "./signup.mjs";
import { submitLogin, loginForm } from "./login.mjs";

export const BASE_URL = "https://nf-api.onrender.com";

if (signUpForm !== undefined && signUpForm !== null) {
  submitSignUp();
}

if (loginForm !== undefined && loginForm !== null) {
  submitLogin();
}

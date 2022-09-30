import { submitSignUp, signUpForm } from "./signup.mjs";
import { submitLogin, loginForm } from "./login.mjs";
import { fetchProfile, username } from "./profile.mjs";

export const BASE_URL = "https://nf-api.onrender.com";

if (signUpForm !== undefined && signUpForm !== null) {
  submitSignUp();
}

if (loginForm !== undefined && loginForm !== null) {
  submitLogin();
}

fetchProfile(`${BASE_URL}/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`);

import { submitSignUp } from "./api/signup.mjs";
import { submitLogin } from "./api/login.mjs";
import { fetchProfile, username } from "./api/fetchProfile.mjs";
import { fetchPosts } from "./api/fetchPosts.mjs";

export const BASE_URL = "https://nf-api.onrender.com";

const path = location.pathname;

if (path === "/signup.html") {
  submitSignUp();
} else if (path === "/login.html") {
  submitLogin();
} else if (path === "/profile.html") {
  fetchProfile(`${BASE_URL}/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`);
} else if (path === "/index.html") {
  fetchPosts(`${BASE_URL}/api/v1/social/posts/`);
}

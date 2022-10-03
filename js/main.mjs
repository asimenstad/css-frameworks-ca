import { submitSignUp } from "./api/signup.mjs";
import { submitLogin } from "./api/login.mjs";
import { fetchProfile, username } from "./api/fetchProfile.mjs";
import { fetchPosts } from "./api/fetchPosts.mjs";
import { submitPost } from "./api/createPost.mjs";
import { submitUpdatedPost } from "./api/updatePost.mjs";

export const BASE_URL = "https://nf-api.onrender.com";

export const path = location.pathname;

if (path === "/signup.html") {
  submitSignUp();
} else if (path === "/login.html") {
  submitLogin();
} else if (path === "/profile.html") {
  fetchProfile(`${BASE_URL}/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`);
  submitUpdatedPost();
} else if (path === "/index.html") {
  fetchPosts(`${BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`);
  submitPost();
}

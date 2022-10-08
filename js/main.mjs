import { submitSignUp } from "./api/signup.mjs";
import { submitLogin } from "./api/login.mjs";
import { fetchProfile, username } from "./api/fetchProfile.mjs";
import { fetchPosts } from "./api/fetchPosts.mjs";
import { submitPost } from "./api/createPost.mjs";
import { submitUpdatedPost } from "./api/updatePost.mjs";
import { id, fetchSpecificPost } from "./api/specificPost.mjs";
import { fetchProfiles } from "./api/follow.mjs";

export const BASE_URL = "https://nf-api.onrender.com";
export const path = location.pathname;

const savedAccessToken = localStorage.getItem("accessToken");

if (path === "/signup.html") {
  submitSignUp();
} else if (path === "/login.html") {
  submitLogin();
} else if (path === "/profile.html") {
  fetchProfile(`${BASE_URL}/api/v1/social/profiles/${username}?_posts=true&_following=true&_followers=true`);
  submitPost();
  submitUpdatedPost();
} else if (path === "/index.html") {
  if (savedAccessToken === "") {
    window.location.href === "/login.html";
  }
  fetchPosts(`${BASE_URL}/api/v1/social/posts?_author=true&_comments=true&_reactions=true`);
  fetchProfiles(`${BASE_URL}/api/v1/social/profiles`);
} else if (path === "/specific-post.html") {
  fetchSpecificPost(`${BASE_URL}/api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`);
}

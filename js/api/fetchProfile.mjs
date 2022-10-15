import { profileTemplate } from "../templates/profileTemplate.mjs";
import { profilePostTemplate } from "../templates/profilePostTemplate.mjs";
import { postId } from "./updatePost.mjs";
import { deletePost } from "./deletePost.mjs";
import { BASE_URL } from "../main.mjs";

export const username = localStorage.getItem("username");

export async function fetchProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();

    displayProfile(json);
    displayPosts(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

function displayProfile(profile) {
  const profileContainer = document.getElementById("profile-info-container");
  profileContainer.append(profileTemplate(profile));
}

function displayPosts(profile) {
  const postsContainer = document.getElementById("posts-container");
  const posts = profile.posts;
  posts.forEach((post) => {
    postsContainer.append(profilePostTemplate(post));
  });
  getPostId();
}

function getPostId() {
  const editBtns = document.querySelectorAll(".edit-post-btn");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (e) => {
      postId.value = editBtn.id;
    });
  });

  const deleteBtns = document.querySelectorAll(".delete-post-btn");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", (e) => {
      deletePost(`${BASE_URL}/api/v1/social/posts/${deleteBtn.id}`);
    });
  });
}

import { BASE_URL } from "../main.mjs";

const updatePostForm = document.getElementById("update-post-form");
const newTitle = document.getElementById("new-title");
const newBody = document.getElementById("new-body");
const newMedia = document.getElementById("new-media");
const newTags = document.getElementById("new-tags");
export const postId = document.getElementById("update-post-id");

async function updatePost(url, data) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}

export function submitUpdatedPost() {
  updatePostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const updatedPost = {
      title: newTitle.value,
      body: newBody.value,
      media: newMedia.value,
      tags: newTags.value,
    };

    if (!updatedPost.media) {
      delete updatedPost.media;
    }
    updatePost(`${BASE_URL}/api/v1/social/posts/${postId.value}`, updatedPost);
  });
}

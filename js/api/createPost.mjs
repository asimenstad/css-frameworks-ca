import { BASE_URL } from "../main.mjs";

const createPostForm = document.getElementById("create-post-form");
const title = document.getElementById("title");
const body = document.getElementById("post-body");
const media = document.getElementById("media");
const tags = document.getElementById("tags");

/**
 * Lets user create post
 * @param {string} url - URL for the POST request
 * @param {object} data - The post data from the create post form
 * @returns {object} - Post data
 */

async function createPost(url, data) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();

    createPostForm.reset();
    window.location.reload();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export function submitPost() {
  createPostForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const post = {
      title: title.value,
      body: body.value,
      media: media.value,
      tags: tags.value,
    };
    if (!post.media) {
      delete post.media;
    }
    createPost(`${BASE_URL}/api/v1/social/posts`, post);
  });
}

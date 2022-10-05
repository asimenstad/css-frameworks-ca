import { specificPostTemplate } from "../templates/specificPostTemplate.mjs";

export async function commentOnPost(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, postData);
    const json = await response.json();
  } catch (error) {
    console.log(error);
  }
}

export function createComment() {
  const commentForm = document.getElementById("comment-form");
  console.log(commentForm);
}

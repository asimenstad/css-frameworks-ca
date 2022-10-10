import { specificPostTemplate } from "../templates/specificPostTemplate.mjs";

const postContainer = document.getElementById("post-container");
const breadcrumb = document.getElementById("breadcrumb");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const id = params.get("id");

export async function fetchSpecificPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();
    displaySpecificPost(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

function displaySpecificPost(post) {
  console.log(post);
  document.title = `${post.author.name} - ${post.title}`;
  breadcrumb.textContent = `${post.author.name} - ${post.title}`;
  postContainer.append(specificPostTemplate(post));
}

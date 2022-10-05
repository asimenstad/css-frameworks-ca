import { postTemplate } from "../templates/postTemplate.mjs";
import { searchPosts } from "./search.mjs";
import { sortPosts } from "./sort.mjs";

export async function fetchPosts(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, options);
    const json = await response.json();
    displayPostFeed(json);
    searchPosts(json);
    sortPosts(json);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

function displayPostFeed(posts) {
  const postFeedContainer = document.getElementById("post-feed-container");
  posts.forEach((post) => {
    postFeedContainer.append(postTemplate(post));
  });
}

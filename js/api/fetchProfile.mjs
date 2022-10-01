import { postTemplate } from "../templates/postTemplate.mjs";
import { profileTemplate } from "../templates/profileTemplate.mjs";

export const username = localStorage.getItem("username");

export async function fetchProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
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
    console.log(post);
    postsContainer.append(postTemplate(post));
  });
}
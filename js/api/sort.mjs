import { postTemplate } from "../templates/postTemplate.mjs";

export function sortPosts(posts) {
  const postsArray = [...posts];
  let sortedPosts = [];

  const sortForm = document.getElementById("sort-form");
  const sort = document.getElementById("sort");
  sort.addEventListener("change", () => {
    const postFeedContainer = document.getElementById("post-feed-container");

    if (sort.value === "oldest") {
      sortedPosts = postsArray.sort((a, b) => new Date(a.created) - new Date(b.created));
    } else if (sort.value === "newest") {
      sortedPosts = postsArray.sort((a, b) => new Date(b.created) - new Date(a.created));
    }
    console.log(sortedPosts);
    postFeedContainer.innerHTML = "";
    sortedPosts.forEach((post) => {
      postFeedContainer.append(postTemplate(post));
    });
  });
  if (window.location.reload) {
    sortForm.reset();
  }
}

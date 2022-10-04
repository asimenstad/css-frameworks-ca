import { postTemplate } from "../templates/postTemplate.mjs";

export function searchPosts(posts) {
  const postsArray = [...posts];

  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const search = searchInput.value;
    console.log(searchInput.value);
    const filteredPosts = postsArray.filter((post) => {
      const {
        author: { name },
        title,
        body,
      } = post;

      if (
        name.toLowerCase().includes(search.toLowerCase()) ||
        title.toLowerCase().includes(search.toLowerCase()) ||
        body.toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      }
    });

    const postFeedContainer = document.getElementById("post-feed-container");
    postFeedContainer.innerHTML = "";
    filteredPosts.forEach((post) => {
      postFeedContainer.append(postTemplate(post));
      searchForm.reset();
    });
  });
}

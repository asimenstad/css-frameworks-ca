export const username = localStorage.getItem("username");
const profileContainer = document.getElementById("profile-info-container");
const postsContainer = document.getElementById("posts-container");

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

    createProfile(json);
    createPostCard(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

function createProfile(user) {
  const { name, _count, avatar } = user;
  const { followers, following, posts } = _count;

  profileContainer.innerHTML = `
    <div>
        <h2 id="profile-name">${name}</h2>
        <div class="text-muted fs-7 d-flex">
            <p class="px-1">${followers} Followers</p>
            <p class="px-1 border-start">${following} Following</p>
            <p class="px-1 border-start">${posts} Posts </p>
        </div>
    </div>
    <img src="${avatar}" alt="${name}" class="img-fluid rounded-circle profile">`;
}

function createPostCard(user) {
  const posts = user.posts;

  posts.forEach((post) => {
    const { body, created, id, media, owner, title } = post;

    const splitCreated = created.split("T");
    const joinedCreated = splitCreated.join(` at `);
    const formattedCreated = joinedCreated.slice(0, -8);

    postsContainer.innerHTML += `<div class="card border-0">
    <div class="card-body" id="${id}">
      <div class="row">
        <div class="col-auto">
          <img
            src="${user.avatar}"
            alt="${owner}"
            class="img-fluid thumbnail rounded-circle"
             />
        </div>
        <div class="col-auto">
          <h3 class="m-0 mt-1">${owner}</h3>
          <p class="text-muted">${formattedCreated}</p>
        </div>
      </div>
      <div class="row">
        <h3>${title}</h3>
        <p>${body}</p>
        <div>${media}</div>
      </div>
    </div>
    </div>`;
  });
}

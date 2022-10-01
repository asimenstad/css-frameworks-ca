export function profileTemplate(data) {
  const profileCard = document.createElement("div");
  const infoContainer = document.createElement("div");
  const username = document.createElement("h2");
  const counterContainer = document.createElement("div");
  const followerCounter = document.createElement("p");
  const followingCounter = document.createElement("p");
  const postCounter = document.createElement("p");
  const profileImage = document.createElement("img");

  profileCard.classList.add(
    "card-body",
    "d-flex",
    "flex-row-reverse",
    "flex-md-column-reverse",
    "justify-content-center",
    "gap-4",
    "align-items-center",
    "text-md-center"
  );
  followerCounter.classList.add("px-1");
  followingCounter.classList.add("border-start", "px-1");
  postCounter.classList.add("border-start", "px-1");
  profileImage.classList.add("img-fluid", "rounded-circle", "profile");
  counterContainer.classList.add("text-muted", "fs-7", "d-flex");

  username.textContent = data.name;
  followerCounter.textContent = `${data._count.followers} Followers`;
  followingCounter.textContent = `${data._count.following} Following`;
  postCounter.textContent = `${data._count.posts} Posts`;
  profileImage.src = data.avatar;
  profileImage.alt = data.name;

  counterContainer.append(followerCounter, followingCounter, postCounter);

  infoContainer.append(username, counterContainer);

  profileCard.append(infoContainer, profileImage);

  return profileCard;
}

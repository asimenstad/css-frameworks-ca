export function profileTemplate(data) {
  const { name, _count, avatar } = data;

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

  username.textContent = name;
  followerCounter.textContent = `${_count.followers} Followers`;
  followingCounter.textContent = `${_count.following} Following`;
  postCounter.textContent = `${_count.posts} Posts`;

  if (avatar !== "") {
    profileImage.src = avatar;
  } else {
    profileImage.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }
  profileImage.alt = name;

  counterContainer.append(followerCounter, followingCounter, postCounter);

  infoContainer.append(username, counterContainer);

  profileCard.append(infoContainer, profileImage);

  return profileCard;
}

export function profilePostTemplate(data) {
  const { id, owner, created, title, body, media, tags } = data;

  /// Header elements
  const header = document.createElement("div");
  const headerText = document.createElement("div");
  const authorContainer = document.createElement("h3");
  const timeContainer = document.createElement("p");
  const avatarContainer = document.createElement("div");
  const avatar = document.createElement("img");

  /// Dropdown
  const dropdown = document.createElement("div");
  dropdown.innerHTML = ` <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
</button>
<ul class="dropdown-menu">
<li><button class="dropdown-item edit-post-btn" id="${id}" data-bs-toggle="modal" data-bs-target="#modal" >Edit post</button></li>
<li><Button class="dropdown-item text-danger">Delete post</button></li>
</ul>`;

  /// header classes
  header.classList.add("row");
  headerText.classList.add("col-auto");
  authorContainer.classList.add("m-0", "mt-1");
  timeContainer.classList.add("text-muted");
  avatarContainer.classList.add("col-auto");
  avatar.classList.add("img-fluid", "thumbnail", "rounded-circle");
  dropdown.classList.add("dropdown", "col-auto", "ms-auto");

  const splitCreated = created.split("T");
  const joinedCreated = splitCreated.join(` at `);
  const formattedCreated = joinedCreated.slice(0, -8);

  const avatarStored = localStorage.getItem("avatar");

  authorContainer.textContent = owner;
  timeContainer.textContent = formattedCreated;
  if (avatarStored !== "") {
    avatar.src = avatarStored;
  } else {
    avatar.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }

  avatarContainer.append(avatar);
  headerText.append(authorContainer, timeContainer);
  header.append(avatarContainer, headerText, dropdown);

  /// Body
  const content = document.createElement("div");
  const titleContainer = document.createElement("h3");
  const bodyContainer = document.createElement("p");
  const mediaContainer = document.createElement("img");
  const tagsContainer = document.createElement("p");

  content.classList.add("row");
  tagsContainer.classList.add("text-muted");

  titleContainer.textContent = title;
  bodyContainer.textContent = body;
  mediaContainer.src = media;
  tagsContainer.textContent = tags;

  content.append(titleContainer, bodyContainer, mediaContainer, tagsContainer);

  /// Card
  const card = document.createElement("div");
  card.classList.add("card", "border-0", "mb-4");
  card.id = id;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.append(header, content);
  card.append(cardBody);

  return card;
}

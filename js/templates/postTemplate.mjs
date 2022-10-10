export function postTemplate(data) {
  const { author, body, comments, created, media, reactions, tags, title, updated, id } = data;

  /// Header
  const header = document.createElement("div");
  const headerText = document.createElement("div");
  const authorContainer = document.createElement("h3");
  const timeContainer = document.createElement("p");
  const avatarContainer = document.createElement("div");
  const avatar = document.createElement("img");

  header.classList.add("row");
  headerText.classList.add("col-auto");
  authorContainer.classList.add("m-0", "mt-1");
  timeContainer.classList.add("text-muted");
  avatarContainer.classList.add("col-auto");
  avatar.classList.add("img-fluid", "thumbnail", "rounded-circle");

  const formattedCreated = new Date(created).toLocaleString("en-GB", { timeStyle: "short", dateStyle: "long" });
  const formattedUpdated = new Date(updated).toLocaleString("en-GB", { timeStyle: "short", dateStyle: "long" });

  authorContainer.textContent = author.name;

  timeContainer.textContent = formattedCreated;

  if (created !== updated) {
    timeContainer.textContent = `${formattedUpdated} (Edited)`;
  }

  if (author.avatar !== "") {
    avatar.src = data.author.avatar;
  } else {
    avatar.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  }

  avatarContainer.append(avatar);
  headerText.append(authorContainer, timeContainer);
  header.append(avatarContainer, headerText);

  /// Body
  const content = document.createElement("div");
  const titleContainer = document.createElement("h3");
  const bodyContainer = document.createElement("p");
  const mediaContainer = document.createElement("img");
  const tagsContainer = document.createElement("p");

  content.classList.add("row");
  tagsContainer.classList.add("text-muted", "mt-1");

  titleContainer.textContent = title;
  bodyContainer.textContent = body;
  mediaContainer.src = media;
  tagsContainer.textContent = tags;

  content.append(titleContainer, bodyContainer, mediaContainer, tagsContainer);

  /// Comments
  const footer = document.createElement("div");
  const commentCounter = document.createElement("a");
  const reactionsDisplay = document.createElement("div");

  commentCounter.textContent = `Comments (${comments.length})`;
  commentCounter.href = `specific-post.html?id=${id}`;

  footer.classList.add("d-flex", "justify-content-between");
  commentCounter.classList.add("mb-0", "text-decoration-none");

  footer.append(reactionsDisplay, commentCounter);

  /// Card

  const card = document.createElement("div");
  card.classList.add("card", "border-0", "mb-4");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.append(header, content, footer);
  card.append(cardBody);

  return card;
}

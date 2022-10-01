export function postTemplate(data) {
  /// Header
  const header = document.createElement("div");
  const headerText = document.createElement("div");
  const author = document.createElement("h3");
  const time = document.createElement("p");
  const avatarContainer = document.createElement("div");
  const avatar = document.createElement("img");

  header.classList.add("row");
  headerText.classList.add("col-auto");
  author.classList.add("m-0", "mt-1");
  time.classList.add("text-muted");
  avatarContainer.classList.add("col-auto");
  avatar.classList.add("img-fluid", "thumbnail", "rounded-circle");

  author.textContent = data.owner;
  time.textContent = data.created;
  avatar.src = data.avatar;

  avatarContainer.append(avatar);
  headerText.append(author, time);
  header.append(avatarContainer, headerText);

  /// Body
  const content = document.createElement("div");
  const title = document.createElement("h3");
  const body = document.createElement("p");
  const media = document.createElement("img");
  const tags = document.createElement("p");

  content.classList.add("row");

  title.textContent = data.title;
  body.textContent = data.body;
  media.src = data.media;
  tags.textContent = data.tags;

  content.append(title, body, media, tags);

  /// Card
  const card = document.createElement("div");
  card.classList.add("card", "border-0");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.append(header, content);
  card.append(cardBody);

  return card;
}

export function specificPostTemplate(data) {
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

  /// Footer - comments

  const commentFormContainer = document.createElement("div");
  const commentForm = document.createElement("form");
  commentForm.id = "comment-form";

  commentForm.innerHTML = `<label for="comment-body" class="form-label visually-hidden">Comment</label>
  <textarea
  class="form-control border-0 bg-light"
  id="comment-body"
  name="comment-body"
  rows="1"
  placeholder="Write a comment"
  required
></textarea>
<div class="d-flex mt-1">
<button type="submit" class="btn btn-primary ms-auto gradient">Post</button>
</div>`;
  commentFormContainer.classList.add("mb-1");
  commentFormContainer.append(commentForm);

  const commentsContainer = document.createElement("div");
  const commentsTitle = document.createElement("p");
  const commentCardsContainer = document.createElement("div");
  commentsTitle.textContent = `Comments (${comments.length})`;
  commentsContainer.classList.add("border-top", "pt-3");
  commentsTitle.classList.add("ms-auto");

  comments.forEach((comment) => {
    const { owner, created, body } = comment;
    const formattedCreated = new Date(created).toLocaleString("en-GB", { timeStyle: "short", dateStyle: "long" });

    const commentCard = document.createElement("div");
    const commentHeader = document.createElement("div");
    const commentAuthor = document.createElement("p");
    const commentBody = document.createElement("p");
    const commentCreated = document.createElement("p");

    commentCard.classList.add("ps-2", "border-start");
    commentHeader.classList.add("d-flex", "gap-2");
    commentAuthor.classList.add("m-0");
    commentCreated.classList.add("text-muted", "m-0");

    commentAuthor.textContent = owner;
    commentBody.textContent = body;
    commentCreated.textContent = formattedCreated;

    commentHeader.append(commentAuthor, commentCreated);
    commentCard.append(commentHeader, commentBody);

    console.log(commentCard);

    commentCardsContainer.append(commentCard);
  });

  commentsContainer.append(commentsTitle, commentFormContainer, commentCardsContainer);

  /// Card
  const cardContainer = document.createElement("a");
  cardContainer.classList.add("text-decoration-none", "text-reset");
  cardContainer.href = `specific-post.html?id=${id}`;

  const card = document.createElement("div");
  card.classList.add("card", "border-0", "mb-4", "mx-auto");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  cardBody.append(header, content, commentsContainer);
  card.append(cardBody);
  cardContainer.append(card);

  return cardContainer;
}

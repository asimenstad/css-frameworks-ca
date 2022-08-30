const contactContainer = document.querySelector(".container.contacts");

function addContacts() {
  for (let i = 0; i < contacts.length; i++) {
    contactContainer.innerHTML += `<div class="d-flex flex-column-reverse flex-md-row-reverse align-items-center justify-content-end gap-2"><h3 >${contacts[i].name}</h3><img class="img-fluid  rounded-circle thumbnail" src="${contacts[i].image}"></div>`;
  }
}
addContacts();

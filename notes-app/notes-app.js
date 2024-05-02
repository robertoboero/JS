"use strict";

const notes = getSavedNotes();
const filters = { searchText: "" };
let orderNotes = [];

document.querySelector("#filter").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = uuidv4();
  const now = moment();
  notes.push({
    id: id,
    title: e.target.elements.title.value,
    body: "",
    createAt: now.unix(),
    updatedAt: now.unix(),
  });
  saveNotes(notes);
  location.assign("edit.html#" + id);
  e.target.elements.title.value = "";
});

document.querySelector("#create-note").addEventListener("reset", (e) => {
  e.preventDefault();
  notes = [];
  localStorage.removeItem("notes");

  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  const orderFilter = e.target.value;
  const orderNotes = notes.filter((note) => true);
  switch (orderFilter) {
    case "byEditing":
      orderNotes.sort((a, b) => {
        if (a.updatedAt > b.updatedAt) {
          return -1;
        }
        if (a.updatedAt < b.updatedAt) {
          return 1;
        }
        return 0;
      });

      break;

    case "byCreated":
      orderNotes.sort((a, b) => {
        if (a.createAt > b.createAt) {
          return -1;
        }
        if (a.createAt < b.createAt) {
          return 1;
        }
        return 0;
      });
      break;

    case "byAlpha":
      orderNotes.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      break;
    default:
      break;
  }
  renderNotes(orderNotes, filters);
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    filters = { searchText: "" };

    renderNotes(notes, filters);
  }
});

/* document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.elements.firstName.value;
  e.target.elements.firstName.value = "";
});
 */

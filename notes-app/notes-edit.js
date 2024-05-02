"use strict";

const editedTitle = document.querySelector("input");
const editedDescription = document.querySelector("#note-body");
const removeButton = document.querySelector("button");
const noteId = location.hash.substring(1);
let notes = getSavedNotes();

let note = notes.find((note) => note.id == noteId);
if (!note) {
  location.assign("./index.html");
}

editedTitle.value = note.title;

if (!note.body) {
  editedDescription.value = "Inserisci un body";
  editedDescription.addEventListener("focus", () => {
    editedDescription.value = "";
  });
} else {
  editedDescription.value = note.body;
}
editedTitle.addEventListener("input", (e) => {
  const now = moment();
  note.title = e.target.value;
  note.updatedAt = now.unix();
  saveNotes(notes);
});

editedDescription.addEventListener("input", (e) => {
  const now = moment();
  note.body = e.target.value;
  note.updatedAt = now.unix();
  saveNotes(notes);
});

removeButton.addEventListener("click", () => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("./index.html");
});

window.addEventListener("storage", (e) => {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    note = notes.find((note) => note.id == noteId);
    if (!note) {
      location.assign("./index.html");
    }

    editedTitle.value = note.title;

    if (!note.body) {
      editedDescription.value = "Inserisci un body";
      editedDescription.addEventListener(
        "focus",
        () => (editedDescription.value = "")
      );
    } else {
      editedDescription.value = note.body;
    }
  }
});

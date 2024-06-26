// Read exiting notes
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes");
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (err) {
    return [];
  }
};
//Save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const removeNote = (id) => {
  const notesIndex = notes.findIndex((note) => note.id === id);
  if (notesIndex > -1) {
    notes.splice(notesIndex, 1);
  }
};

//Genera la lista dei todo
const generateDOM = (note) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.textContent = "x";
  button.addEventListener("click", () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });
  li.appendChild(button);
  const url = "edit.html#" + note.id;
  a.setAttribute("href", url);
  span.textContent = note.title;
  li.appendChild(a).appendChild(span);

  return li;
};

const renderNotes = (notes, filters) => {
  document.querySelector(".notes").innerHTML = "";
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );

  filteredNotes.forEach((note) => {
    const p = generateDOM(note);
    document.querySelector(".notes").appendChild(p);
  });
};

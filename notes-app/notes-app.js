let notes = [];
const filters = { searchText: "" };

document.querySelector("#filter").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelectorAll(".note").forEach(function (note, index) {
  const attributes = {
    title: note.textContent,
  };
  notes.push(attributes);
});

const notesJSON = localStorage.getItem("notes");
if (notesJSON != null) {
  notes = JSON.parse(notesJSON);
}
renderNotes(notes, filters);

document.querySelector("#create-note").addEventListener("submit", function (e) {
  e.preventDefault();
  notes.push({ title: e.target.elements.title.value });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
  e.target.elements.title.value = "";
});

function renderNotes(notes, filters) {
  document.querySelector(".notes").innerHTML = "";
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  filteredNotes.forEach(function (note) {
    const p = document.createElement("p");
    p.textContent = note.title;
    document.querySelector(".notes").appendChild(p);
  });
}

document.querySelector("#create-note").addEventListener("reset", function (e) {
  e.preventDefault();
  notes = [];
  localStorage.removeItem("notes");

  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});

/* document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.elements.firstName.value;
  e.target.elements.firstName.value = "";
});
 */

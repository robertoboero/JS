const todos = getSavedTodos();
const filters = {
  searchText: "",
  hideCompleted: false,
};

const addTodo = function () {};

renderTodos(todos, filters);

document.querySelector("#newTodo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.text.value,
    completed: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    document.querySelector(".lista").innerHTML = "";
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });

document.getElementById("filter-todo").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

/*IGNORE
-
.
.
*/

function removeP() {
  const ps = document.querySelectorAll("p");
  console.log(ps);
  ps.forEach((p, index) => {
    if (p.textContent.includes("was")) {
      p.remove();
    }
  });
}
function removeAllP() {
  const ps = document.querySelectorAll("p");
  console.log(ps);
  ps.forEach((p, index) => {
    p.remove();
  });
}

function showTodo() {
  removeAllP();
  todos.forEach((todo) => {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector(".lista").appendChild(p);
  });
}

function addP() {
  removeAllP();
  let unclompleted = 0;

  todos.forEach((t) => {
    const newP = document.createElement("p");
    if (!t.completed) {
      unclompleted++;
      newP.textContent = t.text;
      document.querySelector(".lista").appendChild(newP);
    }
  });
  document.querySelector("span").textContent =
    "Devi ancora svolgere " + unclompleted;
}

function addPArray() {
  removeAllP();
  const incompleteTodos = todos.filter((t) => !t.completed);
  incompleteTodos.forEach((t) => {
    const p = document.createElement("p");
    p.textContent = t.text;
    document.querySelector(".lista").appendChild(p);
  });
  document.querySelector("span").textContent =
    "Devi ancora svolgere " +
    incompleteTodos.length +
    (incompleteTodos.length == 1 ? " esercizio" : " esercizi");
}

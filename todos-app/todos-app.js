const todos = [
  {
    text: "Order cat food",
    completed: false,
  },
  {
    text: "Clean kitchen",
    completed: true,
  },
  {
    text: "Buy food",
    completed: true,
  },
  {
    text: "Do work",
    completed: false,
  },
  {
    text: "Exercise",
    completed: true,
  },
];
const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderNotes = function (todos, filter) {
  const filteredTodos = todos.filter(function (todo) {
    if (filter.hideCompleted) {
      return (
        todo.completed == false &&
        todo.text.toLowerCase().includes(filter.searchText.toLowerCase())
      );
    } else {
      return todo.text.toLowerCase().includes(filter.searchText.toLowerCase());
    }
  });

  document.querySelector(".lista").innerHTML = "";
  filteredTodos.forEach(function (filteredTodo) {
    let li = document.createElement("li");
    li.textContent = filteredTodo.text;
    document.querySelector(".lista").appendChild(li);
  });
};

const addTodo = function () {};

renderNotes(todos, filters);

document.querySelector("#newTodo").addEventListener("submit", function (e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false,
  });
  renderNotes(todos, filters);
  e.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    document.querySelector(".lista").innerHTML = "";
    filters.hideCompleted = e.target.checked;
    renderNotes(todos, filters);
  });

document.getElementById("filter-todo").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(todos, filters);
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

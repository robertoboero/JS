const getSavedTodos = function () {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON != null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getIncompleteTodos = function (filteredTodos) {
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  return incompleteTodos;
};

const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const toggleTodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

const renderTodos = function (todos, filter) {
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

  document
    .querySelector(".lista")
    .appendChild(generateSummaryDOM(getIncompleteTodos(todos)));

  filteredTodos.forEach(function (filteredTodo) {
    document.querySelector(".lista").appendChild(generateTodoDOM(filteredTodo));
  });
};

//Genera la lista dei Todo
const generateTodoDOM = function (filteredTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const button = document.createElement("button");
  li.setAttribute("id", filteredTodo.id);
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = filteredTodo.completed;
  button.textContent = "X";
  button.addEventListener("click", function () {
    removeTodo(filteredTodo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  checkbox.addEventListener("change", function (e) {
    toggleTodo(filteredTodo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  if (filteredTodo.text == "") {
    span.textContent = "Todo senza titolo";
    span.style.fontStyle = "italic";
  } else {
    span.textContent = filteredTodo.text;
  }
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);

  return li;
};

const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent =
    "Devi ancora svolgere " +
    incompleteTodos.length +
    (incompleteTodos.length == 1 ? " Esercizio" : " Esercizi");
  return summary;
};

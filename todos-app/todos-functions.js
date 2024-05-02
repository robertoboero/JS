"use strict";

const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  try {
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch {
    return [];
  }
};

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getIncompleteTodos = (filteredTodos) => {
  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
  return incompleteTodos;
};

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
};

const renderTodos = (todos, filter) => {
  const filteredTodos = todos.filter((todo) => {
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

  filteredTodos.forEach((filteredTodo) => {
    document.querySelector(".lista").appendChild(generateTodoDOM(filteredTodo));
  });
};

//Genera la lista dei Todo
const generateTodoDOM = (filteredTodo) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const checkbox = document.createElement("input");
  const button = document.createElement("button");
  li.setAttribute("id", filteredTodo.id);
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = filteredTodo.completed;
  button.textContent = "X";
  button.addEventListener("click", () => {
    removeTodo(filteredTodo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  checkbox.addEventListener("change", (e) => {
    toggleTodo(filteredTodo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  if (!filteredTodo.text) {
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

const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent =
    "Devi ancora svolgere " +
    incompleteTodos.length +
    (incompleteTodos.length == 1 ? " Esercizio" : " Esercizi");
  return summary;
};

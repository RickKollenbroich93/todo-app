import { parseJSONFromLocalStorage } from "./utils/localstorage.js";

const mes = "Hallo welt";

const menuButton = document.querySelector(".btnburger");

menuButton.onclick = () => sendAlert();

function sendAlert() {
  alert(mes);
}

const taskList = document.querySelector(".taskList");

const tasks = parseJSONFromLocalStorage("tasks", []);

const taskListItem = tasks.map((task) => createTaskListItem(task));

taskList.append(...taskListItem);

function createTaskListItem(task) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");

  label.className = "taskItem";

  input.className = "taskItem__checkbox";
  input.type = "checkbox";
  input.setAttribute("name", "tasks");
  input.checked = task.isDone;

  span.className = "taskItem__labelText";
  span.innerText = task.title;

  label.append(input, span);

  return label;
}

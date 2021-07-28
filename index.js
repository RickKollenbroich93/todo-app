const mes = "Hallo welt";

const menuButton = document.querySelector(".btnburger");

menuButton.onclick = () => sendAlert();

function sendAlert() {
  alert(mes);
}

const taskList = document.querySelector(".taskList");

const taskOne = createTaskListItem("Kaffee kochen");

taskList.append(taskOne);
//______________________TEST--FIELD________________________

// let msg = document.getElementById["task"];

function save() {
  let task = document.getElementById("task").value;

  window.localStorage.setItem(task);
}

//______________________TEST--FIELD________________________
function createTaskListItem(taskName) {
  const newTaskLabel = document.createElement("label");
  const newTaskInput = document.createElement("input");
  const newTaskItem = document.createElement("span");

  newTaskItem.innerText = taskName;

  newTaskLabel.className = "taskItem";
  newTaskInput.className = "taskItem__checkbox";
  newTaskInput.type = "checkbox";
  newTaskInput.setAttribute("name", "tasks");
  newTaskItem.className = "taskItem__labelText";

  newTaskLabel.append(newTaskInput, newTaskItem);

  return newTaskLabel;
}

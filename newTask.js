import { parseJSONFromLocalStorage } from "/utils/localstorage.js";
import { stringifyJSONToLocalStorage } from "/utils/localstorage.js";

const form = document.querySelector(".form");

form.onsubmit = function (event) {
  event.preventDefault();

  const newTask = { title: "", date: "", isDone: false };

  const checkDate = document.querySelector(".dateRadio:checked");
  const textInput = document.querySelector(".inputField");

  newTask.date = checkDate.value;
  newTask.title = textInput.value;

  let taskArray = [newTask];

  //   parseJSONFromLocalStorage("tasks", []);

  const oldTask = parseJSONFromLocalStorage("tasks", []);

  taskArray = oldTask;

  taskArray.push(newTask);

  stringifyJSONToLocalStorage("tasks", taskArray);

  window.location = "index.html";
};

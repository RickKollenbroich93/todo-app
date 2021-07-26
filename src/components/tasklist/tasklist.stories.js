import "./taskList.css";
import taskListRegular from "./taskList.html";

export default {
  title: "Components/TaskList",
  parameters: { layout: "centered" },
};

export const list = () => taskListRegular;

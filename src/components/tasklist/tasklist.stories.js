import "./tasklist.css";
import tasklist from "./tasklist.html";
import tasklistDone from "./tasklistdone.html";

export default {
  title: "Components/Tasklist",
  parameters: { layout: "centered" },
};

export const regular = () => tasklist;
export const done = () => tasklistDone;

import "./taskNavLink.css";
import tasknav from "./taskNavLink.html";
import tasknavactiv from "./taskNavLinkActiv.html";

export default {
  title: "Components/TaskNavLink",
  parameters: { layout: "fullscreen" },
};

export const taskDate = () => tasknav;
export const taskDateActive = () => tasknavactiv;

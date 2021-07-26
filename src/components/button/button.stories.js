import "./button.css";
import "./button-clock.css";
import "./button-burger.css";

import buttonLogo from "./button-add.html";
import burgerButton from "./button-burger.html";
import clockButton from "./button-clock.html";

export default {
  title: "Components/Button",
  parameters: { layout: "fullscreen" },
};

export const withLogo = () => buttonLogo;
export const burgerButtonComp = () => burgerButton;
export const clockButtonComp = () => clockButton;

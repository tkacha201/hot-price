import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let element = document.querySelectorAll(".hot");
  let text = element.innerHTML;
  element.innerHTML = text + " &#128293";
});

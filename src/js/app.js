import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let elements = document.querySelectorAll(".hot");
  elements.forEach((elem) => {
    let text = elem.innerHTML;
    elem.innerHTML = text + " &#128293";
  });
});

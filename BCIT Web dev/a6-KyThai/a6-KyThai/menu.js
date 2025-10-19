const menuButton = document.getElementById("menuButton");
const main = document.querySelector("main");

menuButton.addEventListener("click", () => {
  main.classList.toggle("open");
});
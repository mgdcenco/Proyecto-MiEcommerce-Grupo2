let darkModeBtn = document.querySelectorAll(".dark-mode-btn");
let body = document.querySelector("body");

darkModeBtn.forEach((elem) =>
  elem.addEventListener("click", () => {
    console.log("hola");
    body.classList.toggle("dark-mode--body");
  })
);

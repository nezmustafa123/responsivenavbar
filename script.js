const bar = document.querySelector(".fa-bars");
const menu = docuent.querySelector("menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
//if there is show menu class remove it if not add it

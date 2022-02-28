const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-items");

const arrowDown = document.querySelector(".arrow-down");
const mainSection = document.querySelector("main");

const showMenu = () => {
  menuButton.classList.toggle("active");
  menuItems.classList.toggle("active");
};

const goToMain = () => {
  let options = { behavior: "smooth", block: "start" };
  mainSection.scrollIntoView(options);
};

menuButton.addEventListener("click", showMenu);
arrowDown.addEventListener("click", goToMain);

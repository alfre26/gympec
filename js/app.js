const hamburger = document.getElementById("ham");
const sidebar = document.querySelector(".sidebar-bg");
const close = document.querySelector(".close");
const play = document.querySelector(".play");
const modal = document.querySelector(".modal-bg");

const anclas = document.querySelectorAll(".ancla");

play.addEventListener("click", () => {
  modal.classList.add("openModal");
});

modal.addEventListener("click", () => {
  modal.classList.remove("openModal");
});

hamburger.addEventListener("click", () => {
  sidebar.classList.add("openSidebar");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("openSidebar");
});

anclas.forEach((ancla) => {
  ancla.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//animation
AOS.init({
  duration: 1500,
});

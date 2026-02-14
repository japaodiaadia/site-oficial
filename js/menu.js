document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-mobile ul");

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
  });

  menu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    menu.classList.remove("active");
  });

});


function iniciarMenuMobile() {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu-list");

  if (!btn || !menu) {
    console.log("Menu não encontrado ainda");
    return;
  }

  btn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

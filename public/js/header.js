document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".headerinLeft");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("headerinLeftshow"); // 메뉴 보이기/숨기기 토글
  });
});

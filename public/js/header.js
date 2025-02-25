document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".headerinLeft");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("headerinLeftshow");
  });
});

const menualert = () => {
  Swal.fire({
    icon: "info",
    title: "준비 중입니다.",
    text: "조금만 기다려주세요.",
    customClass: {
      title: "swal-title",
      popup: "swal-popup",
    },
  });
};

// 탑버튼
document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.getElementById("topButton");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  topButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

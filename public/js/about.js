document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".instaText .scroll");
  const images = scrollContainer.querySelectorAll("img");

  function duplicateImages() {
    images.forEach((img) => {
      const clonedImage = img.cloneNode(true);
      scrollContainer.appendChild(clonedImage);
    });
  }
  duplicateImages();
});

window.addEventListener("scroll", function () {
  const images = document.querySelectorAll("img");

  images.forEach(function (image) {
    const rect = image.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      image.classList.add("scrollUp");
    } else {
      image.classList.remove("scrollUp");
    }
  });
});

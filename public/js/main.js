const productImages = document.querySelectorAll(".product-img");

productImages.forEach((img) => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute("data-hover-src");
  img.addEventListener("mouseenter", () => {
    img.src = hoverSrc;
  });

  img.addEventListener("mouseleave", () => {
    img.src = originalSrc;
  });
});

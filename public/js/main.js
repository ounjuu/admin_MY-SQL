const productImages = document.querySelectorAll(".productHoverImg");
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

document.querySelectorAll(".cateimgWrap").forEach((item) => {
  item.addEventListener("click", function () {
    const category = this.getAttribute("data-category");

    // 카테고리별 상품을 서버에서 받아오기
    if (category === "all") {
      fetch(`/products/main/all/${category}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("🟢 응답 받음:", data);
          updateProductList(data.data); // 상품 목록 업데이트
          console.log(data.data[0]);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      fetch(`/products/main/${category}`)
        .then((response) => response.json())
        .then((data) => {
          updateProductList(data.data);
        })
        .catch((error) => console.error("Error:", error));
    }
  });
});

// 상품 목록 업데이트 함수
function updateProductList(products) {
  const productWrap = document.querySelector(".productAll_Wrap");
  productWrap.innerHTML = ""; // 기존 상품 목록 비우기

  products.forEach((product) => {
    const productBox = document.createElement("div");
    productBox.classList.add("productInfoBox");
    const formattedPrice = parseInt(product.price).toLocaleString();

    productBox.innerHTML = `
      <div class="productInfoBox1">
        <a href="/products/detail/${product.id}">
          <div class="productInfo">
            <div class="productImgWrap">
              <img src="/public${product.image_url_1}" alt="Product Image" class="productHoverImg" data-hover-src="/public${product.image_url_2}"/>
            </div>
          </div>
        </a>
      </div>
      <div class="productInfoBox2">
        <a href="/products/detail/${product.id}">
          <div class="productInfo">
            <div class="productTextWrap">
              <div>${product.name}</div>
              <div>${formattedPrice}</div>
            </div>
          </div>
        </a>
      </div>
    `;

    productWrap.appendChild(productBox); // 새로운 상품 추가
    const productImages = document.querySelectorAll(".productHoverImg");
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
  });
}

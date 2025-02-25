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
          updateProductList(data.data);
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

// 스크롤 이벤트 감지
window.addEventListener("scroll", function () {
  const element = document.querySelector(".kikipopoanimation");

  // 스크롤이 일정 값 이상 내려갔을 때 글씨가 아래로 사라짐
  if (window.scrollY > 100) {
    // 예를 들어 100px 이상 스크롤 시
    element.classList.add("scrollDown");
  } else {
    element.classList.remove("scrollDown");
  }
});

// alert
const menuclick = () => {
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

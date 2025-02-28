function quantitychange(cartItemId, newQuantity, pricePerItem, product_id) {
  axios
    .post("/products/cart/update", {
      cartItemId: Number(cartItemId),
      quantity: Number(newQuantity),
      product_id: Number(product_id),
    })
    .then((response) => {
      if (response.data.success) {
        const newTotalPrice = pricePerItem * newQuantity;
        updateTotalPrice(cartItemId, newTotalPrice);
        window.location.reload();
      } else {
        alert("수량 변경 실패");
      }
    })
    .catch((error) => {
      console.error("수량 변경 요청 실패:", error);
    });
}

function updateTotalPrice(cartItemId, newTotalPrice) {
  const priceElement = document.querySelector(`#price-${cartItemId}`);
  if (priceElement) {
    priceElement.textContent = `${newTotalPrice} 원`;
  }
}

// 장바구니 아이템 하나 삭제
const deleteProduct = (id) => {
  axios({
    method: "delete",
    url: `/products/cart/delete/${id}`,
  })
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "info",
          title: "삭제 성공",
          text: "해당 상품이 삭제되었습니다.",
          customClass: {
            title: "swal-title",
            popup: "swal-popup",
          },
        }).then(() => {
          window.location.reload();
        });
      } else {
        alert("아이템 삭제에 실패했습니다.");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

// 장바구니 비우기, 주문하기 버튼
const cartOutOrderBtn = document.querySelector(".cartOutOrderBtn");
cartOutOrderBtn.innerHTML = `<div class="cartOutBtn" onclick="deleteAllProducts()">장바구니 비우기</div>
                            <div class="cartOrderBtn" onclick="orderAlert()">주문하기</div>`;

//장바구니 전체 삭제
const deleteAllProducts = () => {
  axios({
    method: "delete",
    url: "/products/cart/deleteAll",
  })
    .then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "info",
          title: "전체 삭제 성공",
          text: "장바구니의 모든 상품이 삭제되었습니다.",
          customClass: {
            title: "swal-title",
            popup: "swal-popup",
          },
        }).then(() => {
          window.location.reload();
        });
      } else {
        alert("장바구니 전체 삭제에 실패했습니다.");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

const orderAlert = () => {
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

// cart 데이터 가져오기
const cartItemsElement = document.getElementById("cartItems");
const cartItems = JSON.parse(cartItemsElement.getAttribute("data-items"));

const updateCartUI = async () => {
  const cart_wrap = document.querySelector(".cart_wrap");
  const cartOutBtn = document.querySelector(".cartOutBtn");
  const cartOrderBtn = document.querySelector(".cartOrderBtn");

  if (Array.isArray(cartItems) && cartItems.length < 1) {
    cart_wrap.innerHTML = `
      <div class="emptyWrap">
        <img src="/public/img/emptyalert.png" class="empty"/>
      </div>
    `;
    cartOutBtn.style.display = "none";
    cartOrderBtn.style.display = "none";
  } else {
    cartOutBtn.style.display = "block";
    cartOrderBtn.style.display = "block";
    cart_wrap.innerHTML = "";
  }
};
// 페이지 로드 시 장바구니 UI 업데이트
window.onload = () => {
  updateCartUI();
};

const quantityInputs = document.querySelectorAll(".quantity-input");
const productPrices2 = document.querySelectorAll(".productPrices");

let totalPrice = 0;
let totalQuantity = 0;

quantityInputs.forEach((input, index) => {
  const quantity = parseInt(input.value); // 수량
  const priceText = productPrices2[index].innerText || "0"; // 가격 (text 가져오기)
  const price = parseInt(priceText.replace(/[^0-9]/g, "")) || 0; // 숫자만 추출
  totalQuantity += quantity;
  totalPrice += price * quantity;
});

let shippingCost = totalPrice >= 100000 ? 0 : 3000;
const grandTotal = totalPrice + shippingCost;

// 총 금액 나타내기
// const cartPrice = document.querySelector(".cartPrice");
// cartPrice.innerHTML = `<div class="cartAllPrice">
// <div class="cartAllCount"><p>총 주문 상품 개</p></div>
// <div class="cartAllOrderPrice">
// <div>
// <p>원 + 원 = 원</p>
// <p>상품금액 + 배송비 = 총 주문 금액</p>
// </div>
// </div>
// </div>`;

const cartPrice = document.querySelector(".cartPrice");
cartPrice.innerHTML = `
  <div class="cartAllPrice">
    <div class="cartAllCount">
      <p>총 주문 상품 개수: ${totalQuantity}개</p>
    </div>
    <div class="cartAllOrderPrice">
      <div>
        <p>상품금액: ${totalPrice.toLocaleString()}원</p>
        <p>배송비: ${shippingCost.toLocaleString()}원</p>
        <p><b>총 주문 금액: ${grandTotal.toLocaleString()}원</b></p>
      </div>
    </div>
  </div>
`;

console.log("총 금액:", grandTotal);

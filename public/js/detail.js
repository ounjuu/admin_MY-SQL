// const cartalert = () => {
//   Swal.fire({
//     icon: "info",
//     title: "장바구니 기능은 준비 중입니다.",
//     text: "조금만 기다려주세요.",
//   });
// };

const loginalert = () => {
  Swal.fire({
    icon: "info",
    title: "로그인이 필요합니다.",
    text: "로그인 기능은 준비 중입니다. 조금만 기다려주세요.",
  });
};

// 장바구니 담기 전 수량
const priceElement = document.getElementById("productPrice");
const quantityElement = document.getElementById("quantity");
const totalPriceElement = document.getElementById("totalPrice");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");

const price = parseInt(priceElement.innerText.replace(/[^\d]/g, ""));

function updateTotalPrice() {
  const quantity = parseInt(quantityElement.value);
  totalPriceElement.innerText = (price * quantity).toLocaleString() + " 원";
}

plusButton.addEventListener("click", () => {
  let quantity = parseInt(quantityElement.value);
  quantity++;
  quantityElement.value = quantity;
  updateTotalPrice();
});

minusButton.addEventListener("click", () => {
  let quantity = parseInt(quantityElement.value);
  if (quantity > 1) {
    quantity--;
    quantityElement.value = quantity;
    updateTotalPrice();
  }
});

updateTotalPrice();

// 장바구니 금액 가져오기
const cartIn = (id) => {
  const quantity = document.querySelector("#quantity").value;
  axios
    .post("/products/add-to-cart", {
      product_id: id,
      quantity: quantity,
    })
    .then((res) => {
      if (res.data.success) {
        Swal.fire({
          title: "상품이 장바구니에 추가되었습니다!",
          text: "장바구니 페이지로 이동하시겠습니까?",
          icon: "success",
          showCancelButton: true,
          confirmButtonText: "네",
          cancelButtonText: "아니오",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/products/cart";
          }
        });
      } else {
        Swal.fire({
          title: "장바구니 추가 실패",
          text: res.data.message,
          icon: "error",
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("네트워크 오류 또는 서버 문제 발생!");
    });
};

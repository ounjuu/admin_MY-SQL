function quantitychange(cartItemId, newQuantity) {
  axios
    .post("/products/cart/update", {
      cartItemId: Number(cartItemId),
      quantity: Number(newQuantity),
    })
    .then((response) => {
      if (response.data.success) {
        console.log("수량 변경 성공!");
        updateTotalPrice(cartItemId, response.data.newTotalPrice);
      } else {
        alert("수량 변경 실패");
      }
    })
    .catch((error) => {
      console.error("수량 변경 요청 실패:", error);
    });
}

function updateTotalPrice(productId, newTotalPrice) {
  const row = document.querySelector(`[data-product-id='${productId}']`);
  if (row) {
    row.querySelector(".total-price").innerText =
      newTotalPrice.toLocaleString() + " 원";
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
        alert("삭제 성공");
        window.location.reload();
      } else {
        alert("아이템 삭제에 실패했습니다.");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

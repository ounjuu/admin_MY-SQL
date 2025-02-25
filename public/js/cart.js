function quantitychange(productId, newQuantity) {
  console.log(newQuantity, "new?");
  axios
    .post("/products/cart/update", {
      product_id: productId,
      quantity: newQuantity,
    })
    .then((response) => {
      if (response.data.success) {
        console.log("수량 변경 성공!");
        updateTotalPrice(productId, response.data.newTotalPrice);
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

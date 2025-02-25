function quantitychange(cartItemId, newQuantity, pricePerItem, product_id) {
  axios
    .post("/products/cart/update", {
      cartItemId: Number(cartItemId),
      quantity: Number(newQuantity),
      product_id: Number(product_id),
    })
    .then((response) => {
      if (response.data.success) {
        console.log("수량 변경 성공!");
        const newTotalPrice = pricePerItem * newQuantity;
        updateTotalPrice(cartItemId, newTotalPrice);
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
        }).then(() => {
          window.location.reload(); // Swal 알림이 닫힌 후 새로 고침
        });
      } else {
        alert("아이템 삭제에 실패했습니다.");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

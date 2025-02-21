const createData = (event) => {
  event.preventDefault();
  const form = document.forms["formName"];
  const data = new FormData();
  data.append("product_id", form["productId"].value);
  data.append("name", form["productName"].value);
  data.append("price", form["price"].value);
  data.append("description", form["productContent"].value);
  data.append("category", form["productType"].value);

  const images = form["productImage"].files;
  if (images.length > 0) data.append("productImage", images[0]); // 첫 번째 이미지
  if (images.length > 1) data.append("productImage", images[1]); // 두 번째 이미지

  //   if (!product_id || !name || !comment) {
  //     alert("모든 값을 입력해주세요!");
  //     return;
  //   }
  // ✅ FormData 확인 (콘솔 출력)
  console.log("📌 전송할 데이터:");
  for (const pair of data.entries()) {
    console.log(pair[0], ":", pair[1]);
  }
  axios({
    method: "post",
    url: "/products/post/product",
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      alert("등록성공");
      window.location.href = "/";
    })
    .catch((e) => {
      console.log(e);
    });
};

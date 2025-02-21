const updateForm = (id) => {
  const form = document.forms["updateData"];
  console.log(id, "id??");
  console.log(form["productName"].value, "writejs?");
  const data = new FormData();
  data.append("id", id);
  data.append("name", form["productName"].value);
  data.append("price", form["price"].value);
  data.append("description", form["productContent"].value);
  data.append("category", form["productType"].value);

  const images = form["productImage"].files;
  if (images.length > 0) data.append("productImage", images[0]); // 첫 번째 이미지
  if (images.length > 1) data.append("productImage", images[1]); // 두 번째 이미지

  axios({
    method: "put",
    url: `/products/update/${id}`,
    data: data,
  })
    .then((res) => {
      alert("수정성공");
      window.location.href = "/products";
    })
    .catch((e) => {
      console.log(e);
    });
};

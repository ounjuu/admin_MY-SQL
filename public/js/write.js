// 파일 선택 시 파일명을 표시하고 미리보기 업데이트
document.getElementById("productImage").addEventListener("change", function () {
  const fileInput = this;
  const files = fileInput.files;

  if (!files.length) {
    document.getElementById("imageupText").innerText = "선택된 파일 없음";
    return;
  }

  //   const formData = new FormData();
  //   for (let file of files) {
  //     formData.append("productImage", file);
  //   }

  // 선택한 파일을 미리보기
  document.getElementById("preview1").style.display = "none";
  document.getElementById("preview2").style.display = "none";

  Array.from(files).forEach((file, index) => {
    const imgPreview = document.getElementById(`preview${index + 1}`);
    if (imgPreview) {
      imgPreview.src = URL.createObjectURL(file);
      imgPreview.style.display = "block";
    }
  });
});

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

// 이미지 불러오기 버튼 클릭 시 파일 선택 창 열기
document
  .getElementById("uploadDiv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("productImage").click();
  });

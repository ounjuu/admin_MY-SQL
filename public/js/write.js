document.getElementById("productImage").addEventListener("change", function () {
  const fileInput = this;
  const files = fileInput.files;

  if (!files.length) {
    document.getElementById("imageupText").innerText = "선택된 파일 없음";
    document.getElementById("preview1").style.display = "none";
    document.getElementById("preview2").style.display = "none";
    document.getElementById("imgpreviewbox1").src = "";
    document.getElementById("imgpreviewbox2").src = "";
    return;
  }

  document.getElementById("preview1").style.display = "none";
  document.getElementById("preview2").style.display = "none";

  Array.from(files).forEach((file, index) => {
    const imgPreview = document.getElementById(`preview${index + 1}`);
    if (imgPreview) {
      imgPreview.src = URL.createObjectURL(file);
      imgPreview.style.display = "block";
    }
  });

  // 파일이 변경되었음을 표시 (새로 선택된 경우)
  fileInput.setAttribute("data-changed", "true");
});

const updateForm = (id) => {
  const form = document.forms["updateData"];
  const data = new FormData();
  data.append("id", id);
  data.append("name", form["productName"].value);
  data.append("price", form["price"].value);
  data.append("description", form["productContent"].value);
  data.append("category", form["productType"].value);

  const fileInput = form["productImage"];
  const images = fileInput.files;

  if (images.length > 0) {
    data.append("productImage", images[0]);
    if (images.length > 1) data.append("productImage", images[1]);
  } else {
    data.append("keepExistingImages", "true");
  }

  axios({
    method: "put",
    url: `/products/update/${id}`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("수정 성공");
        window.location.href = "/products";
      } else {
        alert("수정 실패. 다시 시도해주세요.");
      }
    })
    .catch((e) => {
      console.error(e);
      alert("오류가 발생했습니다.");
      window.location.href = "/products";
    });
};

// 이미지 불러오기 버튼 클릭 시 파일 선택 창 열기
document
  .getElementById("uploadDiv")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("productImage").click();
  });

//테이블 헤드 생성
const theadWrap = document.querySelector(".theadWrap");
theadWrap.innerHTML = `<thead>
        <tr>
            <th>이미지</th>
            <th>상품코드</th>
            <th>상품명</th>
            <th>판매가</th>
            <th>상품상세</th>
            <th>관리</th>
            <th>삭제</th>
        </tr>
      </thead>`;

// 버튼

// 이미지 불러오기 버튼 클릭 시 파일 선택 창 열기
document.getElementById("uploadDiv").addEventListener("click", function () {
  document.getElementById("productImage").click();
});

// 파일 선택 시 파일명을 표시하고 미리보기 업데이트
document.getElementById("productImage").addEventListener("change", function () {
  const fileInput = this;
  const files = fileInput.files;

  if (!files.length) {
    document.getElementById("fileName").innerText = "선택된 파일 없음";
    return;
  }

  // 파일명 표시 (여러 개일 경우 , 로 구분)
  const fileNames = Array.from(files)
    .map((file) => file.name)
    .join(", ");
  document.getElementById("fileName").innerText = fileNames;

  const formData = new FormData();
  for (let file of files) {
    formData.append("productImage", file);
  }

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

  // 서버 업로드 요청
  axios
    .post("/products/nowimg", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((res) => {
      console.log("업로드된 이미지 URL:", res.data);
      if (res.data.productImage) {
        const imageUrls = res.data.productImage; // 서버에서 받은 이미지 URL 배열

        if (imageUrls[0])
          document.getElementById("preview1").src = "/public" + imageUrls[0];
        if (imageUrls[1])
          document.getElementById("preview2").src = "/public" + imageUrls[1];

        document.getElementById("preview1").style.display = "block";
        document.getElementById("preview2").style.display = "block";
      }
    })
    .catch((error) => console.error("업로드 실패:", error));
});

//데이터 저장
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
      window.location.href = "/products";
    })
    .catch((e) => {
      console.log(e);
    });
};

// 데이터 삭제
const deleteProduct = (id) => {
  axios({
    method: "delete",
    url: `/products/delete/${id}`,
  })
    .then((res) => {
      alert("삭제성공");
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

// 데이터 수정
const updatePage = (id) => {
  window.location.href = `/products/productWrite/${id}`;
};

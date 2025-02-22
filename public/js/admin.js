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
    document.getElementById("imageupText").innerText = "선택된 파일 없음";
    return;
  }

  // // 파일명 표시 (여러 개일 경우 , 로 구분)
  // const fileNames = Array.from(files)
  //   .map((file) => file.name)
  //   .join(", ");
  // document.getElementById("imageupText").innerText = fileNames;

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

// 데이터 검사
let nameCheck = false;
let idCheck = false;
let priceCheck = false;
let contentCheck = false;
let imageAdd = false;
let typecheck = false;
let firstidCheck = false;
let product_data = [];

// 이름 실시간 검사
const nameonInput = () => {
  let namedataup = document.querySelector("#productName").value;
  if (namedataup.length < 1) {
    document.querySelector(".nameText").innerText = "상품명을 입력하세요.";
    nameCheck = false;
  } else {
    document.querySelector(".nameText").innerText = "";
    nameCheck = true;
  }
  validCheck();
};

// 가격 실시간 검사
const priceonInput = () => {
  let pricedataup = document.querySelector("#price").value;
  if (pricedataup.length < 1) {
    document.querySelector(".priceText").innerText = "가격을 입력하세요.";
    priceCheck = false;
  } else {
    document.querySelector(".priceText").innerText = "";
    priceCheck = true;
  }
  validCheck();
};

// 상품 상세설명 실시간 검사
const contentonInput = () => {
  let contentdataup = document.querySelector("#productContent").value;
  if (contentdataup.length < 1) {
    document.querySelector(".contentText").innerText =
      "상품의 설명을 입력하세요.";
    contentCheck = false;
  } else {
    document.querySelector(".contentText").innerText = "";
    contentCheck = true;
  }
  validCheck();
};

// ID 실시간 검사
const idonInput = () => {
  let productId = document.querySelector("#productId").value;
  if (productId.length < 1) {
    document.querySelector(".idText").style.color = "red";
    document.querySelector(".idText").innerText =
      "등록할 상품의 코드를 숫자로 입력하세요.";

    idCheck = false;
  } else {
    document.querySelector(".idText").innerText = "";
    idCheck = true;
  }
  validCheck();
};

//이미지 onchange
const imageonChange = () => {
  let productImage = document.querySelector("#productImage").value;
  if (productImage.length < 1) {
    document.querySelector(".imageupText").innerText = "이미지를 등록하세요.";
    document.querySelector("#preview1").src = "";
    document.querySelector("#preview2").src = "";
    document.querySelector("#preview1").style.display = "none";
    document.querySelector("#preview2").style.display = "none";
    document.getElementById("imgpreviewbox1").style.border = "solid 1px #ccc";
    document.getElementById("imgpreviewbox2").style.border = "solid 1px #ccc";
    imageAdd = false;
  } else {
    document.querySelector(".imageupText").innerText = "";
    imageAdd = true;
  }
  validCheck();
};

// 타입 검사
document.getElementById("typeSelect").addEventListener("change", function () {
  const selectedValue = this.value;
  if (selectedValue === "") {
    document.querySelector(".typeText").style.color = "red";
    document.querySelector(".typeText").innerText =
      "등록할 상품의 타입을 선택하세요.";
    typecheck = false;
  } else {
    typecheck = true;
    document.querySelector(".typeText").innerText = "";
  }
  validCheck();
});

// 아이디 중복 검사 버튼 클릭 시 axios 서버 확인
const productId = document.querySelector("#productId");
const idCheckBtn = document.querySelector(".idCheckBtn");
const idText = document.querySelector(".idText");
idCheckBtn.addEventListener("click", () => {
  console.log(productId.value, "productId.value???");
  let idData = { id: productId.value };
  axios({
    method: "post",
    url: "/products/idcheck",
    data: idData,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.data !== "중복입니다.") {
        // 중복되지 않은 경우
        idText.innerText = "사용 가능한 상품 코드입니다.";
        idText.style.color = "green";
      } else {
        // 중복된 경우
        idText.innerText = "중복입니다. 다른 상품 코드를 입력해주세요.";
        idText.style.color = "red";
      }
    })
    .catch((error) => {
      // 네트워크 오류나 서버 에러 처리
      idText.innerHTML = "서버에 연결할 수 없습니다.";
      idText.style.color = "red";
      firstidCheck = false;
      validCheck();
    });
});

// 유효성 검사
let saveBtn = document.querySelector("#saveBtn");
function validCheck() {
  if (
    nameCheck === true &&
    idCheck === true &&
    priceCheck === true &&
    contentCheck === true &&
    imageAdd === true &&
    typecheck === true
  ) {
    saveBtn.disabled = false;
  } else {
    saveBtn.disabled = true;
  }
}

// 초기화 함수
function resetForm() {
  // 텍스트 초기화
  document.querySelector(".nameText").innerText = "";
  document.querySelector(".priceText").innerText = "";
  document.querySelector(".contentText").innerText = "";
  document.querySelector(".idText").innerText = "";
  document.querySelector(".imageupText").innerText = "";
  document.querySelector("#preview").src = "";
  document.querySelector("#preview").style.display = "none";
  document.getElementById("imgpreviewbox1").style.border = "none";
  document.getElementById("imgpreviewbox2").style.border = "none";
  document.querySelector(".typeText").innerText = "";

  // 체크 변수 초기화
  nameCheck = false;
  priceCheck = false;
  contentCheck = false;
  idCheck = false;
  imageAdd = false;
  typecheck = false;
  firstidCheck = false;
}

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

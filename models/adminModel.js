const mysql = require("mysql2/promise");
//DB 연결
const pool = mysql.createPool({
  host: "localhost", //DB가 설치된 호스트 ip 주소
  user: "root", // DB 접속 유저 이름
  password: "1234", // DB 접속 비밀번호
  database: "site", // DB 이름
});

// 모든 제품 가져오기
const allproduct = async () => {
  const query = "SELECT * FROM products";
  const [rows] = await pool.query(query);
  console.log(rows);
  return rows;
};

//등록하기
const postData = async (data, files) => {
  console.log("Received product_id:", data); // 값 확인
  console.log("Uploaded files:", files); // 업로드된 파일 확인
  try {
    const productImages = [];

    // 이미지가 업로드되었으면, 이미지 경로를 배열에 넣음
    if (files && files.length > 0) {
      files.forEach((file) => {
        productImages.push("/uploads/" + file.filename); // 파일 경로 생성
      });
    }

    const query =
      "INSERT INTO products (product_id, name, price, description, category, image_url_1, image_url_2) VALUES (?, ?, ?, ?, ?, ?, ?)";
    await pool.query(query, [
      data.product_id,
      data.name,
      data.price,
      data.description,
      data.category,
      productImages[0] || "",
      productImages[1] || "",
    ]);
    return "데이터가 성공적으로 등록되었습니다.";
  } catch (e) {
    console.log("error", e);
    throw new Error("데이터 등록 실패");
  }
};

// 등록하기(폼)
// const postData = async (data) => {
//   try {
//     const query =
//       "INSERT INTO products (product_id, name, price, description, category, image_url_1, image_url_2) VALUES (?, ?, ?, ?, ?, ?, ?)";
//     await pool.query(query, [
//       data.product_id,
//       data.productName,
//       data.price,
//       data.description,
//       data.category,
//       data.image1,
//       data.image2,
//     ]);
//     return "데이터가 성공적으로 등록되었습니다.";
//   } catch (e) {
//     console.log("error", e);
//     throw new Error("데이터 등록 실패");
//   }
// };

module.exports = { allproduct, postData };

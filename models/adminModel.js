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
  return rows;
};

// 제품 하나 가져오기
const getOneData = async (userId) => {
  const query = `SELECT * FROM products WHERE id = ${userId} `;
  const [rows] = await pool.query(query);
  return rows;
};

// 카테고리별 상품 가져오기
const getProductByCategory = async (category) => {
  const query = `SELECT * FROM products WHERE category = '${category}'`;
  const [rows] = await pool.query(query);
  return rows;
};

// all 상품 가져오기
const getProductByAll = async (category) => {
  const query = `SELECT * FROM products WHERE category != '${category}'`;
  const [rows] = await pool.query(query);
  return rows;
};

//등록하기
const postData = async (data, files) => {
  try {
    const productImages = [];
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

// 해당 아이디를 가진 모든 데이터 삭제
const deleteRow = async (id) => {
  const query = `DELETE FROM products WHERE id = ${Number(id)}`;
  try {
    await pool.query(query, [id]);
  } catch (e) {
    console.log("삭제실패");
  }
};

// 해당 아이디를 가진 데이터 수정
const updateRow = async (data, files) => {
  try {
    let productImages = [];

    const [existingProduct] = await pool.query(
      "SELECT image_url_1, image_url_2 FROM products WHERE id = ?",
      [data.id]
    );

    if (!existingProduct || existingProduct.length === 0) {
      throw new Error("해당 ID의 상품을 찾을 수 없습니다.");
    }

    if (files && files.length === 1) {
      productImages = ["/uploads/" + files[0].filename, ""];
    } else if (files && files.length === 2) {
      productImages = [
        "/uploads/" + files[0].filename,
        "/uploads/" + files[1].filename,
      ];
    } else {
      productImages = [
        existingProduct[0].image_url_1,
        existingProduct[0].image_url_2,
      ];
    }

    const isDataChanged =
      data.name !== existingProduct[0].name ||
      data.price !== existingProduct[0].price ||
      data.description !== existingProduct[0].description ||
      data.category !== existingProduct[0].category ||
      productImages[0] !== existingProduct[0].image_url_1 ||
      productImages[1] !== existingProduct[0].image_url_2;

    if (!isDataChanged) {
      return null;
    }

    let query = `UPDATE products SET name = ?, price = ?, description = ?, category = ?, image_url_1 = ?, image_url_2 = ? WHERE id = ?`;

    await pool.query(query, [
      data.name,
      data.price,
      data.description,
      data.category,
      productImages[0] || "",
      productImages[1] || "",
      data.id,
    ]);

    return true;
  } catch (e) {
    console.error(e);
    throw new Error("데이터 수정 실패");
  }
};

// 상품 ID 중복 체크
// const checkProductId = (id, callback) => {
//   const query = "SELECT * FROM products WHERE product_id = ?";
//   pool.query(query, [id], (err, result) => {
//     if (err) {
//       return callback(err, null);
//     }
//     callback(null, result.length > 0);
//   });
// };

const checkProductId = async (id) => {
  const query = `SELECT * FROM products WHERE product_id = ${id} `;

  const [rows] = await pool.query(query);

  if (rows.length > 0) {
    return "중복입니다.";
  } else {
    return "사용가능합니다.";
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

module.exports = {
  allproduct,
  postData,
  deleteRow,
  updateRow,
  getOneData,
  checkProductId,
  getProductByCategory,
  getProductByAll,
};

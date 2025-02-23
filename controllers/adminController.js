const adminModel = require("../models/adminModel");

// 전체 상품 가져오는 컨트롤러
const getallProduct = async (req, res) => {
  const data = await adminModel.allproduct();
  res.render("products/index", { data });
};
// 메인으로도 전달
const allProduct = async (req, res) => {
  const data = await adminModel.allproduct();
  data.forEach((product) => {
    product.price = parseInt(product.price).toLocaleString() + "원"; // Format price and add "원"
  });
  res.render("products/main", { data });
};

//하나
const productOne = async (req, res) => {
  const data = await adminModel.getOneData(req.params.id);
  res.render("products/detail", { data });
};

// 등록
const createpost = (req, res) => {
  const createData = adminModel.postData(req.body, req.files);
  res.send("200");
};

// 해당 아이디 삭제
const deleteData = async (req, res) => {
  await adminModel.deleteRow(req.params.id);
  res.send("200");
};

// 수정 페이지 이동
const moveWrite = async (req, res) => {
  const data = await adminModel.getOneData(req.params.id);
  await res.render("products/productWrite", { data });
};

// 해당 아이템 수정
const dataUpdate = async (req, res) => {
  const fixData = await adminModel.updateRow(req.body, req.files);
  res.send("200");
};

// 상품 ID 중복 검사 컨트롤러
const checkProductId = async (req, res) => {
  const { id } = req.body;

  // 상품 ID가 제공되지 않았으면 400 오류 반환
  if (!id) {
    return res.status(400).json({ error: "상품 ID가 제공되지 않았습니다." });
  }
  //  받은 ID 확인
  // 모델에서 중복 확인
  const data = await adminModel.checkProductId(id);
  res.send(data);
};

// 상품 추가 컨트롤러(폼)
// const addProduct = async (req, res) => {
//   console.log(req.files); // 파일 확인
//   console.log(req.body, "바디에 이름 머야"); // 파일 확인
//   if (!req.files || req.files.length === 0) {
//     return res.status(400).send("이미지를 업로드해야 합니다.");
//   }
//   const productId = req.body.productId;
//   const productName = req.body.productName;
//   const description = req.body.productContent;
//   const price = req.body.price;
//   const category = req.body.productType;
//   const image1 = req.files[0] ? `/uploads/${req.files[0].filename}` : null;
//   const image2 = req.files[1] ? `/uploads/${req.files[1].filename}` : null;
//   console.log(description, "description????"); // 파일 확인
//   console.log(category, "category????"); // 파일 확인
//   try {
//     const productData = {
//       product_id: productId,
//       productName: productName,
//       price: price,
//       description: description,
//       category: category,
//       image1: image1,
//       image2: image2,
//     };
//     const result = await adminModel.postData(productData);
//   } catch (error) {
//     res.status(500).send("상품 등록 중 오류 발생");
//   }
// };

module.exports = {
  getallProduct,
  createpost,
  deleteData,
  dataUpdate,
  moveWrite,
  productOne,
  allProduct,
  checkProductId,
};

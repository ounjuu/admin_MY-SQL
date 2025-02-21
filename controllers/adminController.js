const adminModel = require("../models/adminModel");

// 전체 상품 가져오는 컨트롤러
const getallProduct = async (req, res) => {
  const data = await adminModel.allproduct();
  res.render("index", { data });
};

// 등록
const createpost = (req, res) => {
  const createData = adminModel.postData(req.body, req.files);
  res.send("200");
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

module.exports = { getallProduct, createpost };

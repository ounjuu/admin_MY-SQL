const express = require("express");
const multer = require("multer");
const path = require("path");
const adminController = require("../controllers/adminController");

const router = express.Router();

// Multer 설정 (업로드 폴더 지정)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp/; // 허용되는 이미지 파일 타입
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimeType = fileTypes.test(file.mimetype);
    if (extname && mimeType) {
      return cb(null, true);
    } else {
      cb("Error: 이미지 파일만 업로드 가능합니다.");
    }
  },
});

router.get("/", adminController.getallProduct);
router.get("/main", adminController.allProduct);
router.get("/productWrite/:id", adminController.moveWrite);
router.get("/detail/:id", adminController.productOne);
// router.post("/post/product", adminController.createpost);

router.get("/main/:category", adminController.productsByCategory);
router.get("/main/all/:category", adminController.getAllProductAPI);
router.get("/cart/all", adminController.getCartAllProduct);
router.get("/cart", adminController.getcartProduct);

router.post(
  "/post/product",
  upload.array("productImage", 2),
  adminController.createpost
);

router.post("/add-to-cart", adminController.createCartData);
router.post("/cart/update", adminController.updateCartQuantity);

// toast editor 이미지
// router.post("/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "파일 업로드 실패" });
//   }
//   const imageUrl = `/uploads/${req.file.filename}`;
//   res.json({ imageUrl });
// });

router.post("/idcheck", adminController.checkProductId);

router.put(
  "/update/:id",
  upload.array("productImage", 2),
  adminController.dataUpdate
);

router.delete("/delete/:id", adminController.deleteData);
router.delete("/cart/delete/:id", adminController.deleteCartData);
module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const adminController = require("../controllers/adminController");

const router = express.Router();

// Multer 설정 (업로드 폴더 지정)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); // 업로드된 파일이 저장될 폴더
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 고유한 파일명
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/; // 허용되는 이미지 파일 타입
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

router.get("/productWrite/:id", adminController.moveWrite);
// router.post("/post/product", adminController.createpost);

router.post(
  "/post/product",
  upload.array("productImage", 2), // 최대 2개의 파일을 받을 수 있음
  adminController.createpost // 파일과 함께 데이터를 처리하는 컨트롤러
);

//update
router.put(
  "/update/:id",
  upload.array("productImage", 2),
  adminController.dataUpdate
);

// delelte
router.delete("/delete/:id", adminController.deleteData);

module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const adminController = require("../controllers/adminController");

const router = express.Router();

// Multer 설정 (업로드 폴더 지정)
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/allProduct", adminController.getallProduct);

router.post(
  "/upload",
  upload.array("productImage", 2),
  adminController.addProduct
);

module.exports = router;

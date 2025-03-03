const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const multer = require("multer");

// multer 설정 (업로드 폴더 및 파일 저장 방식)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명 중복 방지
  },
});

const upload = multer({ storage: storage }); // multer 인스턴스 생성

// 라우팅 파일 불러오기
const adminRouters = require("./routes/adminRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 라우터
app.use("/products", adminRouters);
// 정적 파일 제공
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.get("/", (req, res) => {
  res.render("index");
});
// EJS 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.post("/products/nowimg", upload.array("productImage", 2), (req, res) => {
  const productImage = req.files.map((file) => "/uploads/" + file.filename);

  res.json({ productImage });
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

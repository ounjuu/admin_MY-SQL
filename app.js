const express = require("express");
const path = require("path");
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     //원본 파일에서 확장자 추출
//     const ext = path.extname(file.originalname);

//     //파일명에 타임스탬프와 확장자를 포함시켜서 저장함
//     cb(null, Date.now() + ext); //타임스탬프 + 확장자
//   },
// });
// 가져오는 것 최상단에 있어야 함. > use > get

// const upload = multer({ storage: storage });

const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const adminRouters = require("./routes/adminRoutes");

app.use(express.urlencoded({ extended: true }));
// json 형식으로 받을 것임
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🔹 정적 파일 제공 (업로드된 이미지 접근 가능)

// 라우터예시 /users 경로에 대한 라우팅 처리
app.use("/products", adminRouters);

// set이 get 위에 와야 함
app.set("view engine", "ejs"); // ejs 파일 html로 변경해줌
app.set("views", "./views"); // ejs 파일 위치 설정

// post 요청은 req.body
app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// 라우팅 파일 불러오기
const adminRouters = require("./routes/adminRoutes");

app.use(express.urlencoded({ extended: true }));
// json 형식으로 받을 것임
app.use(express.json());

// 정적 파일 제공
app.use("/public", express.static(path.join(__dirname, "public"))); // public 폴더를 /public으로 제공
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // uploads 폴더를 /uploads로 제공

// EJS 설정
app.set("view engine", "ejs"); // ejs 파일 html로 변경
app.set("views", path.join(__dirname, "views")); // ejs 파일 위치 설정

// 라우터
app.use("/products", adminRouters);

// 404 에러 페이지 처리
app.use((req, res) => {
  res.status(404).render("404"); // 404.ejs 파일 렌더링
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

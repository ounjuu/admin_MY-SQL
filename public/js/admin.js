const createData = () => {
  // 🔹 input 값 가져오기
  const userid = document.getElementById("userid").value;
  const name = document.getElementById("userName").value;
  const comment = document.getElementById("comment").value;

  // 🔹 빈 값 체크 (유효성 검사)
  if (!userid || !name || !comment) {
    alert("모든 값을 입력해주세요!");
    return;
  }

  axios({
    method: "post",
    url: "visitor/post/test",
    data: { userid, name, comment },
  })
    .then((res) => {
      alert("등록성공");
      console.log(res);
      window.location.reload();
    })
    .catch((e) => {
      console.log(e);
    });
};

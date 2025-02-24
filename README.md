
# 🔷: KIKIPOPO 상품 페이지 & 관리자 페이지 README - DB(MY SQL)
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b626d391-b400-4fdc-8ef5-ec8c2d7e8f72" /></div>

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b1366d62-2919-4f12-83d3-6b8bfb87a0ed" /></div>

## :page_facing_up: 프로젝트 소개
1. <b>상품을 등록하고 관리할 수 있는 웹 사이트 입니다. </b>
2. <b>MySQL 데이터베이스와 JavaScript, Node.js를 사용하여 상품 정보를 저장하고, 관리할 수 있는 시스템을 구축했습니다.</b><br/><br/>

## :high_brightness: 개발 환경
<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Bootstrapap-7952B3?style=flat-square&logo=bootstrap&logoColor=white"/></div>
<br/><br/>

## :hammer: 주요기능
###  1. 관리자 페이지 
#### ✅  관리자 페이지에서 상품 등록<br/>
1. 상품 등록 시 oninput으로 조건 검사 후 조건을 충족하지 않는 경우 하단에 경고 문구를 활성화하였습니다. <br/>
2. 조건이 모두 충족되면 저장 버튼이 활성화 되도록 하였습니다.<br/>
3. 저장 시 상품 이미지는 최대 2개까지 등록이 되도록 설정하였습니다.(Multer)<br/>
4. 하단의 상품은 수정 및 삭제가 가능하게 하였습니다.(DB 수정 및 삭제)<br/>
5. 등록한 상품은 메인 페이지에서도 확인이 가능합니다.<br/>
6. 헤더의 로고를 누르면 메인 페이지로 이동, 장바구니 버튼을 누르면 장바구니로 이동, 로그인 버튼을 누르면 준비 중 alert 창이 나타나도록 하였습니다.<br/>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/ece75d72-24c8-4b44-8ce7-81679dfa753c" /></div>
<br/>
<br/>

###  2. SHOP 메인 페이지 
#### ✅  등록한 상품 - 메인 페이지에서 확인 가능<br/>
1. 메인 쇼핑몰 페이지에서 등록한 상품을 확인할 수 있습니다. (로컬스토리지) <br/>
2. 각 메뉴명을 클릭하면, 등록 시 설정한 카테고리별 상품을 확인할 수 있습니다. <br/>
3. 상품의 좋아요 버튼을 누르면, 새로고침 후에도 유지됩니다. (로컬스토리지) <br/>
4. 상품을 클릭하면, 상품 상세 페이지로 이동합니다. (URL 파라미터) <br/>
5. 캐러셀은 부트스트랩과 스와이퍼를 활용하여 구현됩니다. <br/>
6. 마우스를 올리면 이미지 크기가 변하고 밑줄 효과가 적용됩니다. <br/><br/>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/f473d9c3-615f-4fd8-b97a-08dc5c37a26a" /></div>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/1dd05649-381a-4c8e-bb6b-28b14cb30170" /></div>
<br/><br/>

###  3. SHOP 상세 페이지 
#### ✅  장바구니 담기 및 새로운 상품 추천<br/>

1. 상세페이지에서 장바구니 담기 버튼을 누르면 장바구니에 담깁니다.<br/>
2. 하단에 새로운 상품들의 추천 이미지가 있으며, hover 시 다른 이미지로 변경됩니다.<br/>
3. 메인 페이지의 좋아요 버튼 클릭 여부가 유지되며, 변경할 수도 있습니다. (로컬스토리지)<br/>
4. 준비 중인 기능들은 sweetalert을 사용하여 "준비 중입니다."라는 안내창이 나타납니다.<br/>
5. 같은 상품은 장바구니에 담기지 않도록 설정되며, 중복 시 안내창이 표시됩니다.<br/>

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/e3f70eba-cc9e-4d45-892f-6f00ea84bfaa" /></div>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/fb67d8f4-25da-4e8f-bf75-b2ec20eaaf00" /></div>
<br/><br/>

### 4. CSS

1. 반응형
<div align="center">
 <img width="80%" alt="image" src="https://github.com/user-attachments/assets/07327deb-313e-483e-bacd-96d4c1778002" /></div>


## :star: 추가 구현 완료 리스트

<div align="center">
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/94630332-8d3a-47ba-a158-9f89961ca02f" />
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/a020a76b-d62a-43a2-b0f4-fb20f9172ef6" /></div>

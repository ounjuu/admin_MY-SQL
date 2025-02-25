
# 🔷: KIKIPOPO 상품 페이지 & 관리자 페이지 README - DB(MY SQL)
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b626d391-b400-4fdc-8ef5-ec8c2d7e8f72" /></div>

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/d221feb4-4fb5-4f5d-b186-55795738d6e6" /></div>

## :page_facing_up: 프로젝트 소개
#### 1. <b>상품을 등록하고 관리할 수 있는 웹 사이트 입니다. </b>
#### 2. <b>MySQL 데이터베이스와 JavaScript, Node.js를 사용하여 상품 정보를 저장하고, 관리할 수 있는 시스템을 구축했습니다.</b><br/><br/>

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

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/0d62b7fd-1190-49d3-9ad3-0aa868449eaa" /></div><br/>

#### 1. 상품 등록 시 DB 데이터와 중복 검사 및 조건 검사 후 조건을 충족하지 않는 경우 하단에 경고 문구를 활성화하였습니다. <br/>
#### 2. 조건이 모두 충족되면 저장 버튼이 활성화 되도록 하였습니다.<br/>
#### 3. 저장 시 상품 이미지는 최대 2개까지 등록이 되도록 설정하였습니다.(Multer)<br/>

 - 3-1. 이미지 추가 전 미리보기가 가능합니다.  <br/>
 - 3-2. 파일 첨부는 버튼이 아닌 이미지를 클릭 시 파일 첨부가 가능하게 하였습니다.  <br/>
 - 3-3. 메인 페이지에서 이미지 hover시 각각 하나씩 보이도록 설정하였습니다. <br/>
 - 3-4. 상세 페이지에서 sticky로 이미지를 내리면서 볼 수 있도록 설정하였습니다. <br/>

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/01d66124-a6f1-4474-8824-bced6f7eb6e4" /></div><br/>

#### 4. 하단의 상품은 수정 페이지로 이동 및 삭제가 가능하게 하였습니다.(DB 수정 및 삭제)<br/>
#### 5. 등록한 상품은 메인 페이지에서도 확인이 가능합니다.<br/>
<br/>
<br/>

###  2. SHOP 메인 페이지 
#### ✅  등록한 상품 - 메인 페이지에서 확인 가능<br/>
#### 1. 메인 쇼핑몰 페이지에서 등록한 상품을 확인할 수 있습니다. (My sql - DB) <br/>
#### 2. 각 메뉴명을 클릭하면, 등록 시 설정한 카테고리별 상품을 확인할 수 있습니다. <br/>
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/e0f614da-3d4b-415f-b74c-f8dfc0baaf34" /><br/>

#### 3. 상품 hover시 등록 페이지에서 등록한 사진 2개가 번갈아서 나타납니다. <br/>
#### 4. 상품을 클릭하면, 해당하는 상품 상세 페이지로 이동합니다. <br/>
#### 5. 캐러셀은 부트스트랩을 이용하여 구현하였습니다. (CSS) <br/>
#### 6. 글씨와 이미지가 흘러가는 효과를 구현하였습니다. (CSS) <br/><br/>

<br/><br/>

###  3. SHOP 상품 상세 페이지 
#### ✅  장바구니 담기 (DB) <br/>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/cc9fb784-f7b6-4ac4-8fea-99fcf7eca214" /></div><br/>

#### 1. 상세페이지에서 수량 선택 후 장바구니 담기 버튼을 누르면 장바구니에 담깁니다.<br/>
#### 2. 담기 버튼 클릭 시 DB의 id값이 있으면 수량만 추가되도록 구현하였습니다. (테이블 중복 추가 방지)<br/>
#### 3. 준비 중인 기능들은 sweetalert을 사용하여 "준비 중입니다."라는 안내창이 나타납니다.<br/>

###  3. SHOP 장바구니 페이지
#### ✅  수량 변경 및 삭제 (DB) <br/>
<div align="center"><img width="80%" alt="image" src="https://github.com/user-attachments/assets/ca015e2e-d3bb-436c-a9f0-4d42ad87f16a" /></div><br/>

### 4. CSS (반응형 및 스크롤바 변경 등)
<div align="center">
 <img width="45%" alt="image" src="https://github.com/user-attachments/assets/07327deb-313e-483e-bacd-96d4c1778002" />
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/1e7b9a2f-da0c-447c-9332-d7835af7a419" /></div>


## :star: 추가 구현 완료 리스트

<div align="center">
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/94630332-8d3a-47ba-a158-9f89961ca02f" />
<img width="45%" alt="image" src="https://github.com/user-attachments/assets/a020a76b-d62a-43a2-b0f4-fb20f9172ef6" /></div>

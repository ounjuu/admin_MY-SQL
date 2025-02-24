
# 🔷: KIKIPOPO 관리자 페이지(상품 관리) README - DB(MY SQL)

<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/a020a76b-d62a-43a2-b0f4-fb20f9172ef6" /></div>


<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b1366d62-2919-4f12-83d3-6b8bfb87a0ed" /></div>


<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b626d391-b400-4fdc-8ef5-ec8c2d7e8f72" /></div>


## :page_facing_up: 프로젝트 소개
1. <b>상품을 등록하고 관리할 수 있는 웹 사이트 입니다. </b>
2. <b>MySQL 데이터베이스와 JavaScript를 사용하여 상품 정보를 저장하고, 관리할 수 있는 시스템을 구축했습니다.</b><br/><br/>

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
3. 저장 시 상품 이미지는 랜덤으로 등록이 되도록 설정하였습니다.<br/>
4. 하단의 상품은 수정 및 삭제가 가능하게 하였습니다.(로컬스토리지에서도 수정 및 삭제)<br/>
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

###  4. SHOP 장바구니 페이지 
#### ✅ 총 금액 계산 및 장바구니 상품 삭제<br/>
1. 장바구니의 총 금액 및 개수가 계산됩니다.<br/>
2. 휴지통 버튼을 클릭하면 해당 상품이 삭제되며, 총 금액이 변경됩니다.<br/>
3. 장바구니 비우기 버튼을 클릭하면 alert 창이 나타나며, 삭제 버튼을 누르면 전체 상품이 삭제됩니다.<br/>
4. 전체 상품이 삭제되면 "장바구니가 비어있습니다."라는 이미지가 보이도록 설정됩니다.<br/>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/6e587b78-61db-4d6c-9d8b-fe75b8addc4a" /></div>
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/cf6ab2f2-4dfc-4214-aaad-4fe57cac3d25" /></div>
<br/><br/>

## :star: 추가 구현 완료 리스트

#### ➕ 페이지네이션 추가(관리자 페이지, 메인 페이지)
#### ➕ 엑셀 다운로드 가능(관리자 페이지 상품들)
#### ➕ 관리자 페이지 type 옵션 수정 가능하도록 추가
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/b3c5fb05-b500-4586-bcf7-c1f0f0f7b367" /></div>


#### ➕ 장바구니 수량 변경 가능하게 업데이트
#### ➕ 100,000원 이상인 경우 배송비 0원으로 변경
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/185867c2-7520-4dd1-90a2-7c758811a45e" /></div>

#### ➕ 찜버튼 누른 상품들 볼 수 있는 페이지 추가
<div align="center">
<img width="80%" alt="image" src="https://github.com/user-attachments/assets/105135d2-9ece-491d-83fa-5625ef2d456a" /></div>


# Admin Dashboard
관리자 권한을 가진 관리자만 접근이 가능한 관리자 페이지를 구현한 회원 관리 프로젝트입니다.

### 0. 프로젝트 시연 영상
[![Video Label](http://img.youtube.com/vi/Bs_LhABboCw/0.jpg)](https://youtu.be/Bs_LhABboCw)

### 1. 회원 등록 화면
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/42832798-89a1-4f05-995f-bd54541a00b2)

### 2. 회원 수정 화면
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/fed5ad41-79e8-4bb7-b23c-266a3a1516f7)

### 3. 회원 삭제 화면
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/7e1e4d02-b578-4b7f-8a47-337dfd73ec60)

# Directory Tree
```
portfolio-adminDashboard
├─ app.js
├─ public
│  ├─ css
│  │  ├─ admin.css
│  │  ├─ login.css
│  │  └─ myPage.css
│  ├─ html
│  │  ├─ admin.html
│  │  ├─ login.html
│  │  └─ myPage.html
│  └─ js
│     ├─ admin.js
│     ├─ login.js
│     └─ myPage.js
└─ server
   ├─ config
   │  └─ db.js
   ├─ controllers
   │  ├─ admin
   │  │  ├─ addUser.js
   │  │  ├─ deleteUser.js
   │  │  ├─ editUser.js
   │  │  └─ userList.js
   │  ├─ login
   │  │  ├─ authorize
   │  │  │  ├─ authLog.js
   │  │  │  └─ authNum.js
   │  │  ├─ db
   │  │  │  ├─ authLog.js
   │  │  │  └─ userCheck.js
   │  │  └─ jwt
   │  │     ├─ adminVerify.js
   │  │     └─ jwt.js
   │  └─ user
   │     ├─ findMe.js
   │     └─ myToken.js
   ├─ models
   │  ├─ authLogModel.js
   │  └─ userModel.js
   └─ routes
      ├─ admin.js
      ├─ login.js
      └─ user.js

```

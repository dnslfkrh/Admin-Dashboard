# Admin Dashboard
### 2024. 05. ~ 06.
Simple Membership Management Web Project

### Frontend
HTML, CSS, JavaScript
### Backend
Node.js, express
### Database
MongoDB
### Deploy
AWS(EC2, Route 53), Nginx

# Testing Video (youtube)
[![Video Label](http://img.youtube.com/vi/Bs_LhABboCw/0.jpg)](https://youtu.be/Bs_LhABboCw)

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

# Admin functions
### 1. Member Registration
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/c26593bc-0e4e-42e5-acea-17cfe8a05e1f)

### 2. Edit Member
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/ea7c20b8-b1a5-4fca-9607-5efd08c23243)

### 3. Delete Member
![image](https://github.com/dnslfkrh/portfolio-adminDashboard/assets/140808035/5fec69dc-d17b-42e4-b40e-de6f07bfa7b1)

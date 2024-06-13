const express = require('express');
const requestIp = require('request-ip');
const router = express.Router();
const path = require('path');

const app = express();
app.use(express.json());

const userFind = require('../controllers/admin/userList');
const addUser = require('../controllers/admin/addUser');
const editUser = require('../controllers/admin/editUser');
const deleteUser = require('../controllers/admin/deleteUser');


const adminIp = ['127.0.0.1'];

const checkIp = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    if (adminIp.includes(clientIp)) {
        next();
    } else {
        res.status(403).send('권한이 없습니다.');
    }
};

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const adminVerify = function (req, res, next) {
    const token = req.cookies.token;

    jwt.verify(token, secretKey, (err, decoded) => {
        if (decoded.access === 'admin') {
            next();
        } else {
            res.status(403).send('권한이 없습니다.');
        }
    });
};

router.use(checkIp, adminVerify);

router.get("/", (req, res) => {
    res.redirect("/main");
});

router.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'admin.html'));
});

router.post("/loadUser", async(req, res) => {
    try {
        const users = await userFind();
        res.status(200).json(users);
    } catch (error) {
        console.error("라우터 오류:", error);
        res.status(500).json({ error: '저장 실패' });
    }
});

router.post("/addUser", async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const className = req.body.class;
    const classDayOfWeek = req.body.classDayOfWeek;

    try {
        await addUser(name, phone, className, classDayOfWeek);
        res.status(200).json({ message: '저장 성공' });
    } catch (error) {
        console.error("라우터 오류:", error);
        res.status(500).json({ error: '저장 실패' });
    }
});

router.post("/editUser", async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const className = req.body.class;
    const classDayOfWeek = req.body.classDayOfWeek;

    try {
        await editUser(name, phone, className, classDayOfWeek);
        res.status(200).json({ message: '수정 성공' });
    } catch (error) {
        console.error("라우터 오류:", error);
        res.status(500).json({ error: '수정 실패' });
    }
});

router.post("/deleteUser", async (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    try {
        await deleteUser(name, phone);
        res.status(200).json({ message: '삭제 성공' });
    } catch (error) {
        console.error("라우터 오류:", error);
        res.status(500).json({ error: '삭제 실패' });
    }
});

module.exports = router;
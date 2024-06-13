const express = require('express');
const router = express.Router();
const path = require('path');

const app = express();
app.use(express.json());

const userAuth = require('../controllers/login/db/userCheck');
const codeAuth = require('../controllers/login/db/authLog');

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const adminVerify = function (req, res, next) {
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                res.clearCookie('token');
                next();
            } else {
                if (decoded.access === 'admin') {
                    res.redirect('/admin/main');
                } else {
                    res.redirect('/user/main');
                }
            }
        });
    } else {
        next();
    }
};

router.get("/", adminVerify, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'login.html'));
});

router.post("/sendAuthNum", (req, res) => {
    const tel = req.body.tel;
    userAuth(tel, res);
});

router.post("/authNum", async (req, res) => {
    const code = req.body.code;
    const num = req.body.tel;
    try {
        const isAdmin = await codeAuth(code, num, res);
        if (isAdmin) {
            return res.status(200).json({ redirectUrl: '/admin/main' });
        } else {
            return res.status(200).json({ redirectUrl: '/user/main' });
        }
    } catch (error) {
        res.status(500).json({ message: '서버 오류' });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie('token');
    res.sendStatus(200);
});

module.exports = router;
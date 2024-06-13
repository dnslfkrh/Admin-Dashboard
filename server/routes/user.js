const express = require('express');
const router = express.Router();
const path = require('path');

const myToken = require('../controllers/user/myToken');

const app = express();
app.use(express.json());

router.get("/", (req, res) => {
    res.redirect("/main");
});

router.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'myPage.html'));
});

router.post("/myInfo", async (req, res) => {
    const token = req.cookies.token;

    try {
        const myInfo = await myToken(token);
        res.status(200).json(myInfo);
    } catch (error) {
        res.status(500).json({ message: '서버 오류' });
    }
});

module.exports = router;
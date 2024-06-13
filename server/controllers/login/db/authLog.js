const { request } = require('express');
const authLog = require('../../../models/authLogModel');
const user = require('../../../models/userModel');

const createToken = require('../jwt/jwt');
const adminVerify = require('../jwt/adminVerify');

async function codeAuth(code, num, res) {
    try {
        const authLogs = await authLog.findOne({tel: num, randomNum: code});

        const isUser = await user.findOne({tel: num});
        
        if (!isUser) {
            throw new Error('찾을 수 없는 유저');
        }

        const userAccess = isUser.access;

        if (authLogs) {
            const token = createToken(num, userAccess);
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
            if (token) {
                const isAdmin = adminVerify(token);
                return isAdmin;
            } else {
                throw new Error('토큰 생성 실패');
            }
        } else {
            console.log("실패");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};

module.exports = codeAuth;
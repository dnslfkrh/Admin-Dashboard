const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

const path = require('path');
const getMyInfo = require('./findMe');

async function myToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey);
        const user = await getMyInfo(decoded.user);

        if (!user) {
            throw new Error('사용자를 찾을 수 없습니다.');
        }

        return({ success: true, user: user });

    } catch (error) {
        throw error;
    }
};

module.exports = myToken;
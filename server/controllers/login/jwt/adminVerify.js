const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

function adminVerify(token, res) {
    try {
        const decoded = jwt.verify(token, secretKey);
        if (decoded && decoded.access === 'admin') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Error verifying token:', error);
        return false;
    }
};

module.exports = adminVerify;
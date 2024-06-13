const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

function createToken(num, userAccess) {
    try {
        const payload = {
            user: num,
            access: userAccess
        };

        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        return token;
    } catch (error) {
        console.error('Error creating token:', error);
        return null;
    }
};

module.exports = createToken;
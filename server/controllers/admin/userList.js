const user = require('../../models/userModel');

async function userFind() {
    try {
        const users = await user.find(
            { access: 'normal' },
            { _id: 0, access: 0, __v: 0 }
        )
        return users;
    } catch (error) {
        console.error("오류:", error);
        throw error;
    }
};

module.exports = userFind;
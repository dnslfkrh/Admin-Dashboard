const user = require('../../models/userModel');

async function deleteUser(name, phone) {
    try {
        await user.findOneAndDelete(
            { name: name, tel: phone },
        );

    } catch (error) {
        console.error("오류:", error);
        throw error;
    }
};

module.exports = deleteUser;
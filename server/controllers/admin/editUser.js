const user = require('../../models/userModel');

async function editUser(name, phone, className, classDayOfWeek) {
    try {
        await user.findOneAndUpdate(
            { name: name, tel: phone },
            { className: className, classDayOfWeek: classDayOfWeek },
            { new: true }
        );

    } catch (error) {
        console.error("오류:", error);
        throw error;
    }
};

module.exports = editUser;
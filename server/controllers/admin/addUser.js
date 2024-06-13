const user = require('../../models/userModel');

async function addUser(name, phone, className, classDayOfWeek) {
    try {
        await user.create({
            name: name,
            tel: phone,
            className: className,
            classDayOfWeek: classDayOfWeek,
            access: 'normal'
        });

    } catch (error) {
        console.error("오류:", error);
        throw error;
    }
};

module.exports = addUser;
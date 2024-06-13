const user = require('../../models/userModel');

async function getMyInfo(tel) {

    try {
        const myInfo = await user.findOne(
            { tel: tel },
            { _id: 0, __v: 0, access: 0 }
        );

        return myInfo;
    } catch (error) {
        throw error;
    }
};

module.exports = getMyInfo;
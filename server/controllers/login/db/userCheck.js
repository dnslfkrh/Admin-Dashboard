const { request } = require('express');
const user = require('../../../models/userModel');

const sendAuthNum = require('../authorize/authNum');

async function userAuth(num, res) {
    try {
        const isUserExist = await user.findOne({tel: num});

        if (isUserExist) {
            await sendAuthNum(num);
        }

        res.status(200).json({message: 'ok'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};

module.exports = userAuth;
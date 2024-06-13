const key1 = process.env.KEY_1;
const key2 = process.env.KEY_2;
const serverTel = process.env.SERVER_TEL;

const coolsms = require('coolsms-node-sdk').default;
const messageService = new coolsms(`${key1}`, `${key2}`);


const authLogSave = require('./authLog');

async function sendAuthNum(tel) {

    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    await messageService.sendOne({
      to: `${tel}`,
      from: `${serverTel}`,
      text: `인증번호는 [${randomNumber}]입니다.\n2분 뒤 인증번호는 무효가 되니 주의해 주세요.`
    })

    authLogSave(tel, randomNumber);
};

module.exports = sendAuthNum;
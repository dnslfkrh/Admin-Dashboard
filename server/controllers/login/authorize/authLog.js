const authLog = require('../../../models/authLogModel');

async function authLogSave(tel, randomNumber) {
    try {
        const savedAuthLog = await authLog.create({ tel, randomNum: randomNumber });

        logDelete(savedAuthLog._id, 120000);

        return savedAuthLog;
    } catch (error) {
        console.error("오류:", error);
        throw error;
    }
};

function logDelete(log, delay) {
    setTimeout(async () => {
        try {
            await authLog.deleteOne({ _id: log });
        } catch (error) {
        }
    }, delay);
};

module.exports = authLogSave;
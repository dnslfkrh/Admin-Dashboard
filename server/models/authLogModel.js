const mongoose = require('mongoose');

const authLogSchema = new mongoose.Schema({
    tel: String,
    randomNum: String,
});

const AuthLog = mongoose.model('authLog', authLogSchema, 'authLogs');

module.exports = AuthLog;
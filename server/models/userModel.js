const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tel: { type: String, required: true },
    className: { type: String, required: true },
    classDayOfWeek: { type: String, required: true },
    access: { type: String, default: 'normal' }
});

const user = mongoose.model('user', userSchema, 'users');

module.exports = user;
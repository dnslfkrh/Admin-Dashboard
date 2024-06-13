const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const loginRouter = require('./server/routes/login');
const adminRouter = require('./server/routes/admin');
const userRouter = require('./server/routes/user');
const { mongoDB } = require('./server/config/db');

require('dotenv').config();

mongoDB();

app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, '0.0.0.0');

app.get("/", (req, res) => {
    res.redirect("/login");
});

app.use("/login", loginRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
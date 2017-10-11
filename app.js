
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

const userRouter = require(__dirname + '/api/routers/user.router');

app
.use(bodyParser.urlencoded({extended: true}))
.use(bodyParser.json())
.use(userRouter);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
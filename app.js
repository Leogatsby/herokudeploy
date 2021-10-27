const express = require("express");
const app = express();
const deploytestRouter = require('./routes/deploytestRouter');

app.use(deploytestRouter);

const port = process.env.PORT || 3000
// process.env.PORT로 설정 해줘야 한다.

app.listen(port,console.log("서버가 실행되었다~"));

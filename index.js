const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 导入你的模块
const location = require('./api/location');
const initApp = require('./api/initApp');
const submit = require('./api/submit');

// 使Express能够解析JSON请求体
app.use(cors({
  origin: ['http://localhost:8080'], // 允许来自http://localhost:8080的请求
  methods: ['GET', 'POST', 'OPTIONS'], // 允许的HTTP方法
  allowedHeaders: ['Content-Type', 'Authorization'], // 允许的自定义请求头
  credentials: true, // 允许跨域请求携带credentials（例如cookies）
}));

// 解析JSON请求体
app.use(express.json());

// 定义一个路由来处理POST请求
app.post('/location', location);
app.post('/initApp', initApp);
app.post('/submit', submit);

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

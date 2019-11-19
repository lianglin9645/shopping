var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
// var session = require('express-session')
var router = require('./routers')


var app = express()
var users = require('./routers/user')
var goods = require('./routers/goods')
app.use('/public/', express.static(path.join(__dirname, './public')))
app.use('/node_moudles/', express.static(path.join(__dirname, './node_moudles')))

// 解析 application/json
app.use(bodyParser.json()); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// app.use(function (req,res,next) {
//     if(req.headers.authorization) {
//         next();
//     } else {
//         if(req.originalUrl == '/user/login' || req.originalUrl == '/user/register') {
//             next();
//         } else {
//             res.json({
//                 status: '10001',
//                 msg: '当前未登录',
//                 result: ''
//             })
//         }
//     }
// })

app.use('/user',users)
app.use('/good',goods)
app.get('/', function(req, res) {
    res.send('hello')
})

// jwt中间件
// app.use(expressJwt({
//     secret: "secret"//加密密钥，可换
// }).unless({
//     path: ["/login"]//添加不需要token的接口
// }));

//挂载
app.use(router)


app.listen(5000, function () {
    console.log('runing....')
})
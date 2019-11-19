var express = require('express')
var router  = express.Router()
var mongoose = require('mongoose')
var good = require('../modules/goods')


mongoose.connect('mongodb://localhost:27017/demo',   { useNewUrlParser: true, useUnifiedTopology:true })


router.get('/', function(req, res, next) {
    good.find({}, function (err, data) {
        if(err) {
            res.status(data.httpCode).json(msg)
        } 
        res.json({
            status: '0',
            msg: '0',
            result: {
                count: data.length,
                list: data
            }
        })
    })
});

router.post('/add', function(req, res, next) {
    var body = req.body
    good.findOne({productId: body.productId},function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: '此ID已存在'
            })
        }

        new good(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: '服务端出错'
                })
            }
            return res.status(200).json({
                message: '添加成功',
                list: user
            })
        })
    })
})

module.exports = router
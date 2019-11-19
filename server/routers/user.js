var express = require('express')
var router  = express.Router()
var mongoose = require('mongoose')
var user = require('../modules/user')

var jwt = require('jsonwebtoken')

mongoose.connect('mongodb://localhost:27017/demo',   { useNewUrlParser: true, useUnifiedTopology:true })

//登录
router.post('/login', function(req, res, next) {
    var param = {
        username: req.body.username,
        password: req.body.password
    }
    user.findOne(param, function (err, data) {
        if(err) {
            res.status(data.httpCode).json(msg)
        } else {
            if(data) {
                let secretOrPrivateKey = "Beary"
                var token = jwt.sign(param, secretOrPrivateKey, {
                    expiresIn: 60*60*1  // 1小时过期
                })
            param.token = token
                res.json({
                    status: '0',
                    message: '登陆成功',
                    token: param.token,
                    username: param.username
                })
            }
            
        }
    })
    // new user(param).save(function(err, user) {
    //     if (err) {
    //         return res.status(500).json({
    //             err_code: 500,
    //             message: '服务端出错'
    //         })
    //     }
    //     return res.status(200).json({
    //         message: '成功',
    //         token: param.token,
    //         username: param.username
    //     })
    // })
});
//注册
router.post('/register', function(req, res, next) {
    var body = req.body
    user.findOne({username: body.username},function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        }
        if (data) {
            return res.status(200).json({
                err_code: 1,
                message: '用户已存在'
            })
        }
        let secretOrPrivateKey = "Beary"
        var token = jwt.sign(body, secretOrPrivateKey, {
            expiresIn: 60*60*1  // 1小时过期
        })
        req.body.token = token

        // jwt.verify(token, secretOrPrivateKey, (err, decode)=> {
        //     if (err) {  //  时间失效的时候 || 伪造的token
        //         res.send({'status':10010});
        //     } else {
        //         res.send({'status':10000});
        //     }
        // })

        // user.token = token
        new user(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: '服务端出错'
                })
            }
            return res.status(200).json({
                message: '注册成功',
                token: token,
                username: body.username
            })
        })
    })
})
//地址列表
router.get('/addressList', function(req,res,next) {
    var token = req.headers.authorization;
    user.findOne({token: token}, function (err, data) {
        if(err) {
            res.status(data.httpCode).json(msg)
        } 
        res.json({
            status: '0',
            msg: '0',
            result: {
                count: data.length,
                list: data.addressList
            }
        })
    })
})
//添加地址
router.post('/addAddress', function(req, res, next) {
    var body = req.body, token = req.headers.authorization;
    console.log(req.headers.authorization)
    user.update({
        token: token
    }, {
        $push:{
            addressList: body
        }
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        } else {
            return res.status(200).json({
                message: '添加成功'
            })
        }
    })
})
//删除地址
router.post('/delAddress', function(req, res, next) {
    var id = req.body._id,token =req.headers.authorization;
    user.updateOne({
        token: token
    }, {
        $pull: {
            addressList: {
                _id: id
            }
        }
    }, function(err,data) {
        if(err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        }else {
            console.log(data)
            return res.status(200).json({
                message: '删除成功'
            })
        }
    })
})
//设置地址默认接口
router.post('/setDefault', function(req,res,next) {
    var token =req.headers.authorization, id = req.body._id,sid=mongoose.Types.ObjectId(id);
    if(!sid) {
        return res.status(10003).json({
            err_code: 10003,
            message: 'id is null'
        })
    }
    user.findOne({ token:token }, function(err, data) {
        if(err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        } else {
            var addressList = data.addressList;
            addressList.forEach((item) => {
                if(item._id == id) {
                    console.log(item._id == id)
                    item.isDefault = true
                } else {
                    item.isDefault = false
                }
            });
        }
        data.save(function(err1, data1) {
            if(err1) {
                return res.status(500).json({
                    err_code: 500,
                    message: '服务端出错'
                })
            } else {
                return res.status(200).json({
                    message: '设置成功'
                })
            }
        })
    })
})
//购物车列表
router.get('/cartList', function(req,res,next) {
    user.find({}, function (err, data) {
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
})

//添加购物车
router.post('/addCartList', function(req, res, next) {
    var body = req.body
    user.updata({
        token:body.token,
        addressId: body.addressId
    }, { 
        $push:{
            'cartList': body
        }
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        } else {
            var cartList = data.cartList
            cartList.forEach((item) => {
                if(item.addressId == addressId) {
                    item.productCount++;
                }
            })
            return res.status(200).json({
                message: '添加成功'
            })
        }
    })
})
//修改购物车数量
router.post('/cartEdit', function(req,res,next) {
    var token =req.headers.authorization,
    productId = req.body.productId,
    productCount = req.body.productCount;
    user.update({token: token, productId: productId},{
        'cartList.$.productCount': productCount
    }, function(err,data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        } else {
            return res.status(200).json({
                message: '修改成功'
            })
        }
    })
})
//删除购物车
router.post('/cartDelete', function (req,res,next) {
    var token =req.headers.authorization,
    productId = req.body.productId;
    user.update({
        productId: productId
    }, {
        $pull: {
            'cartList': {
                productId: productId
            }
        }
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务端出错'
            })
        } else {
            return res.status(200).json({
                message: '删除成功'
            })
        }
    })
})
module.exports = router
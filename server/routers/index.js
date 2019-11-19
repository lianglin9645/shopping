var express = require('express')
var router  = express.Router()
var mongoose = require('mongoose')
var user = require('../modules/user')

mongoose.connect('mongodb://localhost:27017/demo', { useNewUrlParser: true, useUnifiedTopology:true })


// router.get('/', function(req, res) {
//         user.find({}, function (err, data) {
//             if(err) {
//                 console.log(err)
//             }
//             console.log(data+ '123456')
//         })
// });

module.exports = router
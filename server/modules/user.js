var mongoose = require("mongoose")


var Schema = mongoose.Schema

var userSchema = new Schema({
    username: String,
    password: String,
    token: String,
    cartList: [{
        productId: String,
        productName: String,
        productPrice: String,
        productNameSmoll: String,
        productCount: Number,
        productPic: String,
        productText: String
    }],
    addressList: [{
        addressId: String,
        userName: String,
        streetName: String,
        postCode: Number,
        tel: Number,
        isDefault: Boolean
    }]
})

module.exports = mongoose.model('user', userSchema)
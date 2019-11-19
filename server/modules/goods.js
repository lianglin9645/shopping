var mongoose = require("mongoose")


var Schema = mongoose.Schema

var goodSchema = new Schema({
    productId: String,
    productName: String,
    productPrice: String,
    productNameSmoll: String,
    productPic: String,
    productText: String,
    // productBanner: Array,
})

module.exports = mongoose.model('good', goodSchema)
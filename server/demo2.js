const mongoose = require('mongoose');

const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost:27017/itcast');

var userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
})

var User = mongoose.model('User', userSchema)

var admin = new User({
    username: 'admin',
    password: '123456',
    email: 'admin@admin.com'
})

admin.save().then((res) => console.log(res));
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var passport = require('passport');


mongoose.connect('mongodb://localhost/loginapp');
var db=mongoose.connection;

var UserSchema= mongoose.Schema({
    FirstName: {
        type: String,
        index: true
    },
    UserName:{
        type:String
    },
    EmailID:{
        type:String
    },
    Password:{
        type:String
    }
});


var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser= function(newUser,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.Password, salt, function(err, hash) {
            newUser.Password= hash;
            newUser.save(callback);
        });
    });
};

module.exports.comparePassword= function(userPassword,hash, callback){
    bcrypt.compare(userPassword, hash, function(err, isMatch){
        if(err) {
            throw err;
        }
        callback(null, isMatch);
    });
};



module.exports.getUserByUsername= function(username,callback){
    var query={ UserName: username};
    User.findOne(query, callback);
};

module.exports.getUserById= function(id,callback){
    User.findById(id, callback);
};


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    Admin.getUserById(id, function (err, user) {
        done(err, user);
    });
});
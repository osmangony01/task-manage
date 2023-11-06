const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: { type: String },
    email: { type: String },
    role: { type: String },
    photo: { type: String },

});

const userModel = mongoose.model("taskUserAuth", userSchema);

module.exports = userModel;

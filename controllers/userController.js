const User = require('../models/userModel');

const addUser = async (req, res) => {

    const userInfo = req.body;
    //console.log(userInfo);
    try {
       
        const result = await User.create(userInfo);
        res.status(201).json({
            ok: true,
            message: 'User created',
          })
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Failed to create User'
          })
    }
}

module.exports = { addUser}
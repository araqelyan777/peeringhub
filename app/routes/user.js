module.exports = app => {
    var router = require("express").Router();
    const multer = require('../utilities/multer.js');
    const upload = multer.setImageFolder('app/public');

    const user = require("../controllers/user.js");


    // Admin Api
    // Create a new Clec
    router.post("/",upload.any(),user.register);
    router.get("/:clec_uuid",user.login);


    app.use('/admin/clec', router);
};
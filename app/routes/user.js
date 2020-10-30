

module.exports = app => {
    var router = require("express").Router();

    const user = require("../controllers/user.js");


    // Create a new Clec
    router.post("/",user.register);
    router.get("/:clec_uuid",user.login);


    app.use('/admin/clec', router);
};
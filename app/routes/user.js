module.exports = app => {
    const router = require("express").Router();

    // For File Upload
    const multer = require('../utilities/multer.js');
    const upload = multer.setImageFolder('app/public');

    //For validation request body
    const { userValidationRules, validate } = require('../utilities/validation/validator')
    const {adminClecPostValidation} = require("../utilities/validation/validationList")

    //Controllers
    const user = require("../controllers/user.js");


    // Admin Api
    router.post("/",upload.any(),userValidationRules(adminClecPostValidation), validate,user.register);
    router.get("/:clec_uuid",user.login);


    app.use('/admin/clec', router);
};
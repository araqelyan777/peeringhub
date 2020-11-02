module.exports = app => {
    const router = require("express").Router();
    const verifyToken = require('../middleware/verifyToken')

    // For File Upload
    const multer = require('../utilities/multer.js');
    const upload = multer.setImageFolder('app/public/user');

    //For validation request body
    const { userValidationRules, validate } = require('../utilities/validation/validator')
    const {adminClecPostValidation} = require("../utilities/validation/validationList")

    //Controllers
    const user = require("../controllers/user.js");


    // Admin Api
    router.post("/",upload.any(),userValidationRules(adminClecPostValidation), validate,user.register);
    router.get("/:clec_uuid",user.login);

    // Test Part by token example
    // router.get("/:clec_uuid",verifyToken,user.login);


    app.use('/admin/clec', router);

    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGVjX3V1aWQiOiJkODM1YzJmMC1hMmUzLTRhNmYtYjk3My1lN2U0MGE4NWQzNWEiLCJyb2xlIjoiY2xlYyIsInVzZXJuYW1lIjoidHJlcyIsImlhdCI6MTYwNDMwMDI1MCwiZXhwIjoxNjA0NDczMDUwLCJqdGkiOiJlZC12Mi1qd3QtaWQifQ.oHnfXDgmLLIL5sGUHSSwCdK0U85gPT5_MsGb8URsz1Y

};
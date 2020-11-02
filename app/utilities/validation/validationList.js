const { body } = require('express-validator')

const adminClecPostValidation = [
        body('username','Username field is required').not().isEmpty(),
        body('email','Email not valid').isEmail(),
        body('password').custom((value,{req}) => {
            if (value !== req.body.confirm_password) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        }),
        body('first_name','First Name field is required').not().isEmpty(),
        body('last_name','Last Name field is required').not().isEmpty(),
        body('phone_number','Phone Number field is required').not().isEmpty(),
        body('contact_address','Contact Address field is required').not().isEmpty(),
        body('contact_suite','Contact Suite field is required').not().isEmpty(),
        body('contact_city','Contact City field is required').not().isEmpty(),
        body('contact_country','Contact Country field is required').not().isEmpty(),
        body('contact_postal_code','Contact Postal Code field is required').not().isEmpty(),
        body('company_name','Company Name field is required').not().isEmpty(),
        body('profile_address','Profile Address field is required').not().isEmpty(),
        body('profile_suite','Profile Suite field is required').not().isEmpty(),
        body('profile_city','Profile City field is required').not().isEmpty(),
        body('profile_country','Profile Country field is required').not().isEmpty(),
        body('profile_postal_code','Profile Postal Code field is required').not().isEmpty(),
        body('state_of_clec_certification','State Of Clec Certification field is required and max length 2').isAlphanumeric().isLength({ min: 1, max:2}),
        body('upload_clec_certification').custom((data,{req})=>{
            if (req.files.length === 0){
                throw new Error("Upload Clec Certification field is required");
            }
            return req.files
        }),
        body('ocn','Ocn field is required').not().isEmpty().custom((array,{req})=>{
            let arrayOcn = array.split(',')
            console.log(arrayOcn)
            if (arrayOcn){
                arrayOcn.map((item)=>{
                    if (item.toString().length > 4){
                        throw new Error("Ocn field each item length must be less then 4");
                    }
                })
                return arrayOcn
            }

        })
    ]


module.exports ={
    adminClecPostValidation
}
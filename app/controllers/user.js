const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const {signToken} = require('../utilities/jwt')
const {Validation} = require('../utilities/validation')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const {JWT_EXPIRATION} = require('./../config/config')


const saltRounds = 10;

const validateRequestData = (data)=>{
    let errorMessageArr = []
    errorMessageArr.push(
        Validation('string',true,data.username,null,'username'),
        Validation('password',true,data.password,data.confirm_password,'password'),
        Validation('email',true,data.email,null,'email'),
        Validation('string',true,data.first_name,null,'first name'),
        Validation('string',true,data.last_name,null,'last name'),
        Validation('string',true,data.phone_number,null,'phone number'),
        Validation('string',true,data.contact_address,null,'contact address'),
        Validation('string',true,data.contact_suite,null,'contact suite'),
        Validation('string',true,data.contact_city,null,'contact city'),
        Validation('string',true,data.contact_country,null,'contact country'),
        Validation('number',true,data.contact_postal_code,null,'contact postal code'),
        Validation('string',true,data.company_name,null,'company name'),
        Validation('string',true,data.profile_address,null,'profile address'),
        Validation('string',true,data.profile_suite,null,'profile suite'),
        Validation('string',true,data.profile_city,null,'profile city'),
        Validation('string',true,data.profile_country,null,'profile country'),
        Validation('number',true,data.profile_postal_code,null,'profile postal code'),
        Validation('string',true,data.state_of_clec_certification,null,'state of clec certification',2),
        Validation('array',true,data.ocn,null,'ocn',4),
    )


    return errorMessageArr.filter(Boolean).length ? errorMessageArr.filter(Boolean) : []
}

// Create and Save a new Clec Admin
exports.register = (req, res) => {
    let validateResult = validateRequestData(req.body)


    if (validateResult.length === 0){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const user = {
            clec_uuid: uuidv4(),
            username: req.body.username,
            password: hash,
            email: req.body.email,
            role: 'clec',
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            contact_address: req.body.contact_address,
            contact_suite: req.body.contact_suite,
            contact_city: req.body.contact_city,
            contact_country: req.body.contact_country,
            contact_postal_code: req.body.contact_postal_code,
            company_name: req.body.company_name,
            profile_address: req.body.profile_address,
            profile_suite: req.body.profile_suite,
            profile_city: req.body.profile_city,
            profile_country: req.body.profile_country,
            profile_postal_code: req.body.profile_postal_code,
            state_of_clec_certification: req.body.state_of_clec_certification,
            // upload_clec_certification: req.body.upload_clec_certification,
            ocn: req.body.ocn,
        };


        // Save Clec Admin in the database
        User.create(user)
            .then(data => {
                res.status(200).send({success:true,object_id:data.clec_uuid});
            })
            .catch(err => {
                res.status(406).send({
                    error_type: 'string',
                    success: false,
                    error:{
                        message: err.parent ? err.parent.detail : err.message,
                        code: 406
                    }
                });
            });
    }else {
        res.status(400).send({
            error_type: 'string',
            success: false,
            error: validateResult
        });
        return;
    }


};




exports.login = (req, res) => {

    if (req.params.clec_uuid){
        User.findOne({where: {clec_uuid: req.params.clec_uuid} }).then(user => {
            if (user){
                let token = signToken({
                    clec_uuid: user.clec_uuid,
                    role: user.role,
                    username: user.username
                })
                res.status(200).send({success:true,payload:user,expired:JWT_EXPIRATION,token})
            }else{
                res.status(503).send({
                    message: 'User Not found'
                });

            }
        }).catch(err => {
                res.status(404).send({
                    error: err.message || 'User Not found' || "Some error occurred while getting the clec user.",
                    error_type: 'string',
                    success: false,
                });
            });
    }

};


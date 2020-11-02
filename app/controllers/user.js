const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const {signToken} = require('../utilities/jwt')
const {v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const {JWT_EXPIRATION} = require('./../config/config')


const saltRounds = 10;

// Create and Save a new Clec Admin
exports.register = (req, res) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    let uploadFiles = []
    if (req.files){
        req.files.map((item)=>{
            uploadFiles = [...uploadFiles,item.filename]
        })
    }

    // User Save Data
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
        upload_clec_certification: uploadFiles,
        ocn: typeof req.body.ocn !== 'array' ?  req.body.ocn.split(',') : req.body.ocn,
    };


    // Save Clec Admin in the database
    User.create(user)
        .then(data => {
            res.status(200).send({success: true, clec_uuid: data.clec_uuid});
        })
        .catch(err => {
            console.log(err)
            res.status(406).send({
                error_type: 'string',
                success: false,
                error: {
                    message: err,
                    code: 406
                }
            });
        });
};


exports.login = (req, res) => {
    if (req.params.clec_uuid) {
        User.findOne({where: {clec_uuid: req.params.clec_uuid}}).then(user => {
            if (user) {
                let token = signToken({
                    clec_uuid: user.clec_uuid,
                    role: user.role,
                    username: user.username
                })
                res.status(200).send({success: true, payload: user, expired: JWT_EXPIRATION, token})
            } else {
                res.status(404).send({
                    error: 'User Not found',
                    error_type: 'string',
                    success: false
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


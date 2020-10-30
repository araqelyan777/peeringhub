module.exports = (sequelize, Sequelize,DataTypes) => {
    const User = sequelize.define("users", {
        clec_uuid: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: 'clec'
        },
        first_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        phone_number: {
            type: Sequelize.STRING,
        },
        contact_address: {
            type: Sequelize.STRING,
        },
        contact_suite: {
            type: Sequelize.STRING,
        },
        contact_city: {
            type: Sequelize.STRING,
        },
        contact_country: {
            type: Sequelize.STRING,
        },
        contact_postal_code: {
            type: Sequelize.STRING,
        },
        company_name: {
            type: Sequelize.STRING,
        },
        profile_address: {
            type: Sequelize.STRING,
        },
        profile_suite: {
            type: Sequelize.STRING,
        },
        profile_city: {
            type: Sequelize.STRING,
        },
        profile_country: {
            type: Sequelize.STRING,
        },
        profile_postal_code: {
            type: Sequelize.STRING,
        },
        state_of_clec_certification: {
            type: Sequelize.STRING(2),
        },
        // upload_clec_certification: {
        //     type: Sequelize.ARRAY(Sequelize.STRING),
        // },
        ocn: {
            type: Sequelize.ARRAY(Sequelize.STRING(4)),
        },

    });

    return User;
};
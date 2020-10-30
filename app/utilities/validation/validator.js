const { validationResult } = require('express-validator')
const userValidationRules = (validConfig) => {
    // Set Validation Data Configs
    return validConfig
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array({ onlyFirstError: true }).map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(400).send({
        error_type: 'string',
        success: false,
        error: extractedErrors,
    })
}

module.exports = {
    userValidationRules,
    validate,
}
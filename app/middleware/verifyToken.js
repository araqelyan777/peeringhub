const { getAuthTokenContent } = require('../utilities/jwt');


const verifyToken = function async(req, res, next) {
    try {
        let data = getAuthTokenContent(req.headers.authorization || undefined);
        if (data && data.error){
            res.status(401).send({
                error_type: 'string',
                success: false,
                error: {
                    message: data.value ? data.value : 'Check token again',
                    code: 401
                }
            });
            return
        }
        next();

    } catch (error) {
        throw new Error('Invalid token');
    }
}
module.exports = verifyToken;

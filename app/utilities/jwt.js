const jwt = require('jsonwebtoken');
const { JWT_ID, JWT_ALGORITHM, JWT_EXPIRATION, JWT_KEY } = require('../config/config');

 const signToken = (payload) => {
    return jwt.sign(payload, JWT_KEY, {
        jwtid: JWT_ID,
        expiresIn: JWT_EXPIRATION,
        algorithm: JWT_ALGORITHM
    });
};

 const forgetToken = (payload) => {
    return jwt.sign(payload, JWT_KEY, {
        jwtid: JWT_ID,
        expiresIn: JWT_EXPIRATION,
        algorithm: JWT_ALGORITHM
    });
};

 const getAuthTokenContent = (token) => {
    if (!token) {
        return {
            value: "Token not exists",
            error: new Error("Token not exists")
        }
    }

    const [type, content] = token.split(' ');

    if (type !== 'Bearer') {
        return {
            value: "Invalid token type",
            error: new Error("Invalid token type")
        }
    }

    try {
        return jwt.verify(content, JWT_KEY);
    } catch (e) {
        return {
            value: "Invalid token",
            error: new Error("Invalid token")
        }
    }
};

module.exports = {
    signToken,forgetToken,getAuthTokenContent
}
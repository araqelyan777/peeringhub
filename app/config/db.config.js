module.exports = {
    development:{
        HOST: "localhost",
        USER: "postgres",
        PASSWORD: "admin123",
        DB: "postgres",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production:{
        HOST: "ec2-34-200-106-49.compute-1.amazonaws.com",
        USER: "lgjntqjyhtrzwa",
        PASSWORD: "a389f94455726ee56fee1421ca7d2ceb281539bec71e0d1af59b7277e3691b6c",
        DB: "d6bp3pq0ephpuo",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
};
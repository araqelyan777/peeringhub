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
    }
};
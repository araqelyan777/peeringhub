const express = require("express");
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
const cors = require("cors");
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const SwaggerYaml = YAML.load('./swagger.yaml')


const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())


// Connect DB
const db = require("./app/models");
db.sequelize.sync();


// Swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(SwaggerYaml));


// Connect Routes
require("./app/routes/user")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});













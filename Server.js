const express = require('express');
require('dotenv');
const API = express();
require('./Src/config/config');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const {swaggerSpec} = require('./Src/swagger doc/swagger_api');



API.use(express.json());
API.use(cors({}));

API.use('/v1/learnEnd',require('./Src/router/user.router'))
API.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const Port = process.env.PORT || 7099


API.listen(Port, () => {
    console.log('Server working on' + ' ' + Port);
})

module.exports = API;


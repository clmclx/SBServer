import {SpellingBeeInputSet} from "./utils/sb/generate";

const config = require('./utils/config');
const express = require('express')
const cors = require('cors');
const wordRouter = require('./controllers/words');
const morgan = require('morgan');
const validation = require('./utils/sb/validation');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware')

logger.info('connecting to ', config.MONGODB_URI);


let app = express();
app.use(express.json())
app.use(middleware.requestLogger)
app.use('/sb/api/', wordRouter);
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

// be able to log API request in  the console
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBody'))

// const charSet: string[] = process.argv[2].split("");

module.exports = app

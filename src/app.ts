import {SpellingBeeInputSet} from "./utils/sb/generate";

const express = require('express')
const morgan = require('morgan');
const validation = require('./utils/sb/validation');

let app = express();
app.use(express.json())

// be able to log API request in  the console
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqBody'))

const charSet: string[] = process.argv[2].split("");

const sbSet: SpellingBeeInputSet = {
    required: charSet[0],
    charSet: charSet
}



// be able to set environment variables
require('dotenv').config();

app.get('/sb/api/check', (request, response) => {
    let payload = request.body;
    let word: string = payload.word;
    if (!validation.has4Letters(word)) {
        response.status(200).json({
            error: 'not enough letters'
        })
    } else if (!validation.matchesSpellingBeeSet(word, sbSet)) {
        response.status(200).json({
            error: `char set does not match spellingbeeSet ${sbSet.charSet.join("")}`
        })
    } else {
        validation.computeScore(word, sbSet)
    }
})

module.exports = {app}

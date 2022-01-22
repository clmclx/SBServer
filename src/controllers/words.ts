const wordsRouter = require('express').Router();
const logger = require('../utils/logger');


wordsRouter.get('/checkScore', (request, response) => {
    let word = request.body.word;
    logger.info("getting word score for ", word);
})


module.exports = wordsRouter;
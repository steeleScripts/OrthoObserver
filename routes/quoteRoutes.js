const express = require('express')
const router = express.Router()
const quotesController = require('../controllers/quotesController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .get(verifyJWT, quotesController.getAllQuotes)    
    .post(verifyJWT, quotesController.createNewQuote)
    .patch(verifyJWT, quotesController.updateQuote)
    .delete(verifyJWT, quotesController.deleteQuote)

router.route('/random')
    .get(quotesController.getRandomQuote)

module.exports = router
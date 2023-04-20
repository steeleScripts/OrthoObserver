const express = require('express')
const router = express.Router()
const prayersController = require('../controllers/prayersController')

router.route('/')
    .get(prayersController.getAllPrayers)
    .post(prayersController.createNewPrayer)
    .patch(prayersController.updatePrayer)
    .delete(prayersController.deletePrayer)

module.exports = router
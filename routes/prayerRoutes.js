const express = require('express')
const router = express.Router()
const prayersController = require('../controllers/prayersController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .get(verifyJWT, prayersController.getAllPrayers)
    .post(verifyJWT, prayersController.createNewPrayer)
    .patch(verifyJWT, prayersController.updatePrayer)
    .delete(verifyJWT, prayersController.deletePrayer)

router.route('/recent-5')
    .get(prayersController.getRecent5)

router.route('/public')
    .get(prayersController.getAllPublicPrayers)

router.route('/ortho')
    .get(prayersController.getOrthodoxPrayers)

module.exports = router
const express = require('express')
const router = express.Router()
const modController = require('../controllers/modController')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/totals')
    .get(verifyJWT, modController.getTotals)

router.route('/prayers')
    .get(verifyJWT, modController.getFlaggedPrayers)

router.route('/users')
    .get(verifyJWT, modController.getFlaggedUsers)

router.route('/flag')
    .post(verifyJWT, modController.flagPrayer)
    .post(verifyJWT, modController.flagUser)

router.route('/unflag')
    .post(verifyJWT, modController.unflagPrayer)
    .post(verifyJWT, modController.unflagUser)

router.route('/log')
    .get(verifyJWT, modController.getActivityLog)
    .post(verifyJWT, modController.logEvent)

module.exports = router
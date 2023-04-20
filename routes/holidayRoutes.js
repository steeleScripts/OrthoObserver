const express = require('express')
const router = express.Router()
const holidaysController = require('../controllers/holidaysController')

router.route('/')
    .get(holidaysController.getAllHolidays)
    .post(holidaysController.createNewHoliday)
    .patch(holidaysController.updateHoliday)
    .delete(holidaysController.deleteHoliday)

module.exports = router
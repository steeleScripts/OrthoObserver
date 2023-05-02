const express = require('express')
const router = express.Router()
const saintsController = require('../controllers/saintsController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/')
    .get(saintsController.getAllSaints)    
    .post(saintsController.createNewSaint)
    .patch(saintsController.updateSaint)
    .delete(saintsController.deleteSaint)

module.exports = router
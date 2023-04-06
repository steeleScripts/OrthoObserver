mongoose = require('mongoose')

const quoteSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: true
    },
    saint: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Saint'       
    }
})

module.exports = mongoose.model('Quote', quoteSchema)
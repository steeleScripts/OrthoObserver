mongoose = require('mongoose')

const saintSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }/*,
    birth: {
        type: Date        
    },
    death: {
        type: Date
    },

    Book and Churches should be their own data types 
    books: {
        type: Array
    },
    church: { 
        type: String
    } */
})

module.exports = mongoose.model('Saint', saintSchema)
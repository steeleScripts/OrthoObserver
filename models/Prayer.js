mongoose = require('mongoose')

const prayerSchema = new mongoose.Schema(
    {
        text: {
            type: String, 
            required: true
        },
        username: {
            type: String,
            required: true,
            ref: 'User'       
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Prayer', prayerSchema)
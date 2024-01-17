mongoose = require('mongoose')

const prayerSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        text: {
            type: String, 
            required: true
        },
        username: {
            type: String,
            required: true,
            ref: 'User'       
        },
        prayedFor: [{ 
            type: String,
            ref: 'User'          
        }],
        visibility: {
            type: String, 
            required: true,
            default: 'public'
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Prayer', prayerSchema)
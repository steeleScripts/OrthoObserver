mongoose = require('mongoose')

const modLogSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            required: true,
            ref: 'User'
        },
        event: {
            type: String,
            required: true              
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('ModLog', modLogSchema)
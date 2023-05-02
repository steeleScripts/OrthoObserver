const Prayer = require('../models/Prayer')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const { Mongoose, default: mongoose } = require('mongoose')

// @desc Get all prayers
// @route GET /prayers
// @access Private
const getAllPrayers = asyncHandler(async (req, res) => {
    const prayers = await Prayer.find().lean()
    if (!prayers?.length) {
        return res.status(400).json({ message: 'No prayers found'})
    }
    return res.json(prayers)
})

// @desc Create a new prayer
// @route POST /prayers
// @access Private
const createNewPrayer = asyncHandler(async (req, res) => {
    const { text, username } = req.body
    
    // Confirm data
    if ( !text || !username ) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    // Check for duplicate
    const duplicate = await Prayer.findOne({ text }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate prayer'})
    }

    // Validate User ID
    const userMatch = await User.findOne({ username }).lean().exec()
    
    if (!userMatch) {
        return res.status(400).json({ message: 'Username not found make sure User has been added first' })
    }

    const prayerObject = { text, username }

    //Create and store new prayer
    const prayer = await Prayer.create(prayerObject)

    if (prayer) {
        res.status(201).json({ message: `NEW PRAYER\tText: ${prayer.text}\tUser: ${username}`})
    } else {
        res.status(400).json({ message: 'Invalid prayer recieved'})
    }
})

// @desc Update a prayer
// @route PATCH /prayers
// @access Private
const updatePrayer = asyncHandler(async (req, res) => {
    const { id, text, user } = req.body

    // Confirm data
    if ( !id ) {
        return res.status(400).json({ message: 'Prayer ID is required'})
    }

    if ( !text && !user ) {
        return res.status(400).json({ message: 'Need new prayer or User'})
    }

    // Look for Prayer by ID
    const prayer = await Prayer.findById(id).exec()

    if ( !prayer )  {
        return res.status(400).json({ message: 'Prayer not found'})
    }
    
    // Check for duplicate prayer 
    const duplicate = await Prayer.findOne({ text }).lean().exec()
    // Allow updates to the original prayer
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate prayer'})
    }

    // Check for duplicate User name if a user name was provided
    if (user){
        const duplicate = await Prayer.findById(id).lean().exec()
        console.log(`Duplicates found: ${duplicate} ${duplicate.user}`)
        
        // Allow updates to the original User
        if (duplicate.user == user) {
            return res.status(409).json({ message: 'Duplicate User - leave out User if you\'re not changing it'})
        }
    }

    const oldPrayer = new Prayer()
    oldPrayer.text = prayer.text
    oldPrayer.user = prayer.user

    if(text)    { prayer.text = text }
    if(user)   { prayer.user = user}    
    
    const updatedPrayer = await prayer.save()

    reply = `${oldPrayer.text} by ${oldPrayer.user} has changed to ${updatedPrayer.text} by ${updatedPrayer.user}`

    res.status(200).json({ message: reply })
    
})

// @desc Delete a prayer
// @route DELETE /prayers
// @access Private
const deletePrayer = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Prayer ID Required'})
    }

    const prayer = await Prayer.findById(id).exec()

    if(!prayer) {
        return res.status(400).json({ message: 'Prayer not found' })
    }

    const result = await prayer.deleteOne()

    const reply = `Prayer with ID ${result._id} deleted`

    res.status(200).json({ message: reply })
})

const getRecent5 = asyncHandler(async (req, res) => {
    const prayers = await Prayer.find().limit(5).sort({createdAt: -1}).exec()

    if(!prayers) { 
        return res.status(400).json({message: 'No prayers found'})
    }

    res.status(200).json(prayers)
})

module.exports = {
    getAllPrayers,
    createNewPrayer,
    updatePrayer,
    deletePrayer,
    getRecent5
}
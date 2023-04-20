const Holiday = require('../models/Holiday')
const asyncHandler = require('express-async-handler')
const { Mongoose, default: mongoose } = require('mongoose')

// @desc Get all holidays
// @route GET /holidays
// @access Private
const getAllHolidays = asyncHandler(async (req, res) => {
    const holidays = await Holiday.find().lean()
    if (!holidays?.length) {
        return res.status(400).json({ message: 'No holidays found'})
    }
    return res.json(holidays)
})

// @desc Create a new holiday
// @route POST /holidays
// @access Private
const createNewHoliday = asyncHandler(async (req, res) => {
    const { date, name } = req.body
    
    // Confirm data
    if ( !date || !name ) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    const dateCheck = new Date(date)

    console.log(dateCheck)

    if(typeof dateCheck !== new Date()) {
        return res.status(400).json({message: 'Date must be in ISO format YYYY-MM-DD'})
    }

    // Check for duplicate
    const duplicate = await Holiday.findOne({ date }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate holiday'})
    }

    const holidayObject = { date, name }

    //Create and store new holiday
    const holiday = await Holiday.create(holidayObject)

    if (holiday) {
        res.status(201).json({ message: `NEW HOLIDAY\tDate: ${holiday.date}\tName: ${holiday.name}`})
    } else {
        res.status(400).json({ message: 'Invalid holiday recieved'})
    }
})

// @desc Update a holiday
// @route PATCH /holidays
// @access Private
const updateHoliday = asyncHandler(async (req, res) => {
    const { id, date, name } = req.body

    // Confirm data
    if ( !id ) {
        return res.status(400).json({ message: 'Holiday ID is required'})
    }

    if ( !date && !name ) {
        return res.status(400).json({ message: 'Need new date or Name'})
    }

    // Look for Holiday by ID
    const holiday = await Holiday.findById(id).exec()

    if ( !holiday )  {
        return res.status(400).json({ message: 'Holiday not found'})
    }
    
    // Check for duplicate holiday 
    const duplicate = await Holiday.findOne({ date }).lean().exec()
    // Allow updates to the original holiday
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate holiday'})
    }

    // Check for duplicate Name name if a name name was provided
    if (name){
        const duplicate = await Holiday.findById(id).lean().exec()
        console.log(`Duplicates found: ${duplicate} ${duplicate.name}`)
        
        // Allow updates to the original Name
        if (duplicate.name == name) {
            return res.status(409).json({ message: 'Duplicate Name - leave out Name if you\'re not changing it'})
        }
    }

    const oldHoliday = new Holiday()
    oldHoliday.date = holiday.date
    oldHoliday.name = holiday.name

    if(date)    { holiday.date = date }
    if(name)   { holiday.name = name}    
    
    const updatedHoliday = await holiday.save()

    reply = `${oldHoliday.date} by ${oldHoliday.name} has changed to ${updatedHoliday.date} by ${updatedHoliday.name}`

    res.status(200).json({ message: reply })
    
})

// @desc Delete a holiday
// @route DELETE /holidays
// @access Private
const deleteHoliday = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Holiday ID Required'})
    }

    const holiday = await Holiday.findById(id).exec()

    if(!holiday) {
        return res.status(400).json({ message: 'Holiday not found' })
    }

    const result = await holiday.deleteOne()

    const reply = `Holiday with ID ${result._id} deleted`

    res.status(200).json({ message: reply })
})

module.exports = {
    getAllHolidays,
    createNewHoliday,
    updateHoliday,
    deleteHoliday
}
const Quote = require('../models/Quote')
const Saint = require('../models/Saint')
const asyncHandler = require('express-async-handler')
const { Mongoose } = require('mongoose')

// @desc Get all saints
// @route GET /saints
// @access Private
const getAllSaints = asyncHandler(async (req, res) => {
    const saints = await Saint.find().lean()
    if (!saints?.length) {
        return res.status(400).json({ message: 'No saints found'})
    }
    return res.json(saints)
})

// @desc Create a new saint
// @route POST /saints
// @access Private
const createNewSaint = asyncHandler(async (req, res) => {
    const { name } = req.body

    // Confirm data
    if (!name ) {
        return res.status(400).json({ message: 'A name is required'})
    }

    // Check for duplicate name
    const duplicate = await Saint.findOne({ name }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Saint name'})
    }

    const saintObject = { name }

    /* After Saint Controller implemented resolve saint name by id here
    var saintName = 'No saint'
    */ 

    //Create and store new quote
    const saint = await Saint.create(saintObject)

    if (saint) {
        res.status(201).json({ message: `NEW SAINT ADDED: ${saint.name}`})
    } else {
        res.status(400).json({ message: 'Invalid saint recieved'})
    }
})

// @desc Update a saint
// @route PATCH /saints
// @access Private
const updateSaint = asyncHandler(async (req, res) => {
    const { id, name } = req.body

    // Confirm data
    if (!id || !name ) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    // Look for Saint by ID
    const saint = await Saint.findById(id).exec()

    if (!saint) {
        return res.status(400).json({ message: 'Saint not found'})
    }
    
    // Check for duplicate Saint 
    const duplicate = await Quote.findOne({ name }).lean().exec()
    // Allow updates to the original quote
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate Saint Name found'})
    }

    const oldSaint = new Saint() 
    oldSaint.name = saint.name

    saint.name = name 
    
    const updatedSaint = await saint.save()

    reply = `${oldSaint.name} has changed to ${updatedSaint.name}`

    res.status(200).json({ message: reply })
    
})

// @desc Delete a saint
// @route DELETE /saints
// @access Private
const deleteSaint = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Saint ID Required'})
    }

    const saint = await Saint.findById(id).exec()

    if(!saint) {
        return res.status(400).json({ message: 'Saint not found' })
    }

    const hasQuotes = await Quote.findOne({saint: id}).exec()

    if(hasQuotes) {
        return res.status(400).json({ message: 'Saint has Quotes associated' })
    }

    const result = await saint.deleteOne()

    const reply = `Saint with ID ${result._id} deleted`

    res.status(200).json({ message: reply })
})

module.exports = {
    getAllSaints,
    createNewSaint,
    updateSaint,
    deleteSaint
}
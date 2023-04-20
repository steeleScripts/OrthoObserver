const Quote = require('../models/Quote')
const Saint = require('../models/Saint')
const asyncHandler = require('express-async-handler')
const { Mongoose, default: mongoose } = require('mongoose')

// @desc Get all quotes
// @route GET /quotes
// @access Private
const getAllQuotes = asyncHandler(async (req, res) => {
    const quotes = await Quote.find().lean()
    if (!quotes?.length) {
        return res.status(400).json({ message: 'No quotes found'})
    }
    return res.json(quotes)
})

// @desc Create a new quote
// @route POST /quotes
// @access Private
const createNewQuote = asyncHandler(async (req, res) => {
    const { text, saint } = req.body
    
    // Confirm data
    if ( !text || !saint ) {
        return res.status(400).json({ message: 'All fields are required'})
    }

    // Check for duplicate
    const duplicate = await Quote.findOne({ text }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate quote'})
    }

    // Validate Saint ID
    const saintMatch = await Saint.findById( saint ).lean().exec()
    console.log(saintMatch)
    if (!saintMatch) {
        return res.status(400).json({ message: 'Saint ID not found make sure Saint has been added first' })
    }

    const quoteObject = { text, saint }

    //Create and store new quote
    const quote = await Quote.create(quoteObject)

    if (quote) {
        res.status(201).json({ message: `NEW QUOTE\tText: ${quote.text}\tSaint: ${saintMatch.name}`})
    } else {
        res.status(400).json({ message: 'Invalid quote recieved'})
    }
})

// @desc Update a quote
// @route PATCH /quotes
// @access Private
const updateQuote = asyncHandler(async (req, res) => {
    const { id, text, saint } = req.body

    // Confirm data
    if ( !id ) {
        return res.status(400).json({ message: 'Quote ID is required'})
    }

    if ( !text && !saint ) {
        return res.status(400).json({ message: 'Need new quote or Saint'})
    }

    // Look for Quote by ID
    const quote = await Quote.findById(id).exec()

    if ( !quote )  {
        return res.status(400).json({ message: 'Quote not found'})
    }
    
    // Check for duplicate quote 
    const duplicate = await Quote.findOne({ text }).lean().exec()
    // Allow updates to the original quote
    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate quote'})
    }

    // Check for duplicate Saint name if a saint name was provided
    if (saint){
        const duplicate = await Quote.findById(id).lean().exec()
        console.log(`Duplicates found: ${duplicate} ${duplicate.saint}`)
        
        // Allow updates to the original Saint
        if (duplicate.saint == saint) {
            return res.status(409).json({ message: 'Duplicate Saint - leave out Saint if you\'re not changing it'})
        }
    }

    const oldQuote = new Quote()
    oldQuote.text = quote.text
    oldQuote.saint = quote.saint

    if(text)    { quote.text = text }
    if(saint)   { quote.saint = saint}    
    
    const updatedQuote = await quote.save()

    reply = `${oldQuote.text} by ${oldQuote.saint} has changed to ${updatedQuote.text} by ${updatedQuote.saint}`

    res.status(200).json({ message: reply })
    
})

// @desc Delete a quote
// @route DELETE /quotes
// @access Private
const deleteQuote = asyncHandler(async (req, res) => {
    const { id } = req.body

    if(!id) {
        return res.status(400).json({ message: 'Quote ID Required'})
    }

    const quote = await Quote.findById(id).exec()

    if(!quote) {
        return res.status(400).json({ message: 'Quote not found' })
    }

    const result = await quote.deleteOne()

    const reply = `Quote with ID ${result._id} deleted`

    res.status(200).json({ message: reply })
})

const getRandomQuote = asyncHandler(async (req, res) => {
    const quotes = await Quote.find().lean()         // Get all quotes
    const random = Math.floor(Math.random() * quotes.length) // Get random int between 1 and number of quotes
    const quote = await Quote.findOne().skip(random) // Get the quote at the position of the random number
    const saint = await Saint.findById(quote.saint).lean()

    const result = {text: quote.text, name: saint.name}

    if (!quote){
        return res.status(400).json({ message: 'No Quotes Found' })
    }

    return res.status(200).json(result)
})

module.exports = {
    getAllQuotes,
    createNewQuote,
    updateQuote,
    deleteQuote,
    getRandomQuote
}
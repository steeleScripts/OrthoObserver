const ModLog = require('../models/ModLog')
const Prayer = require('../models/Prayer')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const { Mongoose, default: mongoose } = require('mongoose')

const getFlaggedPrayers = asyncHandler(async (res) => {
    const prayers = await Prayer.find({ flagged: true }).sort({createdAt: 1}).lean()
    if (!prayers?.length) {
        return res.status(400).json({ message: 'No prayers found'})
    }
    return res.json(prayers)
})

const getFlaggedUsers = asyncHandler(async (req, res) => {
    const users = await User.find({ flagged: true }).sort({createdAt: 1}).lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'No users found'})
    }
    return res.json(users)
})

const getTotals = asyncHandler(async (req, res) => {
    const prayers = await Prayer.find({ flagged: true }).sort({createdAt: 1}).lean()
    let prayerCount, userCount
    if (!prayers?.length) {
        prayerCount = 0
    } else { prayerCount = prayers.length }

    const users = await User.find({ flagged: true }).sort({createdAt: 1}).lean()
    if (!users?.length) {
        userCount = 0 
    } else { usersCount = users.length }

    const totals = {
        prayers: prayers.length,
        users: users.length
    }

    return res.json(totals)
})

const flagPrayer = asyncHandler(async (req, res) => {
    const { prayerId, username, reason } = req.body
    const prayer = await Prayer.findById({prayerId}, 'username').lean()
    let message = ``

    if(!prayer) {
        message = 'Prayer not found'
        return res.status(400).json(message)
    }

    if(prayer.isFlagged) {
        message = `Prayer with ID: ${ prayerId } written by ${prayer.username} was flagged again by ${username} for ${reason}`
        await this.logEvent(message)
    } else {
        message = `Prayer with ID: ${ prayerId } written by ${ prayer.username } was flagged by ${ username } for ${reason}`
        prayer.isFlagged = true
        await prayer.save()
        await this.logEvent(message)
        return res.status(200).json(message)
    }
})

const flagUser = asyncHandler(async (req, res) => {
    const { userId, username, reason } = req.body
    const user = await User.findById({userId}, 'username').lean()
    let message = ``

    if(!user) {
        message = 'User not found'
        return res.status(400).json(message)
    }

    if(user.isFlagged) {
        message = `User: ${ user.username } was flagged again by ${username} for ${reason}`
        await this.logEvent(message)
    } else {
        message = `User: ${ user.username } was flagged by ${username} for ${reason}`
        user.isFlagged = true
        await user.save()
        await this.logEvent(message)
        return res.status(200).json(message)
    }
})

const unflagPrayer = asyncHandler(async (req, res) => {
    const { prayerId, username, reason } = req.body
    const prayer = await Prayer.findById({prayerId}, 'username').lean()
    let message = ``

    if(!prayer) {
        message = 'Prayer not found'
        return res.status(400).json(message)
    }

    if(!prayer.isFlagged) {
        message = `Prayer with ID: ${ prayerId } written by ${prayer.username} is not currently flagged`
        return res.status(400).json(message)
    } else {
        message = `Prayer with ID: ${ prayerId } written by ${ prayer.username } was unflagged by ${ username }`
        prayer.isFlagged = true
        await prayer.save()
        await this.logEvent(message)
        return res.status(200).json(message)
    }
})

const unflagUser = asyncHandler(async (req, res) => {
    const { userId, username, reason } = req.body
    const user = await User.findById({userId}, 'username').lean()
    let message = ``

    if(!user) {
        message = 'User not found'
        return res.status(400).json(message)
    }

    if(!user.isFlagged) {
        message = `User: ${ user.username } was flagged again by ${username} for ${reason}`
        await this.logEvent(message)
    } else {
        message = `User: ${ user.username } was flagged by ${username} for ${reason}`
        user.isFlagged = true
        await user.save()
        await this.logEvent({username, event: message})
        return res.status(200).json(message)
    }
})

const getActivityLog = asyncHandler(async (res) => {
    const log = await ModLog.find().sort({createdAt: -1}).lean()
    if (!log?.length) {
        return res.status(400).json({ message: 'No log entries found'})
    }
    return res.json(log)
})

const logEvent = asyncHandler(async (req, res) => {
    const { username, event } = req.body
    if(!username || !event) {
        return res.status(400).json({ message: 'All fields required'})
    }    

    const logEntry = await ModLog.create(username, event)

})

module.exports = {
    getFlaggedPrayers,
    getFlaggedUsers,
    getTotals,
    flagPrayer,
    flagUser,
    unflagPrayer,
    unflagUser,
    getActivityLog,
    logEvent
}
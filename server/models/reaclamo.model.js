import mongoose from 'mongoose'

const reclamo = new mongoose.Schema({
    type: {
        type: String,
        trim: true
    },
    motive:{
        type:String,
        trim: true
    },
    state:{
        type: String,
        trim: true
    },
    km : {
        type: String,
        trim: true
    },
    direction: {
        type: String,
        trim: true
    },
    clientName: {
        type: String,
        trim: true
    },
    callUser: {
        type: String,
        trim: true
    }
})
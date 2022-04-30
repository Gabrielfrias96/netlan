import mongoose from 'mongoose';

const alta = new mongoose.Schema({
    client : {
        name: {
            type: String,
            require: true,
            trim: true
        },
        dni: {
            type: String,
            require: true,
            trim: true
        },
        phone: {
            type: String,
            require: true,
            trim: true
        },
        direction: {
            type: String,
            require: true,
            trim: true
        }
    },
    service : {
        type: {
            type: String,
            require: true,
            trim: true
        },
        ip : {
            type: String,
            require: true,
            trim: true
        },
        cardNum : {
            type: String,
            require: true,
            trim: true
        },
        plan: {
            type: String,
            require: true,
            trim: true
        }
    },
    installer: {
        name : {
            type: String,
            require: true,
            trim: true
        },
        lastName: {
            type: String,
            require: true,
            trim: true
        },
        dni: {
            type: String,
            require: true,
            trim: true
        },
        phone: {
            type: String,
            require: true,
            trim: true
        }
    },
    img1: {
        type: String,
        trim: true
    },
    img2: {
        type: String,
        trim: true
    },
    img3: {
        type: String,
        trim: true
    },
    timestamp: {
        type: Date,
        default: new Date
    }
})


export default mongoose.model('Altas' , alta)
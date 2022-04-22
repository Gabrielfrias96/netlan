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
    images: [
        {
            img : { 
                type: String,
                rim: true
            }
        },
        {
            img : { 
                type: String,
                rim: true
            }
        },
        {
            img : { 
                type: String,
                rim: true
            }
        }
    ]
})


export default mongoose.model('Altas' , alta)
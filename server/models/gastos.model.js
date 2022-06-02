import mongoose from 'mongoose';

const gasto = new mongoose.Schema({
    type : {
       type: String,
       trim: true 
    },
    description: {
        type: String,
        trim: true
    },
    amount: {
        type: String,
        trim: true
    },
    instName: {
        type: String,
        trim: true
    },
    instLastName: {
        type: String,
        trim: true
    },
    timestamp : {
        type: Date,
        default : new Date()
    }
})

export default mongoose.model('Gastos' , gasto)
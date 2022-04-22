import mongoose from 'mongoose';


const users = new mongoose.Schema({
    name: { 
        type: String, 
        require: true, 
        trim: true
    },
    lastName: { 
        type: String, 
        require: true, 
        trim: true
    },
    email: { 
        type: String,
        require: true, 
        trim: true
    },
    password: { 
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
    role:{
        type: String,
        require: true, 
        trim: true
    },
    timestamp: {
        type: Date, 
        require: true, 
        default: new Date()
    }

})

export default mongoose.model('Users', users)
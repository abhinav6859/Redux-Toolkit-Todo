import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
    
        
    },
    

   completed: {
      type: Boolean,
      default: false
    },

    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
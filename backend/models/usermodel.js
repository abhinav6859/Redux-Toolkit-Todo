import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
          trim: true       //Removes extra spaces
    },
    date: {
        type: Date,
      default: Date.now,
    required: true
    
        
    },
    

   completed: {
      type: Boolean,
      default: false,
      trim: true
    },

    description: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const userModel = mongoose.models.user || mongoose.model('user', userSchema);
export default userModel;
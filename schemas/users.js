    import mongoose from "mongoose";

    const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
          },
        email: {
          type: String,
          required: true,
          unique: true,
          lowercase: true,
          trim: true,
        },
        password: {
          type: String,
          required: true,
          trim: true,
        },
       admin_user:{
           type: Boolean
       },
      }, {timestamps: true}
    );

          
         export default mongoose.model('User', userSchema);


    

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Haremos un modelo que contenga email, password y dos timestamps: createdAt y updatedAt
const userSchema= new Schema(
    {
        username: {type: String},
        email:{type:String, required:true, unique:true},
        password:{type:String, required:true},
        tasks: [{ type: Schema.Types.ObjectId, ref: 'Todo' }],
        
    },
    {
        timestamps:{
            createdAt: "created_at",
            updatedAt: "updated_at", 
        },
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;

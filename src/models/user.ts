import mongoose, { model, Schema, models } from "mongoose";
import bcrypt  from "bcryptjs";//helps in hashing 

export interface IUser{
    name : string;
    email: string;
    password: string;
    role : "Examiner" | "Admin" | "Student"; // enum values for Role        
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser> ({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["Examiner", "Admin", "Student"] }, 
},
    {timestamps : true},
);

//hash the password before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) { // agar password modified hai toh password ko hash karke save karega
        this.password = await bcrypt.hash(this.password, 10); 
     }
     next();
});

const User =  models?.User || model<IUser>("User", userSchema);
export default User
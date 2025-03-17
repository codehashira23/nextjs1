import mongoose, { Schema, model, models } from "mongoose";

export interface IAuthLog {
  user: mongoose.Types.ObjectId;
  login_time: Date;
  logout_time?: Date;
  ip_address?: string;
}

const authLogSchema = new Schema<IAuthLog>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    login_time: { type: Date, default: Date.now },
    logout_time: { type: Date },
    ip_address: { type: String },
  },
  { timestamps: true }
);

const AuthLog = models.AuthLog || model<IAuthLog>("AuthLog", authLogSchema);
export default AuthLog;

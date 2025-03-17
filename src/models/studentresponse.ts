import mongoose, { Schema, model, models } from "mongoose";

export interface IStudentResponse {
  student: mongoose.Types.ObjectId;
  exam: mongoose.Types.ObjectId;
  question: mongoose.Types.ObjectId;
  selected_option: "A" | "B" | "C" | "D";
  is_correct: boolean;
  timestamp?: Date;
}

const studentResponseSchema = new Schema<IStudentResponse>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
    selected_option: { type: String, enum: ["A", "B", "C", "D"], required: true },
    is_correct: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const StudentResponse = models.StudentResponse || model<IStudentResponse>("StudentResponse", studentResponseSchema);
export default StudentResponse;

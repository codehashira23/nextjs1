import mongoose, { Schema, model, models } from "mongoose";

export interface IExamResult {
  student: mongoose.Types.ObjectId;
  exam: mongoose.Types.ObjectId;
  total_marks: number;
  status: "Pass" | "Fail";
}

const examResultSchema = new Schema<IExamResult>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
    total_marks: { type: Number, required: true },
    status: { type: String, enum: ["Pass", "Fail"], required: true },
  },
  { timestamps: true }
);

const ExamResult = models.ExamResult || model<IExamResult>("ExamResult", examResultSchema);
export default ExamResult;

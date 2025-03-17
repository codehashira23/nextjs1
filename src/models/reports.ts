import mongoose, { Schema, Document } from "mongoose";

interface IReport extends Document {
  studentId: mongoose.Types.ObjectId;
  examId: mongoose.Types.ObjectId;
  score: number;
  feedback: string;
  createdAt: Date;
}

const ReportSchema = new Schema<IReport>(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    examId: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
    score: { type: Number, required: true },
    feedback: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema);

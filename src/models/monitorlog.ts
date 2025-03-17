import mongoose, { Schema, model, models } from "mongoose";

export interface IExamMonitoring {
  student: mongoose.Types.ObjectId;
  exam: mongoose.Types.ObjectId;
  action: string;
}

const examMonitoringSchema = new Schema<IExamMonitoring>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
    action: { type: String, required: true },
  },
  { timestamps: true }
);

const ExamMonitoring = models.ExamMonitoring || model<IExamMonitoring>("ExamMonitoring", examMonitoringSchema);
export default ExamMonitoring;

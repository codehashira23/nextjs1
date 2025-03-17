import mongoose, { Schema, model, models } from "mongoose";

export interface IExam {
  title: string;
  description?: string;
  examiner: mongoose.Types.ObjectId;
  start_time: Date;
  end_time: Date;
  max_marks: number;
  pass_marks: number;
  createdAt?: Date;
}

const examSchema = new Schema<IExam>(
  {
    title: { type: String, required: true },
    description: { type: String },
    examiner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    max_marks: { type: Number, required: true },
    pass_marks: { type: Number, required: true },
  },
  { timestamps: true }
);

const Exam = models.Exam || model<IExam>("Exam", examSchema);
export default Exam;

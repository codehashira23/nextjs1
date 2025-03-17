import mongoose, { Schema, model, models } from "mongoose";

export interface IQuestion {
  exam: mongoose.Types.ObjectId;
  question_text: string;
  options: { A: string; B: string; C: string; D: string };
  correct_option: "A" | "B" | "C" | "D";
  marks: number;
}

const questionSchema = new Schema<IQuestion>(
  {
    exam: { type: Schema.Types.ObjectId, ref: "Exam", required: true },
    question_text: { type: String, required: true },
    options: {
      A: { type: String, required: true },
      B: { type: String, required: true },
      C: { type: String, required: true },
      D: { type: String, required: true },
    },
    correct_option: { type: String, enum: ["A", "B", "C", "D"], required: true },
    marks: { type: Number, required: true },
  },
  { timestamps: true }
);

const Question = models.Question || model<IQuestion>("Question", questionSchema);
export default Question;

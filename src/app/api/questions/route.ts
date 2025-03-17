import { NextRequest, NextResponse } from "next/server";
import Question from "../../../models/questions";
import {connectToDatabase} from "../../../lib/db";

export async function GET() {
  await connectToDatabase();
  const questions = await Question.find();
  return NextResponse.json({ questions }, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { question, options, correctAnswer } = await req.json();
  const newQuestion = await Question.create({ question, options, correctAnswer });
  return NextResponse.json({ message: "Question added", question: newQuestion }, { status: 201 });
}

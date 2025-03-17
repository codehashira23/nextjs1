import { NextRequest, NextResponse } from "next/server";
import Exam from "../../../models/exams";
import {connectToDatabase} from "../../../lib/db";

export async function GET() {
  await connectToDatabase();
  const exams = await Exam.find();
  return NextResponse.json({ exams }, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectToDatabase();
  const { title, date, questions } = await req.json();
  const newExam = await Exam.create({ title, date, questions });
  return NextResponse.json({ message: "Exam created", exam: newExam }, { status: 201 });
}

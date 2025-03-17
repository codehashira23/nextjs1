import { NextRequest, NextResponse } from "next/server";
import {connectToDatabase} from "../../../lib/db";
import Report from "../../../models/reports";

export async function GET() {
  await connectToDatabase();
  const reports = await Report.find().populate("studentId examId");
  return NextResponse.json({ reports }, { status: 200 });
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { studentId, examId, score, feedback } = await req.json();

    if (!studentId || !examId || score === undefined) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newReport = await Report.create({ studentId, examId, score, feedback });

    return NextResponse.json({ message: "Report submitted", report: newReport }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error", error }, { status: 500 });
  }
}

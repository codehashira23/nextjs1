import { NextRequest, NextResponse } from "next/server";
import {connectToDatabase} from "../../../lib/db";
import ExamMonitoring from "../../../models/monitorlog";

export async function GET() {
  try {
    await connectToDatabase();
    const logs = await ExamMonitoring.find().populate("student exam").exec();

    return NextResponse.json({ logs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching monitoring logs", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { student, exam, action } = await req.json();

    if (!student || !exam || !action) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const newLog = new ExamMonitoring({ student, exam, action });
    await newLog.save();

    return NextResponse.json({ message: "Action logged successfully", log: newLog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error logging action", error }, { status: 500 });
  }
}

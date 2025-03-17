import { NextRequest, NextResponse } from "next/server";
import {connectToDatabase} from "../../../lib/db";
import StudentResponse from "../../../models/studentresponse";

export async function GET() {
  try {
    await connectToDatabase();
    const submissions = await StudentResponse.find()
      .populate("student exam question")
      .exec();

    return NextResponse.json({ submissions }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching submissions", error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const { student, exam, responses } = await req.json();

    if (!student || !exam || !responses || !Array.isArray(responses)) {
      return NextResponse.json({ message: "Missing or invalid data" }, { status: 400 });
    }

    const submissions = responses.map((response: any) => ({
      student,
      exam,
      question: response.question,
      selected_option: response.selected_option,
      is_correct: response.is_correct,
    }));

    const savedSubmissions = await StudentResponse.insertMany(submissions);

    return NextResponse.json(
      { message: "Submission recorded successfully", submissions: savedSubmissions },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error saving submission", error }, { status: 500 });
  }
}

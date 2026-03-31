import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/db"; // ✅ use this for now

export async function GET() {
  await connectDB();

  return NextResponse.json({
    message: "Local MongoDB Connected",
  });
}
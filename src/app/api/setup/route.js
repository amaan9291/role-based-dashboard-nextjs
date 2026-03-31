import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../../lib/db";
import User from "../../../models/User";

export async function GET() {
  await connectDB();

  const hashedPassword = await bcrypt.hash("admin123", 10);

  const user = await User.create({
    name: "Super Admin",
    email: "admin@test.com",
    phone: "9999999999",
    password: hashedPassword,
    role: "SUPER_ADMIN",
  });

  return NextResponse.json(user);
}
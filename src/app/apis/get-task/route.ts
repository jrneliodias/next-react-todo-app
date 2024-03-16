import { NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET() {
  try {
    const task = await prisma.task.findMany();

    return Response.json({ task });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        error,
      },
      { status: 500 }
    );
  }
}

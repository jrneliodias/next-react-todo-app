import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function POST(req: NextRequest) {
  const { id, content, favorite, color } = await req.json();

  try {
    const task = await prisma.task.create({
      data: {
        id,
        content,
        favorite,
        color,
      },
    });
    return Response.json({ message: "OK", task });
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

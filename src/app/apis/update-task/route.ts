import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function PUT(req: NextRequest) {
  const { id, content, favorite, color, completed } = await req.json();
  try {
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        content,
        favorite,
        color,
        completed,
      },
    });
    return NextResponse.json({ message: "OK", task });
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

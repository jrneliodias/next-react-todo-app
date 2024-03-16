import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  try {
    const task = await prisma.task.delete({
      where: {
        id,
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

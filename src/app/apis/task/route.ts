import { NextRequest, NextResponse } from "next/server";
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

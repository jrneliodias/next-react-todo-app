import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/db";

export async function GET(req: NextRequest){
    console.log(req.nextUrl.searchParams)
    return Response.json({message:'OK'})
}

export async function POST(req: Request){
    const {content,favorite,color} = await req.json()
    console.log(content,favorite,color)
    try {
        const task = await prisma.task.create({
            data:{
                content,
                favorite,
                color
            }
        })
        return Response.json({message:'OK',task})
    } catch (error) {
        return NextResponse.json(
            {
                message:"Error",
                error,
            },
            {status:500,}
        )
    }
    
    
  
}


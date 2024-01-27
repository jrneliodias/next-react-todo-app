import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
    console.log(req.nextUrl.searchParams)
    return Response.json({message:'OK'})
}

export async function POST(req: Request){
    const {content,favorite,color} = await req.json()
    console.log(content,favorite,color)
    return Response.json({message:'OK',content,favorite,color})
  
}


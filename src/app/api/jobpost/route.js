import { NextResponse } from "next/server";
export const runtime = 'edge';


export async function POST(req) {
    try {
        const data = await req.json();

        const response = await fetch(`${process.env.BASE_URL}/post/job`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        const result = await response.json();

      

        const nextResponse = NextResponse.json({ message: "API successful", result });

        return nextResponse;
    } catch (err) {
        return NextResponse.json({ message: "API error", error: err.message }, { status: 500 });
    }
}

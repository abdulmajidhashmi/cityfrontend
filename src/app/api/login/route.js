import { NextResponse } from "next/server";
export const runtime = 'edge';

export async function POST(req) {
    try {
        const actualdata = await req.json();
        

        const response = await fetch(`${process.env.BASE_URL}/user/login`, {
            method: "POST",
            body: JSON.stringify({ phone: actualdata }) ,
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        const result = await response.json();
        console.log(result)

        const setCookieHeader = response.headers.get("set-cookie");

        const nextResponse = NextResponse.json({ message: "API successful", result });

        if (setCookieHeader) {
            nextResponse.headers.set("Set-Cookie", setCookieHeader);
        }

        return nextResponse;
    } catch (err) {
        return NextResponse.json({ message: "API error", error: err.message }, { status: 500 });
    }
}

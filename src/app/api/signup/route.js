import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const data = await req.json();
        const response = await fetch(`${process.env.BASE_URL}/user/signup`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
            credentials:"include"
        });

        const result = await response.json();

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

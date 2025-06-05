import { NextResponse } from "next/server";
export const runtime = 'edge';

export async function POST(req) {
  try {
    const data = await req.json();

    // Get cookies from the incoming request headers
    const cookieHeader = req.headers.get('cookie') || '';

    const response = await fetch(`${process.env.BASE_URL}/majidlogin/get`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 
        "Content-Type": "application/json",
        "cookie": cookieHeader  // Forward cookies manually
      },
    });

    const result = await response.json();

    return NextResponse.json({ message: "API successful", result });
  } catch (err) {
    return NextResponse.json({ message: "API error", error: err.message }, { status: 500 });
  }
}

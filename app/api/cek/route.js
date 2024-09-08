// app/api/cek/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { userId, zoneId } = await req.json();

    const externalRes = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, zoneId }),
    });

    const data = await externalRes.json();

    return NextResponse.json(data, { status: externalRes.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: "GET method is not allowed" },
    { status: 405 }
  );
}

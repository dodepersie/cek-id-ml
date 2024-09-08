import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(
    { message: "Mau cari apa bang? Gaada apa-apa loh.." },
    { status: 404 }
  );
}

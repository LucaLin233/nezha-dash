import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

export async function POST(req: Request) {
  const { password } = await req.json();
  const session = await getSession();

  if (password === process.env.SITE_PASSWORD) {
    session.isLoggedIn = true;
    await session.save();
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 401 });
  }
}

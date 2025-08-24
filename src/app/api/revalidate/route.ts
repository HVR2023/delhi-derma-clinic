import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret');
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  const path = req.nextUrl.searchParams.get('path') || '/';
  const tag  = req.nextUrl.searchParams.get('tag');

  if (tag) {
    revalidateTag(tag);
  } else {
    revalidatePath(path);
  }
  return NextResponse.json({ revalidated: true, path, tag });
}

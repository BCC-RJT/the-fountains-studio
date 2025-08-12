// Node.js runtime (not edge) so we can read the filesystem
export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'gallery_images');
    const files = fs.readdirSync(dir);

    // allow common image extensions, case-insensitive
    const images = files
      .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
      // return public paths
      .map((f) => `/gallery_images/${f}`);

    return NextResponse.json({ images });
  } catch (e) {
    return NextResponse.json({ images: [] }, { status: 200 });
  }
}

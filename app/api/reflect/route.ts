import { NextRequest } from 'next/server';
import { generateQuantumReflection } from '@/lib/generator';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    const text = generateQuantumReflection(typeof prompt === 'string' ? prompt : '');
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
  }
}

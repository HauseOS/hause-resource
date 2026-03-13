import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== "hause-resource-revalidate-2026") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Use dynamic import to avoid bundling pg in edge runtime
    const pg = await import("pg");
    const { Client } = pg.default;

    const client = new Client({
      connectionString:
        "postgresql://postgres.oehtqgwwpllsmexmohuc:bLuehub3tV7Qia5E@aws-0-ap-southeast-2.pooler.supabase.com:5432/postgres",
      ssl: { rejectUnauthorized: false },
    });

    await client.connect();
    await client.query(`
      ALTER TABLE resource_tools
        ADD COLUMN IF NOT EXISTS situations TEXT[] DEFAULT ARRAY[]::TEXT[],
        ADD COLUMN IF NOT EXISTS skip_if TEXT,
        ADD COLUMN IF NOT EXISTS audience_discount TEXT
    `);
    await client.end();

    return NextResponse.json({ ok: true, message: "Migration complete" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

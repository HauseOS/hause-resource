import pg from "pg";
const { Client } = pg;

const client = new Client({
  connectionString: "postgresql://postgres.oehtqgwwpllsmexmohuc:HauseOps2026!Secure@aws-1-ap-southeast-2.pooler.supabase.com:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

await client.connect();

await client.query(`
  ALTER TABLE resource_tools
    ADD COLUMN IF NOT EXISTS situations TEXT[] DEFAULT ARRAY[]::TEXT[],
    ADD COLUMN IF NOT EXISTS skip_if TEXT,
    ADD COLUMN IF NOT EXISTS best_for TEXT,
    ADD COLUMN IF NOT EXISTS audience_discount TEXT;
`);

console.log("✓ Columns added: situations, skip_if, best_for, audience_discount");
await client.end();

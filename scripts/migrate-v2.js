import pg from "pg";
import { lookup } from "dns/promises";

const { Client } = pg;

// Resolve IPv4 address for the pooler host
const POOLER_HOST = "aws-0-ap-southeast-2.pooler.supabase.com";
const { address: ipv4 } = await lookup(POOLER_HOST, { family: 4 });
console.log("Resolved pooler to IPv4:", ipv4);

// Connect using IPv4 address but with explicit SNI servername
const client = new Client({
  host: ipv4,
  port: 5432,
  database: "postgres",
  user: "postgres.oehtqgwwpllsmexmohuc",
  password: "bLuehub3tV7Qia5E",
  ssl: {
    rejectUnauthorized: false,
    servername: POOLER_HOST,
  },
  // Ensure we send the right application_name
  application_name: "hause-migration",
});

try {
  await client.connect();
  console.log("Connected!");
  await client.query(`
    ALTER TABLE resource_tools
      ADD COLUMN IF NOT EXISTS situations TEXT[] DEFAULT ARRAY[]::TEXT[],
      ADD COLUMN IF NOT EXISTS skip_if TEXT,
      ADD COLUMN IF NOT EXISTS audience_discount TEXT
  `);
  console.log("Migration done: columns added");
} catch (e) {
  console.error("Error:", e.message);
} finally {
  await client.end();
}

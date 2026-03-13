import { createClient } from "@supabase/supabase-js";

const sb = createClient(
  "https://oehtqgwwpllsmexmohuc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laHRxZ3d3cGxsc21leG1vaHVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjE3NzM3MywiZXhwIjoyMDg3NzUzMzczfQ.ODFqqozk-nZveCesUhAtMUZaXtPyx070jC9lSLcKwPM"
);

// Try to select the new columns to see if they exist
const { data, error } = await sb
  .from("resource_tools")
  .select("id, situations, skip_if, best_for, audience_discount")
  .limit(1);

if (error) {
  console.log("Columns do not exist yet:", error.message);
} else {
  console.log("Columns exist! Sample:", data);
}

// Try exec_sql RPC
const { error: rpcError } = await sb.rpc("exec_sql", { sql: "SELECT 1" });
console.log("exec_sql RPC error:", rpcError?.message || "RPC works");

import { createClient } from "@supabase/supabase-js";
const sb = createClient(
  "https://oehtqgwwpllsmexmohuc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9laHRxZ3d3cGxsc21leG1vaHVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjE3NzM3MywiZXhwIjoyMDg3NzUzMzczfQ.ODFqqozk-nZveCesUhAtMUZaXtPyx070jC9lSLcKwPM"
);

const { error } = await sb.from("resource_tools").upsert({
  id: "test-col-check",
  name: "Test",
  category: "Test",
  description: "test",
  best_for: "test",
  pricing: "free",
  pricing_numeric: 0,
  affiliate_url: null,
  hause_pick: false,
  verdict: "test",
  published: false,
  sort_order: 999,
  situations: ["test1", "test2"],
  skip_if: "test",
  audience_discount: "test",
});

console.log("Error:", error?.message || "No error - columns exist already!");
if (!error) {
  await sb.from("resource_tools").delete().eq("id", "test-col-check");
  console.log("Cleaned up test row");
}

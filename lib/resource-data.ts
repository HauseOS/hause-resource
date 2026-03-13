import { supabase } from "./supabase";

// Match the DB column names exactly
export type Tool = {
  id: string;
  name: string;
  category: string;
  description: string;
  best_for: string;
  replaces: string;
  basis: string;
  pricing: string;
  pricing_numeric: number;
  affiliate_url: string;
  affiliate_note?: string;
  promo_code?: string;
  hause_pick: boolean;
  verdict: string;
  youtube_id?: string;
  logo_url?: string;
  published: boolean;
  sort_order: number;
};

export type GuideSection = {
  id: string;
  guide_id: string;
  section_type: "prose" | "tool_entry" | "comparison" | "opinion" | "alternatives" | "video_embed";
  sort_order: number;
  heading?: string;
  eyebrow?: string;
  anchor?: string;
  body?: string;
  data?: any;
};

export type Guide = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tldr: string;
  read_time: string;
  tool_count: number;
  tool_slugs: string[];
  hause_pick: boolean;
  status: "live" | "coming-soon";
  published: boolean;
  sort_order: number;
  meta_title?: string;
  meta_description?: string;
  sections?: GuideSection[];
};

export async function getTools(): Promise<Tool[]> {
  const { data, error } = await supabase
    .from("resource_tools")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) { console.error("getTools error:", error); return []; }
  return data || [];
}

export async function getTool(id: string): Promise<Tool | null> {
  const { data, error } = await supabase
    .from("resource_tools")
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();
  if (error) { console.error("getTool error:", error); return null; }
  return data;
}

export async function getGuides(): Promise<Guide[]> {
  const { data, error } = await supabase
    .from("resource_guides")
    .select("*")
    .eq("published", true)
    .order("sort_order", { ascending: true });
  if (error) { console.error("getGuides error:", error); return []; }
  return data || [];
}

export async function getGuide(id: string): Promise<Guide | null> {
  const { data: guide, error } = await supabase
    .from("resource_guides")
    .select("*")
    .eq("id", id)
    .eq("published", true)
    .single();
  if (error) { console.error("getGuide error:", error); return null; }

  const { data: sections } = await supabase
    .from("resource_guide_sections")
    .select("*")
    .eq("guide_id", id)
    .order("sort_order", { ascending: true });

  return { ...guide, sections: sections || [] };
}

import { afterEach, beforeEach, describe, expect, test } from "vitest";

import { getSupabaseEnv } from "@/lib/env";

const originalEnv = { ...process.env };

beforeEach(() => {
  process.env = { ...originalEnv };
});

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("getSupabaseEnv", () => {
  test("throws when environment variables are missing", () => {
    delete process.env.NEXT_PUBLIC_SUPABASE_URL;
    delete process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    expect(() => getSupabaseEnv()).toThrow(/Missing Supabase environment variables/);
  });

  test("returns the expected configuration when env is provided", () => {
    process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon_test_key";

    expect(getSupabaseEnv()).toEqual({
      url: "https://example.supabase.co",
      anonKey: "anon_test_key"
    });
  });
});

import { describe, expect, test } from "vitest";

import { formatCurrency } from "@/lib/utils";

describe("formatCurrency", () => {
  test("formats USD currency with 2 decimal places", () => {
    expect(formatCurrency(1234.5)).toBe("$1,234.50");
  });

  test("supports alternative currency codes", () => {
    expect(formatCurrency(9876.543, "CAD")).toBe("CA$9,876.54");
  });
});

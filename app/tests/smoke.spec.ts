import { expect, test } from "@playwright/test";

test("dashboard renders navigation and hero content", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Portfolio" })).toBeVisible();
});

test("can navigate to portfolio and settings pages", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Portfolio" }).click();
  await expect(page).toHaveURL("/portfolio");
  await expect(page.getByRole("heading", { name: "Portfolio" })).toBeVisible();

  await page.getByRole("link", { name: "Settings" }).click();
  await expect(page).toHaveURL("/settings");
  await expect(page.getByRole("heading", { name: "Settings" })).toBeVisible();
});

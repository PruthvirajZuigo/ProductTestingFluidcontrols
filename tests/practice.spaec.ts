import { test, expect, type Page } from "@playwright/test";

test.only('check Team Page', async ({ page }) => {
    await page.goto('https://Zuigo.ai/');
    await page.getByRole('link', { name: 'Team' }).click();
    await page.getByRole('link', { name: 'Pruthviraj Chavan' }).click();

    await expect(page).toHaveURL('https://zuigo.ai/team/d5e9b642-7dd9-4003-8fa4-a5f42eb371da');
    await expect(page.getByText('Pruthviraj Chavan')).toBeVisible();
});

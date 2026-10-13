import { test, expect, Locator } from '@playwright/test';

test.describe('Top bar navigation clicks', () => {
  let topBar: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.theelixrlabs.com/');
    topBar = page.locator('div.fixed').filter({
      has: page.getByRole('img', { name: 'Logo', exact: true }),
    });
  });

  test('Blogs navigates to /Blog', async ({ page }) => {
    await topBar.getByRole('link', { name: 'Blogs', exact: true }).click();
    await expect(page).toHaveURL(/\/Blog/);
  });

  test('News navigates to /News', async ({ page }) => {
    await topBar.getByRole('link', { name: 'News', exact: true }).click();
    await expect(page).toHaveURL(/\/News/);
  });

  test('Careers opens in a new tab', async ({ page }) => {
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'),
      topBar.getByRole('link', { name: 'Careers', exact: true }).click(),
    ]);
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL(/recruitment\.theelixrlabs\.com/);
  });

  test('Contact Us scrolls to the contact section', async ({ page }) => {
    await topBar.getByRole('link', { name: 'Contact Us', exact: true }).click();
    await expect(page).toHaveURL(/#contact-us/);
    await expect(page.locator('#contact-us')).toBeInViewport();
  });

  test('Who are we > Our Mission', async ({ page }) => {
    const whoAreWe = topBar.locator('div.group').filter({ hasText: 'Who are we' });
    await whoAreWe.hover();
    await whoAreWe.getByRole('link', { name: 'Our Mission' }).click();
    await expect(page).toHaveURL(/\/Vision#OurMission/);
  });

  test('Logo returns to home', async ({ page }) => {
    await page.goto('https://www.theelixrlabs.com/Blog');
    await page.getByRole('img', { name: 'Logo', exact: true }).click();
    await expect(page).toHaveURL('https://www.theelixrlabs.com/');
  });
});
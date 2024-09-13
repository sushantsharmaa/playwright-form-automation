import { test, expect } from '@playwright/test';
import { RegisterPageObject } from '../pages/RegisterPage';

let registerPO: RegisterPageObject;

test.describe('Validations and Submissions for Registration Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://onecompiler.com/html/42kh8j399');
    await page.click('text=Run');
    await page.waitForSelector('#ResultBrowserIframe');
    const frameElement = page.frameLocator('#ResultBrowserIframe');

    if (frameElement) {
      registerPO = new RegisterPageObject(frameElement);
    }
  });

  test('Fill out registration form with valid inputs', async ({ page }) => {
    await page.pause();
    await registerPO.fillName();
    await registerPO.fillEmail();
    await registerPO.fillPassword();
    await registerPO.fillConfirmPassword();
    await registerPO.fillDateOfBirth();
  });
});

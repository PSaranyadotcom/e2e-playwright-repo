import { test, expect } from '@playwright/test';
import { authenticator } from 'otplib';
import dotenv from 'dotenv';
import { Email, Password, Secret } from '../default/constants';

dotenv.config();

test('Login to Trello with TOTP (Authenticator App)', async ({ page }) => {
 
  // Step 1: Go to Trello login page
  await page.goto('https://trello.com/login');
  

  // Step 2: Enter email and continue
  await page.fill('input[type="email"]', Email);
  await page.getByRole("button", {name:"Continue"}).click();
  await page.fill("input[type='password']", Password);
  await page.getByTestId("login-submit-idf-testid").click();
//   await page.waitForSelector("login-submit-idf-testid");
   const otp = authenticator.generate(Secret);
  console.log(`Generated OTP: ${otp}`);
  await page.locator("input[name='otpCode']").fill(otp);

//   await page.getByText('login').click();

  // Step 3: Wait for Atlassian redirect
  // await page.waitForLoadState('networkidle');



 

 

  // Step 8: Verify successful login
  await page.waitForURL(/trello\.com\/(boards|u)/, { timeout: 30000 });
  await expect(page).toHaveURL(/trello\.com/);

  console.log('✅ Successfully logged into Trello!');
  await page.close();
});

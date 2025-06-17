// LinkedIn Login Page Object
import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/logger';

export class LinkedInLoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly loginUrl: string;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input#username');
    this.passwordInput = page.locator('input#password');
    this.signInButton = page.locator('button[type="submit"]');
    this.loginUrl = 'https://www.linkedin.com/login';
  }

  async goto() {
    Logger.info('Navigating to LinkedIn login page');
    await this.page.goto(this.loginUrl);
  }

  async login(username: string, password: string) {
    Logger.info('Filling in login credentials');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    Logger.info('Clicking Sign in button');
    await this.signInButton.click();
    Logger.info('Login successful, redirected to feed');
  }
}

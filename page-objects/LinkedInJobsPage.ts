// LinkedIn Jobs Page Object
import { Page, Locator } from '@playwright/test';
import { Logger } from '../utils/logger';

export class LinkedInJobsPage {
  readonly page: Page;
  readonly jobsNavButton: Locator;
  readonly jobSearchInput: Locator;
  readonly jobAlertToggle: Locator;
  readonly jobSearchTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jobsNavButton = page.locator('a[href="https://www.linkedin.com/jobs/?"] .global-nav__primary-link-text[title="Jobs"]');
    this.jobSearchInput = page.locator('input[id^="jobs-search-box-keyword-id"]');
    this.jobAlertToggle = page.locator('input[data-artdeco-toggle-button="true"][role="switch"]');
    this.jobSearchTitle = page.locator('#results-list__title');
  }

  async gotoJobs() {
    Logger.info('Clicking Jobs button');
    await this.jobsNavButton.click();
    await this.jobSearchInput.waitFor();
    Logger.info('Jobs page loaded');
  }

  async searchJob(title: string) {
    Logger.info(`Searching for job title: ${title}`);
    await this.jobSearchInput.click();
    await this.jobSearchInput.fill(title);
    await this.page.keyboard.press('Enter');
    Logger.info('Job search submitted');
  }

  async toggleJobAlert() {
    Logger.info('Toggling job alert button');
    await this.jobAlertToggle.waitFor({ state: 'visible' });
    await this.jobAlertToggle.focus();
    await this.jobAlertToggle.evaluate((el: HTMLElement) => el.click());
    Logger.info('Job alert toggled using JS click');
  }

  async getJobSearchTitleText() {
    Logger.info(`Getting job search title text`);
    return await this.jobSearchTitle.textContent();
  }

  async isJobAlertToggleTurnedOn() {
    Logger.info('Checking if job alert toggle is turned on');
    return await this.jobAlertToggle.getAttribute('aria-checked');
  }



}

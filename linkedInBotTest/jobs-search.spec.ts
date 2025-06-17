// Playwright test for LinkedIn Jobs search scenario
import { test, expect } from '../utils/logger';
import { LinkedInLoginPage } from '../page-objects/LinkedInLoginPage';
import { LinkedInJobsPage } from '../page-objects/LinkedInJobsPage';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.LINKEDIN_ID as string;
const PASSWORD = process.env.LINKEDIN_PASSWORD as string;

test('LinkedIn Jobs Search - Quality Assurance', async ({ page }) => {
  const loginPage = new LinkedInLoginPage(page);
  const jobsPage = new LinkedInJobsPage(page);

  await loginPage.goto();
  await loginPage.login(USERNAME, PASSWORD);

  await jobsPage.gotoJobs();
  await jobsPage.searchJob('Quality Assurance');
  
  // Add assertions as needed
  const jobTitleText = await jobsPage.getJobSearchTitleText();
  console.log('Job Search Title:', jobTitleText);
  await expect(jobTitleText?.trim()).toContain('Quality Assurance');
});


test('Verify LinkedIn Jobs Search Job has Set alert toggle button' , async ({ page }) => {  
  const loginPage = new LinkedInLoginPage(page);
  const jobsPage = new LinkedInJobsPage(page);

  await loginPage.goto();
  await loginPage.login(USERNAME, PASSWORD);

  await jobsPage.gotoJobs();
  await jobsPage.searchJob('Quality Assurance');
  
  // Toggle the job alert button
  await jobsPage.toggleJobAlert();
    
});



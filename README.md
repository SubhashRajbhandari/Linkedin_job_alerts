# LinkedIn Playwright Test Automation Framework

This project is a modular Playwright test automation framework for https://linkedin.com, following the Page Object Model (POM) pattern and advanced logging for debugging and maintainability.

## Features

- TypeScript-based Playwright setup
- Modular Page Object Model (POM) structure
- Advanced logging for debugging
- Scalable and maintainable architecture

## Getting Started

### Install dependencies

```
npm install
```

### Run all tests

```
npx playwright test
```

### Run tests in debug mode

```
npx playwright test --debug
```

### Open Playwright Test UI

```
npx playwright test --ui
```

## Project Structure

- `linkedInBotTest/` - Example tests (to be replaced with LinkedIn-specific tests)
- `tests-examples/` - Demo example tests
- `playwright.config.ts` - Playwright configuration
- `page-objects/` - (Recommended) Place your POM files here

## Best Practices

- Use the Page Object Model for all page interactions
- Implement advanced logging in each test and page object
- Keep tests modular and maintainable

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)

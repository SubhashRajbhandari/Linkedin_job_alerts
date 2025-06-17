// Utility for advanced logging
import { test as base, expect } from '@playwright/test';

export class Logger {
  static info(message: string) {
    console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
  }
  static error(message: string) {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
  }
  static debug(message: string) {
    if (process.env.DEBUG_LOGS === 'true') {
      console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`);
    }
  }
}

export { base as test, expect };

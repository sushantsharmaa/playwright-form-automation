import { type Page, type Locator, type FrameLocator } from '@playwright/test';

export class RegisterPageObject {
  readonly page: Page;
  readonly dobField: Locator;
  readonly nameField: Locator;
  readonly frame: FrameLocator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;

  constructor(frame: FrameLocator) {
    this.frame = frame;
    this.nameField = this.frame.locator('input[name="name"]');
    this.emailField = this.frame.locator('input[name="email"]');
    this.passwordField = this.frame.locator('input[name="password"]');
    this.confirmPasswordField = this.frame.locator(
      'input[name="confirm-password"]'
    );
    this.dobField = this.frame.locator('input[name="dob"]');
  }

  async fillName() {
    await this.nameField.fill('Sushant');
  }

  async fillEmail() {
    await this.emailField.fill('sushant@gmail.com');
  }

  async fillPassword() {
    await this.passwordField.fill('Sush@nt123');
  }

  async fillConfirmPassword() {
    await this.confirmPasswordField.fill('Sush@nt123');
  }

  async fillDateOfBirth() {
    await this.dobField.fill('1996-09-02');
  }
}

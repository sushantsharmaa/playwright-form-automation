import {
  expect,
  type Page,
  type Locator,
  type FrameLocator,
} from '@playwright/test';

export class RegisterPageObject {
  readonly page: Page;
  readonly dobField: Locator;
  readonly nameField: Locator;
  readonly frame: FrameLocator;
  readonly emailField: Locator;
  readonly genderField: Locator;
  readonly countryField: Locator;
  readonly passwordField: Locator;
  readonly musicCheckbox: Locator;
  readonly sportsCheckbox: Locator;
  readonly readingCheckbox: Locator;
  readonly confirmPasswordField: Locator;
  readonly termAndConditionCheckbox: Locator;

  constructor(frame: FrameLocator) {
    this.frame = frame;
    this.dobField = frame.locator('input[name="dob"]');
    this.genderField = frame.locator('select[name="gender"]');
    this.nameField = this.frame.locator('input[name="name"]');
    this.countryField = frame.locator('select[name="country"]');
    this.emailField = this.frame.locator('input[name="email"]');
    this.passwordField = this.frame.locator('input[name="password"]');
    this.termAndConditionCheckbox = this.frame.locator('input[name="terms"]');
    this.confirmPasswordField = this.frame.locator(
      'input[name="confirm-password"]'
    );
    this.musicCheckbox = frame.locator(
      'input[name="interests"][value="music"]'
    );
    this.sportsCheckbox = frame.locator(
      'input[name="interests"][value="sports"]'
    );
    this.readingCheckbox = frame.locator(
      'input[name="interests"][value="reading"]'
    );
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

  async selectGender() {
    await this.genderField.selectOption('Male');
    await expect(this.genderField).toHaveValue('male');
  }

  async selectCountry() {
    await this.countryField.selectOption('USA');
    await expect(this.countryField).toHaveValue('usa');
  }

  async selectInterests() {
    await this.musicCheckbox.click();
    await this.sportsCheckbox.click();
    await this.readingCheckbox.click();
    await expect(this.musicCheckbox).toBeChecked();
    await expect(this.sportsCheckbox).toBeChecked();
    await expect(this.readingCheckbox).toBeChecked();
  }

  async acceptTermsAndConditions() {
    await this.termAndConditionCheckbox.click();
    expect(this.termAndConditionCheckbox).toBeChecked();
  }
}

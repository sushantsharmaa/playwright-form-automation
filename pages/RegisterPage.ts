import {
  expect,
  type Page,
  type Locator,
  type FrameLocator,
} from '@playwright/test';
import { userData } from '../fixtures/userData';

export class RegisterPageObject {
  readonly page: Page;
  readonly dobField: Locator;
  readonly nameField: Locator;
  readonly frame: FrameLocator;
  readonly emailField: Locator;
  readonly genderField: Locator;
  readonly countryField: Locator;
  readonly submitButton: Locator;
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
    this.submitButton = frame.locator('button[type="submit"]');
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
    await this.nameField.fill(userData.name);
  }

  async fillEmail() {
    await this.emailField.fill(userData.email);
  }

  async fillPassword() {
    await this.passwordField.fill(userData.password);
  }

  async fillConfirmPassword() {
    await this.confirmPasswordField.fill(userData.confirmPassword);
  }

  async fillDateOfBirth() {
    await this.dobField.fill(userData.dob);
  }

  async selectGender() {
    await this.genderField.selectOption(userData.gender);
    await expect(this.genderField).toHaveValue(
      userData.gender.toLocaleLowerCase()
    );
  }

  async selectCountry() {
    await this.countryField.selectOption(userData.country);
    await expect(this.countryField).toHaveValue(
      userData.country.toLocaleLowerCase()
    );
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

  async submitDetails() {
    await this.submitButton.click();
  }
}

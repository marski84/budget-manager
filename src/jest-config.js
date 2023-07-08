const preset = require('jest-preset-angular/jest-preset');
// import 'jest-preset-angular/jest-prese;

module.exports = {
  ...preset,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: [
    'node_modules/(?!@angular|@ngrx|@material|rxjs|ngx-toastr)',
  ],

  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'html', 'js'],
};

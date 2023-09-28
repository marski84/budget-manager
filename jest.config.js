const preset = require('jest-preset-angular/jest-preset');

module.exports = {
  ...preset,
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx|@material|rxjs|ngx-toastr|@swimlane/ngx-charts)'],

  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  // modulePaths: ['<rootDir>/src/app/modules'],
  // moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    // "@ht/(.*)$": "<rootDir>/src/app/shared/$1",
    // '^src/(.*)$': '<rootDir>/src/$1',
    // '^app/(.*)$': '<rootDir>/src/app/$1',
    // '^assets/(.*)$': '<rootDir>/src/assets/$1',
    // '^environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.(ts|js|html|jsx|tsx)$': 'jest-preset-angular'
  }


}
// TypeError: configSet.processWithEsbuild is not a function

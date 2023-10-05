import type {Config} from 'jest';

const jestConfig: Config = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  // transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx|@material|rxjs|ngx-toastr|@swimlane/ngx-charts|mjs)'],
  // transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  modulePathIgnorePatterns: ["<rootDir>[/\\\\](build|docs|node_modules|scripts|dist)[/\\\\]"],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  // transform: {
  //   '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  // },


};

export default jestConfig;



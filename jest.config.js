/* eslint-disable @typescript-eslint/naming-convention */


const baseConfig = {
    preset: 'ts-jest',
    collectCoverageFrom: ['**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
    verbose: true,
    roots: ['<rootDir>'],
    testPathIgnorePatterns: ['node_modules', 'jestsetup', 'dist'],
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  };
  

/** @type {import('jest').Config} */
module.exports = {
  ...baseConfig,
  workerIdleMemoryLimit: '512MB',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '~.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  testEnvironment: 'node',
  reporters: [
    'default',
  ],
};

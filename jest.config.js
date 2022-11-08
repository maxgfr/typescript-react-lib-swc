/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testMatch: [
    '<rootDir>/**/*.test.{ts,tsx,js,jsx}',
    '<rootDir>/*.test.{ts,tsx,js,jsx}',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};

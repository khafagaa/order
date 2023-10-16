const path = require('path');

module.exports = {
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native|react-native|react-native-elements|react-native-vector-icons|native-base-.*|@react-native(-community)?)/)',
  ],

  clearMocks: true,
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [
    '/src/',
    '/app/',
    '/node_modules/',
    '/android/',
    '/ios/',
    // '/__tests__/',
    '/app.json',
    '/index.js',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    'app/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    // '!**/__tests__/**',
  ],
  verbose: true,
};

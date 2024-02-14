// You can learn more about each option below in the Jest docs: https://jestjs.io/docs/configuration.
// import '@testing-library/jest-dom'
module.exports = {
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  // testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  testMatch: ["**/__tests__/**/*.tsx", "**/?(*.)+(spec|test).tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/jest/"],
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],

  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  watchPlugins: ["jest-watch-typeahead/filename"],
  collectCoverage: true,
  // coverageThreshold: {
  //   global: {
  //     branches: 70,
  //     functions: 70,
  //     lines: 70,
  //     statements: 70
  //   }
  // },
  coverageReporters: ["json", "html"],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.*",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/src/components/**/*.stories.*",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // // Handle CSS imports (without CSS modules)
    // '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // // Handle image imports
    // // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$":
      "<rootDir>/__mocks__/fileMock.js",

    // Handle module aliases
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/lib(.*)$": "<rootDir>/src/lib$1",
    "^@/hooks(.*)$": "<rootDir>/hooks$1",
    "^@/mocks(.*)$": "<rootDir>/__mocks__$1",
    "^@/tests(.*)$": "<rootDir>/.jest$1",
    "^@/utils(.*)$": "<rootDir>/src/utils$1",
    "^@/constants(.*)$": "<rootDir>/src/constants$1",
    "^@/assets(.*)$": "<rootDir>/src/assets$1",
  },
}

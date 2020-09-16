module.exports = {
  cacheDirectory: '.jest-cache',
  coverageDirectory: '.jest-coverage',
  coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  coverageReporters: ['html', 'text'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 90,
      statements: 80,
    },
  },
  testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
  moduleNameMapper: { '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js' },
}

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test).+(ts|tsx|js)'],
  transform: {
    "'^.+\\.tsx?$": 'esbuild-jest',
    '^.+\\.svg$': '<rootDir>/transformers/svgTransform.js',
  },
};

module.export = {
	roots: [ '<rootDir>/src' ],
	transform: {
		'\\.(js|jsx)?$': 'babel-jest'
	},
	testMatch: [ '<rootDir>/src/**/__test__/*.test.js' ], // finds test
	moduleFileExtensions: [ 'js', 'jsx', 'json', 'node' ],
	testPathIgnorePatterns: [ '/node_modules/', '/public/' ],
	setupFilesAfterEnv: [ '@testing-library/jest-dom/extend-expect', '@testing-library/react/cleanup-after-each' ] // setupFiles before the tests are ran
};

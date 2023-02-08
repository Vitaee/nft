/* eslint-disable prettier/prettier */
export const transform = {
  '^.+\\.ts?$': 'ts-jest',
};
export const testEnvironment = 'node';
export const testRegex = './src/.*\\.(test|spec)?\\.(ts|ts)$';
export const moduleFileExtensions = ['ts', 'tsx', 'js', 'jsx', 'json', 'node'];
export const roots = ['<rootDir>/src'];

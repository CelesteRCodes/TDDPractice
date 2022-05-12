'use strict';

const answer = require('./combinePositiveIntegers');

describe('test to combine integers in given array into their largest possible combined number as a string', () => {
  
  it ('given an empty array, will return an empty string', () => {
    expect(typeof answer([])).toBe("string");
  });
  
  it ('given an integer, will return a string of that integer', () => {
    expect(typeof answer(1)).toBe("string");
  });
  
  it ('given 2 integers in array, will return the concatenated value as string in desc order', () => {
    expect(answer([1, 2])).toEqual("21");
  });
  
  it ('given array of integers, will return the concatenated value as a string in descending order', () => {
    expect(answer([1, 444, 33, 66, 2])).toEqual("444663321");
  });
  
});

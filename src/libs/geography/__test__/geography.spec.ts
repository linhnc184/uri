import {describe, expect, test} from '@jest/globals';
import { Geography } from './../index';

describe('sum module', () => {
  test('getURI', () => {
    expect(new Geography({
      lat: 12.123,
      lon: 12.123,
    }).getURI()).toBe('geo:12.123,12.123');
  });
});
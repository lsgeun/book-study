import { describe, test, expect } from 'vitest';
import { getImage, dayTokor } from './helper.js';

describe('Helper Function', () => {
  test('getImage function returns valid URL', () => {
    const path = 'example';
    const url = getImage(path);

    expect(url).not.toBeUndefined();
    expect(url).not.toBeNull();

    expect(url).toContain('assets/images/icon');
    expect(url).toContain('example.png');
  });
  test('dayTokor function correct day array', () => {
    const expected = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    expect(dayTokor.length).toBe(7);
    dayTokor.forEach((day) => {
      expect(typeof day).toBe('string');
    });
    expect(dayTokor).toEqual(expected);
  });
});

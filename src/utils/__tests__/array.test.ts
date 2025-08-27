import { unique, chunk, flatten, shuffle, intersection, difference } from '../array';

describe('Array Utils', () => {
  describe('unique', () => {
    it('should remove duplicates', () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c']);
      expect(unique([])).toEqual([]);
    });
  });

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
      expect(chunk([], 2)).toEqual([]);
      expect(chunk([1, 2, 3], 0)).toEqual([]);
    });
  });

  describe('flatten', () => {
    it('should flatten array', () => {
      expect(flatten([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
      expect(flatten([1, [2, [3, 4]], 5], 2)).toEqual([1, 2, 3, 4, 5]);
      expect(flatten([1, [2, [3, 4]], 5], 1)).toEqual([1, 2, [3, 4], 5]);
    });
  });

  describe('shuffle', () => {
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5];
      const shuffled = shuffle(arr);
      expect(shuffled).toHaveLength(5);
      expect(shuffled).toEqual(expect.arrayContaining(arr));
      expect(arr).toEqual([1, 2, 3, 4, 5]); // 原数组不变
    });
  });

  describe('intersection', () => {
    it('should find intersection', () => {
      expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
      expect(intersection(['a', 'b'], ['b', 'c'])).toEqual(['b']);
      expect(intersection([1, 2], [3, 4])).toEqual([]);
    });
  });

  describe('difference', () => {
    it('should find difference', () => {
      expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1]);
      expect(difference(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
      expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
    });
  });
});
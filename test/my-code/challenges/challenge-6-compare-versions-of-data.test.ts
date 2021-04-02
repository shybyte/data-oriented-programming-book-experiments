import {DataDiff} from '../../../src/do/my-code/chapter5/diff';
import {libraryData} from './test-data';

describe('Challenge 6 - Compare versions of data', () => {
  test('diff returns empty array for equal objects', () => {
    const diff = DataDiff.diff(libraryData, libraryData)
    expect(diff).toEqual({});
  });
});

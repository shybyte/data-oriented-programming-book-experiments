import {dbBookInfos, joinArrays, openLibBookInfos} from './join-arrays';

describe('join-arrays', () => {
  it('should join', () => {
    const joinedArrays = joinArrays(dbBookInfos, openLibBookInfos, 'isbn', 'isbn_13');
    console.log('joinedArrays', joinedArrays);
  });
});

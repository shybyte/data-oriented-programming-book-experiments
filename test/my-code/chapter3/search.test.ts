import {Library} from '../../../src/do/data-model';
import {bookInfo, searchBooksByTitleJSON} from '../../../src/do/my-code/chapter3/search';

const libraryData: Library = {
  'name': 'The smallest library on earth',
  'address': 'Here and now',
  'catalog': {
    'booksByIsbn': {
      '978-1779501127': {
        'isbn': '978-1779501127',
        'title': 'Watchmen',
        'publicationYear': 1987,
        'authorIds': ['alan-moore',
          'dave-gibbons'],
        'bookItems': [
          {
            'id': 'book-item-1',
            purchaseDate: '2000',
            'rackId': 'rack-17',
            'isLent': true
          },
          {
            'id': 'book-item-2',
            purchaseDate: '2000',
            'rackId': 'rack-17',
            'isLent': false
          }
        ]
      }
    },
    'authorsById': {
      'alan-moore': {
        id: 'alan-moore',
        'name': 'Alan Moore',
        'bookIsbns': ['978-1779501127']
      },
      'dave-gibbons': {
        id: 'dave-gibbons',
        'name': 'Dave Gibbons',
        'bookIsbns': ['978-1779501127']
      }
    }
  },
  'userManagement': {
    membersByEmail: {},
    librariansByEmail: {}
  }
};

describe('search', () => {
  test('searchBooksByTitleJSON should return the correct result', () => {
    const result = searchBooksByTitleJSON(libraryData, 'Watchmen');
    expect(JSON.parse(result)).toEqual([{
      'title': 'Watchmen',
      'isbn': '978-1779501127',
      'authorNames': ['Alan Moore', 'Dave Gibbons']
    }]);
  });

  test('bookInfo returns a statically typed result', () => {
    const bookInfoResult = bookInfo(libraryData.catalog, libraryData.catalog.booksByIsbn['978-1779501127']);

    // TypeScript can infer all attributes and their types.
    bookInfoResult.title.toLowerCase();
    bookInfoResult.isbn.toLowerCase();
    bookInfoResult.authorNames.map(name => name.toLowerCase());

    // TypeScript knows the types and complains if you use them wrongly.
    // @ts-expect-error
    const product = bookInfoResult.isbn * 10;

    // TypeScript won't compile if you an attribute that not exist.
    // @ts-expect-error
    bookInfoResult.something;

    // publicationYear exist on a book but not in the result of bookInfo.
    // TypeScript can infer this from the code in bookInfo.
    // @ts-expect-error
    bookInfoResult.publicationYear;
  });
});

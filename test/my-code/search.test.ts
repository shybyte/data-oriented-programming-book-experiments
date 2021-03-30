import {Library} from '../../src/do/data-model';
import {searchBooksByTitleJSON} from '../../src/do/my-code/chapter3/search';

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
    // omitted for now
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

  test('searchBooksByTitleJSON should return the correct result', () => {
    const result = searchBooksByTitleJSON(libraryData, 'Watchmen');
    expect(JSON.parse(result)).toEqual([{
      'title': 'Watchmen',
      'isbn': '978-1779501127',
      'authorNames': ['Alan Moore', 'Dave Gibbons']
    }]);
  });
});

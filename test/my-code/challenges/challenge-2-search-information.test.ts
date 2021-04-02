import {Library} from '../../../src/do/data-model';
import {bookInfo} from '../../../src/do/my-code/chapter3/search';
import {libraryData} from './test-data';

function searchBooksByTitle(library: Library, query: string) {
  const matchingBooks = Object.values(library.catalog.booksByIsbn)
    .filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
    .map(book => bookInfo(library.catalog, book));
  return JSON.stringify(matchingBooks);
}

describe('Challenge 2 - Search information', () => {
  test('searchBooksByTitleJSON should return the correct result', () => {
    const result = searchBooksByTitle(libraryData, 'watCH');
    expect(JSON.parse(result)).toEqual([{
      'title': 'Watchmen',
      'isbn': '978-1779501127',
      'authorNames': ['Alan Moore', 'Dave Gibbons']
    }]);
  });
});

import {Book, Catalog, Library} from '../../data-model';

function authorNames(catalogData: Catalog, book: Book) {
  return book.authorIds.map(authorId => catalogData.authorsById[authorId].name);
}

export function bookInfo(catalogData: Catalog, book: Book) {
  return {
    title: book.title,
    isbn: book.isbn,
    authorNames: authorNames(catalogData, book)
  };
}

function searchBooksByTitle(catalogData: Catalog, query: string) {
  return Object.values(catalogData.booksByIsbn)
    .filter(book => book.title.includes(query))
    .map(book => bookInfo(catalogData, book));
}

export function searchBooksByTitleJSON(libraryData: Library, query: string) {
  return JSON.stringify(searchBooksByTitle(libraryData.catalog, query));
}

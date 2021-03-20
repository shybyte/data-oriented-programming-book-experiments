export interface Library {
  name: string;
  address: string;
  catalog: Catalog;
  userManagement: UserManagement;
}

export interface Catalog {
  booksByIsbn: Record<ISBN, Book>;
  authorsById: Record<AuthorId, Author>;
}

export interface UserManagement {
}

export type ISBN = string;

export interface Book {
  title: string;
  publicationYear: number;
  isbn: ISBN;
  authorIds: AuthorId[];
  bookItems: BookItem[];
}

export type  AuthorId = string;

export interface BookItem {
  id: string;
  rackId: string;
  purchaseDate: string;
  isLent: boolean;
}

export interface Author {
  id: AuthorId;
  name: string;
  bookIsbns: ISBN[];
}


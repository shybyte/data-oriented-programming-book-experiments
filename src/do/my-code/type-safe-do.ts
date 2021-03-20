import _ from 'lodash';

const author = {
  id: 'author-id',
  name: 'Author Name',
  bookIsbns: ['123', '234']
}

const partialAuthor = _.pick(author, 'id', 'name');

// Compiles because TypeScript knows that the attribute name is a string.
const name = partialAuthor.name.toLowerCase();

// Does not compile because TypeScript knows that the pick function has ignored the bookIsbns
// const bookIsbn = partialAuthor.bookIsbn

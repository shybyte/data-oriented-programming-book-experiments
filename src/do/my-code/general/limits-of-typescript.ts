import _ from 'lodash';
import { Author } from '../../data-model';

const author: Author = {
  id: 'author-id',
  name: 'Author Name',
  bookIsbns: ['123', '234']
}

function getPropertyKeyFromEventName<T extends keyof Author>(prop: `${T}Changed`): T {
  return prop.replace('Changed', '') as T;
}

// @ts-expect-error
const propUnknown = getPropertyKeyFromEventName('unknownChanged'); // Does not compile, because 'unknown' is no property of Author

const prop = getPropertyKeyFromEventName('nameChanged'); // returns 'name'
const partialAuthor = _.pick(author, 'id', prop);

// Compiles because TypeScript knows that name can't be undefined,
// because the getPropertyKeyFromEventName('nameChanged') will return 'name' for the input 'nameChanged'
// and pick will select the 'name' property
const name = partialAuthor.name.toLowerCase();

// Does not compile because TypeScript knows that the pick function has ignored the bookIsbns
// @ts-expect-error
const bookIsbn = partialAuthor.bookIsbn



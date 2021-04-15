import _ from 'lodash';

export function joinArrays<A, B>(a: A[], b: B[], keyA: keyof A, keyB: keyof B) {
  const mapA = _.keyBy(a, keyA);
  const mapB = _.keyBy(b, keyB);
  const mapsMerged = _.merge(mapA, mapB);
  return _.values(mapsMerged);
}

export const dbBookInfos = [
  {
    'isbn': '978-1982137274',
    'title': '7 Habits of Highly Effective People',
    'available': true
  },
  {
    'isbn': '978-0812981605',
    'title': 'The Power of Habit',
    'available': false
  }
];

export const openLibBookInfos = [
  {
    'isbn_13': '978-1982137274',
    'title': 'The Power of Habit',
    'subtitle': 'Why We Do What We Do in Life and Business',
  },
  {
    'isbn_13': '978-0812981605',
    'title': '7 Habits of Highly Effective People',
    'subtitle': 'Powerful Lessons in Personal Change',
    'number_of_pages': 432,
  },
  {
    'isbn_13': '978-0812981666',
    'title': 'Unmatched',
    'subtitle': 'Unmatched subtitle',
    'number_of_pages': 666,
  },
];

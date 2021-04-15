import {dbBookInfos, joinArrays, openLibBookInfos} from './join-arrays-typed';

describe('join-arrays', () => {
  it('should join', () => {
    const joinedArrays = joinArrays(dbBookInfos, openLibBookInfos, 'isbn', 'isbn_13');

    const arrayEl = joinedArrays[0];

    // TypeScript infers the correct type and
    // infers also that an attribute might get undefined if the join fails to join.
    const numberOfPages: number | undefined = arrayEl.number_of_pages;
    const isbn: string | undefined = arrayEl.isbn;
    const isbn_13: string | undefined = arrayEl.isbn_13;

    // TypeScript knows e.g. that number_of_pages can't be a string.
    // @ts-expect-error
    const numberOfPagesString: string | undefined = arrayEl.number_of_pages;

    // TypeScript knows that e.g. unknownProperty does not exist on the joined array elements.
    // @ts-expect-error
    const unknownProperty = arrayEl.unknownProperty;

    expect(joinedArrays).toEqual([
      {
        isbn: '978-1982137274',
        title: 'The Power of Habit',
        available: true,
        isbn_13: '978-1982137274',
        subtitle: 'Why We Do What We Do in Life and Business'
      },
      {
        isbn: '978-0812981605',
        title: '7 Habits of Highly Effective People',
        available: false,
        isbn_13: '978-0812981605',
        subtitle: 'Powerful Lessons in Personal Change',
        number_of_pages: 432
      },
      {
        isbn_13: '978-0812981666',
        title: 'Unmatched',
        subtitle: 'Unmatched subtitle',
        number_of_pages: 666
      }
    ]);
  });
});

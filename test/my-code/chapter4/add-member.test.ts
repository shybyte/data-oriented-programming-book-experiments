import deepFreeze from 'deep-freeze';
import {Library, Member} from '../../../src/do/data-model';
import {addMemberViaImmer} from '../../../src/do/my-code/chapter4/add-member-immer';
import {addMemberViaLens} from '../../../src/do/my-code/chapter4/add-member-lenses';
import {LibraryManager} from '../../../src/do/my-code/chapter4/add-member-vanilla';

const libraryData: Library = deepFreeze({
  'name': 'The smallest library on earth',
  'address': 'Here and now',
  'catalog': {
    'booksByIsbn': {},
    'authorsById': {}
  },
  'userManagement': {
    membersByEmail: {
      'wonder@woman.org': {email: 'wonder@woman.org', encryptedPassword: 'woman-secret', isBlocked: false}
    },
    librariansByEmail: {}
  }
});

describe('add-member', () => {
  const superman: Member = {email: 'super@man.org', encryptedPassword: 'secret', isBlocked: false};

  test('adding a member works for all version equally', () => {
    const libraryVanilla = LibraryManager.addMember(libraryData, superman);
    expect(libraryVanilla.userManagement.membersByEmail[superman.email]).toEqual(superman);
    expect(libraryVanilla.userManagement.membersByEmail['wonder@woman.org'].encryptedPassword).toEqual('woman-secret');

    const libraryFromLens = addMemberViaLens(libraryData, superman);
    expect(libraryFromLens).toEqual(libraryVanilla);

    const libraryFromImmer = addMemberViaImmer(libraryData, superman);
    expect(libraryFromImmer).toEqual(libraryVanilla);
  });
});

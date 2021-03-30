import produce from 'immer';
import {Library, Member} from '../../data-model';

export function addMemberViaImmer(library: Library, member: Member): Library {
  if (library.userManagement.membersByEmail[member.email]) {
    throw new Error('Member already exists.');
  }
  return produce(library, (libraryDraft) => {
    libraryDraft.userManagement.membersByEmail[member.email] = member;
  });
}

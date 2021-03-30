import {Lens} from 'monocle-ts'
import {Library, Member} from '../../data-model'

export function addMemberViaLens(library: Library, member: Member): Library {
  const lens = Lens.fromPath<Library>()(['userManagement', 'membersByEmail', member.email]);
  if (lens.get(library)) {
    throw new Error('Member already exists.');
  }
  return lens.set(member)(library);
}

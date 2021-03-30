import {Member, UserManagement, Library} from '../../data-model';

export const UserManager = {
  addMember(userManagement: UserManagement, member: Member): UserManagement {
    if (userManagement.membersByEmail[member.email]) {
      throw new Error('Member already exists.');
    }
    return {
      ...userManagement,
      membersByEmail: {
        ...userManagement.membersByEmail,
        [member.email]: member
      }
    };
  }
}

export const LibraryManager = {
  addMember: (library: Library, member: Member): Library => ({
    ...library,
    userManagement: UserManager.addMember(library.userManagement, member)
  })
}

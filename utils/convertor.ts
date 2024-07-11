import type { TabelUser, User } from '../types/user';
export function userConverter(userList: TabelUser[]): User[] {
  const result = userList?.map((item) => {
    return {
      ...item,
      userName: item.user_name,
    };
  });

  return result || [];
}

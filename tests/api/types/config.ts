import { TGetUserError, TUser } from './users';

export type TConfig = {
  getUserError: TGetUserError;
  getUser: TUser;
  postUser: TUser;
  deleteUser: TUser;
  undefinedUser: string;
  baseUrl: string;
  key: string;
};

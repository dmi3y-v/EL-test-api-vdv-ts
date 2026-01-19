import { TGetUserError, TUser } from './users';

export type TConfig = {
  getUserError: TGetUserError;
  getUser: TUser;
  postUser: TUser;
  deleteUser: TUser;
  undefinedUser: string;
  statusCodes: {
    success: 200;
    notFound: 404;
  };
  baseUrl: string;
  key: string;
};

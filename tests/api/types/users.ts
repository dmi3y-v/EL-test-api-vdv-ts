export type TUser = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  userStatus: number;
};

export type TCreateUserResponse = {
  code: number;
  type: string;
  message: string;
};

export type TGetUserError = {
  code: number;
  type: 'error';
  message: string;
};

export type TUserHeaders = { api_key: string };

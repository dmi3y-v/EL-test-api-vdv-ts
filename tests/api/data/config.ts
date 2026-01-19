import { TConfig } from '../types/config';

export const config: TConfig = {
  getUserError: { code: 1, type: 'error', message: 'User not found' },
  getUser: {
    id: 1,
    username: 'getVDV',
    firstName: 'getDmitrii',
    lastName: 'getVagin',
    email: 'getvdv1@test.ru',
    password: 'getqwerty12345',
    phone: '+79991111212',
    userStatus: 0,
  },
  postUser: {
    id: 22,
    username: 'postVDV',
    firstName: 'postDmitrii',
    lastName: 'postVagin',
    email: 'postvdv22@test.ru',
    password: 'postqwerty12345',
    phone: '+79992221212',
    userStatus: 0,
  },
  deleteUser: {
    id: 333,
    username: 'postVDV',
    firstName: 'postDmitrii',
    lastName: 'postVagin',
    email: 'postvdv333@test.ru',
    password: 'postqwerty12345',
    phone: '+79993331212',
    userStatus: 0,
  },
  undefinedUser: 'invalidUser',
  statusCodes: {
    success: 200,
    notFound: 404,
  },
  baseUrl: 'https://petstore.swagger.io/v2/user',
  key: 'vdv',
};

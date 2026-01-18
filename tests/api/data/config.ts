import { TConfig } from '../types/users';

export const config: TConfig = {
  getUserError: { code: 1, type: 'error', message: 'User not found' },
  validUser: {
    id: 111,
    username: 'vdv',
    firstName: 'Dmitrii',
    lastName: 'Vagin',
    email: 'vdv111@test.ru',
    password: 'qwerty12345',
    phone: '+79991231212',
    userStatus: 0,
  },
  invalidUser: 'invalidUser',
  statusCodes: {
    success: 200,
    notFound: 404,
  },
  baseUrl: 'https://petstore.swagger.io/v2/user',
  key: 'vdv',
};

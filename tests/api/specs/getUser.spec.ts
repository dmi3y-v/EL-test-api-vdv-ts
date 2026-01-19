import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

test.describe('GET user', () => {
  test.beforeAll('Создание пользователя', async ({ request }) => {
    const userApi = new UserApi(request);

    await userApi.createUser(config.getUser);
  });

  test('GET undefined user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUndefinedUser(config.undefinedUser);

    expect(response).toEqual(config.getUserError);
  });

  test('GET valid user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getValidUser(config.getUser.username);

    expect(response).toEqual(config.getUser);
  });

  test.afterAll('Удаление пользователя', async ({ request }) => {
    const userApi = new UserApi(request);

    await userApi.deleteUser(config.getUser.username);
  });
});

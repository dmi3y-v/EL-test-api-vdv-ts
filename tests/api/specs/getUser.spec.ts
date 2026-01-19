import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

test.describe('GET user', () => {
  test.beforeAll('Создание пользователя', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.createUser(config.getUser);

    await expect(response).toBeOK();
  });

  test('GET undefined user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUser(config.undefinedUser);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.notFound);
    expect(responseToJSON).toEqual(config.getUserError);
  });

  test('GET valid user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUser(config.getUser.username);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.success);
    expect(responseToJSON).toEqual(config.getUser);
  });

  test.afterAll('Удаление пользователя', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.deleteUser(config.getUser.username);

    await expect(response).toBeOK();
  });
});

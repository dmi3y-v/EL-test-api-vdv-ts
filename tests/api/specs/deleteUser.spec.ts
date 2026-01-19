import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

test.describe('DELETE user', () => {
  test.beforeAll('Создание пользователя', async ({ request }) => {
    const userApi = new UserApi(request);

    await userApi.createUser(config.deleteUser);
  });
  test('DELETE user', async ({ request }) => {
    const userApi = new UserApi(request);
    const response = await userApi.deleteUser(config.deleteUser.username);

    expect(response.code).toBe(config.statusCodes.success);
    expect(response.message).toEqual(config.deleteUser.username);
  });
});

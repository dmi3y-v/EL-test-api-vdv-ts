import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

test.describe('GET/POST user', () => {
  test('GET undefined user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUser(config.invalidUser);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.notFound);
    expect(responseToJSON).toEqual(config.getUserError);
  });

  test('POST user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.createUser(config.validUser);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.success);
    expect(responseToJSON.message).toEqual(config.validUser.id.toString());
  });

  test('GET user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.getUser(config.validUser.username);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.success);
    expect(responseToJSON).toEqual(config.validUser);
  });

  test('DELETE user', async ({ request }) => {
    const userApi = new UserApi(request);
    const response = await userApi.deleteUser(config.validUser.username);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.success);
    expect(responseToJSON.message).toEqual(config.validUser.username);
  });
});

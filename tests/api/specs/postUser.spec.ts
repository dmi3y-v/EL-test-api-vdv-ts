import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

test.describe('POST user', () => {
  test('POST valid user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.createUser(config.postUser);
    const responseToJSON = await response.json();

    expect(response.status()).toBe(config.statusCodes.success);
    expect(responseToJSON.message).toEqual(config.postUser.id.toString());
  });
});

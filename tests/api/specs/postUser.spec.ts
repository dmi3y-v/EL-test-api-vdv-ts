import { test, expect } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';
import { statusCodes } from '../data/statusCodes';

test.describe('POST user', () => {
  test('POST valid user', async ({ request }) => {
    const userApi = new UserApi(request);

    const response = await userApi.createUser(config.postUser);

    expect(response.code).toBe(statusCodes.success);
    expect(response.message).toEqual(config.postUser.id.toString());
  });
});

import { test, expect } from '../fixtures/apiClient';
import { config } from '../data/config';

test.describe('GET user', () => {
  test('GET undefined user', async ({ getUser }) => {
    const response = await getUser.getUndefinedUser(config.undefinedUser);

    expect(response).toEqual(config.getUserError);
  });

  test('GET valid user', async ({ getUser }) => {
    const response = await getUser.getValidUser(config.getUser.username);

    expect(response).toEqual(config.getUser);
  });
});

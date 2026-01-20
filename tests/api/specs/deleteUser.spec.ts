import { test, expect } from '../fixtures/apiClient';
import { config } from '../data/config';
import { statusCodes } from '../data/statusCodes';

test.describe('DELETE user', () => {
  test('DELETE user', async ({ deleteUser }) => {
    const response = await deleteUser.deleteUser(config.deleteUser.username);

    expect(response.code).toBe(statusCodes.success);
    expect(response.message).toEqual(config.deleteUser.username);
  });
});

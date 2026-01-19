import { test, expect } from '../fixtures/apiClient';
import { config } from '../data/config';

test.describe('DELETE user', () => {
  test('DELETE user', async ({ deleteUser }) => {
    const response = await deleteUser.deleteUser(config.deleteUser.username);

    expect(response.code).toBe(config.statusCodes.success);
    expect(response.message).toEqual(config.deleteUser.username);
  });
});

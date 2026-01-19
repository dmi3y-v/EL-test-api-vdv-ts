import { test as base } from '@playwright/test';
import { UserApi } from '../wrappers/UserAPI';
import { config } from '../data/config';

type MyFixtures = {
  getUser: UserApi;
  deleteUser: UserApi;
};

export const test = base.extend<MyFixtures>({
  getUser: async ({ request }, use) => {
    const userApi = new UserApi(request);
    await userApi.createUser(config.getUser);

    await use(userApi);

    await userApi.deleteUser(config.getUser.username);
  },
  deleteUser: async ({ request }, use) => {
    const userApi = new UserApi(request);
    await userApi.createUser(config.getUser);

    await use(userApi);
  },
});

export const expect = test.expect;

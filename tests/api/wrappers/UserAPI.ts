import { APIRequestContext, APIResponse } from '@playwright/test';
import { TUser } from '../types/users';
import { config } from '../data/config';
import { getUserHeaders } from '../data/getUserHeaders';

export class UserApi {
  constructor(private api: APIRequestContext) {}

  async getUser(username: string): Promise<APIResponse> {
    const response = await this.api.get(`${config.baseUrl}/${username}`, {
      headers: getUserHeaders(),
    });

    return response;
  }

  async createUser(data: TUser): Promise<APIResponse> {
    const response = await this.api.post(config.baseUrl, {
      headers: getUserHeaders(),
      data: data,
    });

    return response;
  }

  async deleteUser(username: string): Promise<APIResponse> {
    const response = await this.api.delete(`${config.baseUrl}/${username}`, {
      headers: getUserHeaders(),
    });
    return response;
  }
}

import { APIRequestContext, expect } from '@playwright/test';
import { TUser, TCreateUserResponse, TGetUserError, TDeleteUserResponse } from '../types/users';
import { config } from '../data/config';
import { statusCodes } from '../data/statusCodes';
import { getUserHeaders } from '../data/getUserHeaders';

export class UserApi {
  constructor(private api: APIRequestContext) {}

  async getValidUser(username: string): Promise<TUser> {
    const response = await this.api.get(`${config.baseUrl}/${username}`, {
      headers: getUserHeaders(),
    });
    expect(response.status()).toBe(statusCodes.success);
    return response.json();
  }

  async getUndefinedUser(username: string): Promise<TGetUserError> {
    const response = await this.api.get(`${config.baseUrl}/${username}`, {
      headers: getUserHeaders(),
    });
    expect(response.status()).toBe(statusCodes.notFound);
    return response.json();
  }

  async createUser(data: TUser): Promise<TCreateUserResponse> {
    const response = await this.api.post(config.baseUrl, {
      headers: getUserHeaders(),
      data: data,
    });
    expect(response.status()).toBe(statusCodes.success);
    return response.json();
  }

  async deleteUser(username: string): Promise<TDeleteUserResponse> {
    const response = await this.api.delete(`${config.baseUrl}/${username}`, {
      headers: getUserHeaders(),
    });
    expect(response.status()).toBe(statusCodes.success);
    return response.json();
  }
}

import { TUserHeaders } from '../types/users';
import { config } from '../data/config';

export const getUserHeaders = (): TUserHeaders => {
  return { api_key: config.key };
};

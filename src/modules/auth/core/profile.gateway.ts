import type { User } from './user';

export interface ProfileGateway {
  updateProfile(user: User): Promise<User>;
}

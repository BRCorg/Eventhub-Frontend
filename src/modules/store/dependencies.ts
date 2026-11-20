import type { AuthGateway } from '../auth/core/auth.gateway';
import type { ProfileGateway } from '../auth/core/profile.gateway';

export type Dependencies = {
  authGateway: AuthGateway;
  profileGateway: ProfileGateway;
};

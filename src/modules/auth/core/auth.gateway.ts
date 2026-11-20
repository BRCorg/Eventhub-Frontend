import type { Credentials, RegisterInput, User } from './user';

// renvoie le user, ou une erreur avec un message qu'on peut afficher
export interface AuthGateway {
  login(credentials: Credentials): Promise<User>;
  register(input: RegisterInput): Promise<User>;
}

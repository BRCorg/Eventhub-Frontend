import type { AuthGateway } from '../core/auth.gateway';
import type { ProfileGateway } from '../core/profile.gateway';
import type { Credentials, RegisterInput, User } from '../core/user';

// pour l'instant l'API c'est json-server, les données sont dans db.json
export class HttpAuthGateway implements AuthGateway, ProfileGateway {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async login(credentials: Credentials): Promise<User> {
    const query = new URLSearchParams(credentials);
    const users: User[] = await this.request(`/users?${query}`);
    if (users.length === 0) throw new Error('Email ou mot de passe incorrect');
    return users[0];
  }

  register(input: RegisterInput): Promise<User> {
    return this.request('/users', { method: 'POST', body: JSON.stringify(input) });
  }

  updateProfile(user: User): Promise<User> {
    return this.request(`/users/${user.id}`, { method: 'PATCH', body: JSON.stringify(user) });
  }

  // si le serveur ne répond pas, on renvoie un message clair
  private async request(path: string, options?: RequestInit) {
    try {
      const res = await fetch(`${this.baseUrl}${path}`, {
        ...options,
        headers: { 'Content-Type': 'application/json' },
      });
      return await res.json();
    } catch {
      throw new Error('Serveur injoignable, réessayez plus tard');
    }
  }
}

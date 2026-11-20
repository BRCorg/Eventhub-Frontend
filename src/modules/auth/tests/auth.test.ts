import { describe, expect, it } from 'vitest';
import { createTestStore } from '../../testing/tests-environment';
import { login, register, updateProfile } from '../core/usecases';

const alice = { id: '1', name: 'Alice', email: 'alice@test.fr' };

// pas de serveur : chaque test donne un faux objet à la place de la gateway

describe('Authentification', () => {
  it("connecte l'utilisateur après son inscription", async () => {
    const store = createTestStore({
      dependencies: { authGateway: { register: async (input) => ({ id: '2', ...input }) } },
    });

    await store.dispatch(register({ name: 'Bob', email: 'bob@test.fr', password: 'Motdepasse1!' }));

    expect(store.getState().auth.user?.name).toBe('Bob');
  });

  it('connecte un utilisateur avec les bons identifiants', async () => {
    const store = createTestStore({
      dependencies: { authGateway: { login: async () => alice } },
    });

    await store.dispatch(login({ email: alice.email, password: 'Motdepasse1!' }));

    expect(store.getState().auth.user).toEqual(alice);
  });

  it('refuse la connexion avec de mauvais identifiants', async () => {
    const store = createTestStore({
      dependencies: {
        authGateway: {
          login: async () => {
            throw new Error('Email ou mot de passe incorrect');
          },
        },
      },
    });

    await store.dispatch(login({ email: alice.email, password: 'mauvais' }));

    expect(store.getState().auth.user).toBeNull();
  });

  it('met à jour les données du profil', async () => {
    const store = createTestStore({
      initialState: { auth: { user: alice } },
      dependencies: { profileGateway: { updateProfile: async (user) => user } },
    });

    await store.dispatch(updateProfile({ ...alice, name: 'Alice Martin' }));

    expect(store.getState().auth.user?.name).toBe('Alice Martin');
  });

  it('garde les anciennes données si la mise à jour échoue', async () => {
    const store = createTestStore({
      initialState: { auth: { user: alice } },
      dependencies: {
        profileGateway: {
          updateProfile: async () => {
            throw new Error('Serveur indisponible');
          },
        },
      },
    });

    await store.dispatch(updateProfile({ ...alice, name: 'Alice Martin' }));

    expect(store.getState().auth.user).toEqual(alice);
  });
});

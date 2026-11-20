import { describe, expect, it } from 'vitest';
import { isPasswordValid } from '../core/password-rules';

describe('Règles du mot de passe', () => {
  it('accepte un mot de passe qui respecte tous les critères', () => {
    expect(isPasswordValid('Motdepasse1!')).toBe(true);
  });

  // chaque mot de passe rate un seul critère
  it.each([
    ['trop court (11 caractères)', 'Motdepass1!'],
    ['sans majuscule', 'motdepasse1!'],
    ['sans minuscule', 'MOTDEPASSE1!'],
    ['sans chiffre', 'Motdepasses!'],
    ['sans caractère spécial', 'Motdepasse12'],
  ])('refuse un mot de passe %s', (_, password) => {
    expect(isPasswordValid(password)).toBe(false);
  });
});

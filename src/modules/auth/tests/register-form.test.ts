import { describe, expect, it } from 'vitest';
import { canSubmitRegister } from '../core/register-form';

const validForm = { name: 'Alice', email: 'alice@test.fr', password: 'Motdepasse1!' };

describe("Formulaire d'inscription", () => {
  it('peut être soumis quand tous les champs sont remplis', () => {
    expect(canSubmitRegister(validForm)).toBe(true);
  });

  it.each(['name', 'email', 'password'] as const)('ne peut pas être soumis si le champ %s est vide', (field) => {
    expect(canSubmitRegister({ ...validForm, [field]: '' })).toBe(false);
  });

  it('ne peut pas être soumis si un champ ne contient que des espaces', () => {
    expect(canSubmitRegister({ ...validForm, name: '   ' })).toBe(false);
  });

  it('ne peut pas être soumis si le mot de passe est trop faible', () => {
    expect(canSubmitRegister({ ...validForm, password: 'faible' })).toBe(false);
  });
});

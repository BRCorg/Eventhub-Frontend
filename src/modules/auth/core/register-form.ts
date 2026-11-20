import { isPasswordValid } from './password-rules';
import type { RegisterInput } from './user';

// un champ avec juste des espaces compte comme vide
const areAllFieldsFilled = (form: RegisterInput) =>
  Object.values(form).every((value) => value.trim() !== '');

export const canSubmitRegister = (form: RegisterInput) =>
  areAllFieldsFilled(form) && isPasswordValid(form.password);

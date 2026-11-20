// pour ajouter un critère, on ajoute juste une ligne
export const passwordRules = [
  { label: 'Au moins 12 caractères', regex: /.{12,}/ },
  { label: 'Au moins une majuscule', regex: /[A-Z]/ },
  { label: 'Au moins une minuscule', regex: /[a-z]/ },
  { label: 'Au moins un chiffre', regex: /[0-9]/ },
  { label: 'Au moins un caractère spécial', regex: /[^A-Za-z0-9]/ },
];

export const isPasswordValid = (password: string) =>
  passwordRules.every((rule) => rule.regex.test(password));

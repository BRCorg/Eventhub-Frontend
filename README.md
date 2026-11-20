# EventHub – Frontend

Gestion des utilisateurs d'EventHub : inscription, connexion et page profil.

## Fonctionnalités

- **Inscription** : le bouton ne s'active que si tous les champs sont remplis et que le mot de passe respecte les critères (12 caractères minimum, une majuscule, une minuscule, un chiffre, un caractère spécial).
- **Connexion** : message d'erreur si les identifiants sont faux, sinon redirection vers le profil.
- **Profil** : modification du nom et de l'email, et déconnexion.

## Technologies

React, TypeScript, Redux Toolkit, React Router, MUI, Vitest, Testing Library, json-server.

## Lancer le projet

```bash
npm install

# terminal 1 : l'API simulée (port 3001)
npm run api

# terminal 2 : l'application
npm run dev
```

Compte de démo : `alice@eventhub.fr` / `Motdepasse1!`

## Tests

```bash
npm test
```

## Organisation

```
src/modules/
├── app/        démarrage et mise en page
├── store/      store Redux et dépendances
├── testing/    outils pour les tests
└── auth/
    ├── components/   les pages (LoginForm, RegisterForm, ProfilePage)
    ├── hooks/        la logique des pages (useLoginForm…)
    ├── services/     les appels à l'API (HttpAuthGateway)
    ├── core/         les règles métier, les use cases et les interfaces
    └── tests/
```

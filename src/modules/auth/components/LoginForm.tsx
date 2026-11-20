import { Alert, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useLoginForm } from '../hooks/useLoginForm';
import { AuthCard } from './AuthCard';

export const LoginForm = () => {
  const { email, setEmail, password, setPassword, loading, error, submit } = useLoginForm();

  return (
    <AuthCard
      title="Connexion"
      subtitle="Content de vous revoir sur EventHub"
      onSubmit={submit}
      footer={
        <Typography variant="body2" align="center">
          Pas encore de compte ? <Link component={RouterLink} to="/register">Créer un compte</Link>
        </Typography>
      }
    >
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Mot de passe" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Alert severity="error">{error}</Alert>}
      <Button type="submit" variant="contained" size="large" disabled={loading}>
        {loading ? 'Connexion…' : 'Se connecter'}
      </Button>
    </AuthCard>
  );
};

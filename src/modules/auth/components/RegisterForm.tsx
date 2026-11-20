import { Alert, Button, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useRegisterForm } from '../hooks/useRegisterForm';
import { AuthCard } from './AuthCard';
import { PasswordChecklist } from './PasswordChecklist';

export const RegisterForm = () => {
  const { form, updateField, canSubmit, loading, error, submit } = useRegisterForm();

  return (
    <AuthCard
      title="Inscription"
      subtitle="Créez votre compte EventHub"
      onSubmit={submit}
      footer={
        <Typography variant="body2" align="center">
          Déjà inscrit ? <Link component={RouterLink} to="/login">Se connecter</Link>
        </Typography>
      }
    >
      <TextField label="Nom" value={form.name} onChange={(e) => updateField('name', e.target.value)} />
      <TextField label="Email" type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} />
      <TextField label="Mot de passe" type="password" value={form.password} onChange={(e) => updateField('password', e.target.value)} />
      <PasswordChecklist password={form.password} />
      {error && <Alert severity="error">{error}</Alert>}
      <Button type="submit" variant="contained" size="large" disabled={!canSubmit || loading}>
        {loading ? 'Inscription…' : "S'inscrire"}
      </Button>
    </AuthCard>
  );
};

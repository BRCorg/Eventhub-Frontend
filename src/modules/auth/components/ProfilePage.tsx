import { Alert, Avatar, Box, Button, Link, Stack, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useProfileForm } from '../hooks/useProfileForm';
import { AuthCard } from './AuthCard';

export const ProfilePage = () => {
  const { user, name, setName, email, setEmail, loading, error, success, submit } = useProfileForm();

  if (!user) {
    return (
      <Typography align="center" sx={{ mt: 6 }}>
        <Link component={RouterLink} to="/login">Connectez-vous</Link> pour voir votre profil.
      </Typography>
    );
  }

  return (
    <AuthCard title="Mon profil" subtitle="Modifiez vos informations" onSubmit={submit}>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>{user.name.charAt(0).toUpperCase()}</Avatar>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>{user.name}</Typography>
          <Typography variant="body2" color="text.secondary">{user.email}</Typography>
        </Box>
      </Stack>
      <TextField label="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Profil mis à jour</Alert>}
      <Button type="submit" variant="contained" size="large" disabled={loading}>
        {loading ? 'Enregistrement…' : 'Enregistrer'}
      </Button>
    </AuthCard>
  );
};

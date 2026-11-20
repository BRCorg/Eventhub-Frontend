import { Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../../auth/components/LogoutButton';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <CssBaseline />
    <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        EventHub
      </Typography>
      <Button component={Link} to="/login">Connexion</Button>
      <Button component={Link} to="/register">Inscription</Button>
      <Button component={Link} to="/profile">Profil</Button>
      <LogoutButton />
    </Toolbar>
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {children}
    </Container>
  </>
);

import { Box, Paper, Stack, Typography } from '@mui/material';
import type { FormEvent, ReactNode } from 'react';

type AuthCardProps = {
  title: string;
  subtitle: string;
  onSubmit: (event: FormEvent) => void;
  children: ReactNode;
  footer?: ReactNode;
};

export const AuthCard = ({ title, subtitle, onSubmit, children, footer }: AuthCardProps) => (
  <Paper elevation={3} sx={{ maxWidth: 440, mx: 'auto', mt: 6, p: 4, borderRadius: 3 }}>
    <Box component="form" onSubmit={onSubmit}>
      <Stack spacing={2.5}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>{title}</Typography>
          <Typography variant="body2" color="text.secondary">{subtitle}</Typography>
        </Box>
        {children}
        {footer}
      </Stack>
    </Box>
  </Paper>
);

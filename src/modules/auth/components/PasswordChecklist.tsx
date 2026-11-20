import { Box, LinearProgress, Typography } from '@mui/material';
import { passwordRules } from '../core/password-rules';

export const PasswordChecklist = ({ password }: { password: string }) => {
  const results = passwordRules.map((rule) => ({ label: rule.label, ok: rule.regex.test(password) }));
  const score = results.filter((result) => result.ok).length;
  const allGood = score === results.length;

  return (
    <Box>
      <LinearProgress
        variant="determinate"
        value={(score / results.length) * 100}
        color={allGood ? 'success' : 'warning'}
        sx={{ height: 6, borderRadius: 3, mb: 1 }}
      />
      {results.map((result) => (
        <Typography key={result.label} variant="body2" color={result.ok ? 'success.main' : 'text.secondary'}>
          {result.ok ? '✓' : '•'} {result.label}
        </Typography>
      ))}
    </Box>
  );
};

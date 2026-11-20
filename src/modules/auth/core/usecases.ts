import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Dependencies } from '../../store/dependencies';
import type { Credentials, RegisterInput, User } from './user';

// la gateway est injectée par le store (extraArgument)
const createAuthThunk = createAsyncThunk.withTypes<{ extra: Dependencies }>();

export const login = createAuthThunk('auth/login', (credentials: Credentials, { extra }) =>
  extra.authGateway.login(credentials),
);

export const register = createAuthThunk('auth/register', (input: RegisterInput, { extra }) =>
  extra.authGateway.register(input),
);

export const updateProfile = createAuthThunk('auth/updateProfile', (user: User, { extra }) =>
  extra.profileGateway.updateProfile(user),
);

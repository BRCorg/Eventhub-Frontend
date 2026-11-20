import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { login, register, updateProfile } from './usecases';
import type { User } from './user';

type AuthState = { user: User | null };

const initialState: AuthState = { user: null };

const saveUser = (state: AuthState, action: PayloadAction<User>) => {
  state.user = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, saveUser)
      .addCase(register.fulfilled, saveUser)
      .addCase(updateProfile.fulfilled, saveUser);
  },
});

export const { logout } = authSlice.actions;

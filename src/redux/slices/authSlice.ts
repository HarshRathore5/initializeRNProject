import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface AuthState {
  user: string | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ user: string; token: string }>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
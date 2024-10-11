
import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


export interface LoginFormDisplayState {
  value: boolean
  status: 'idle' | 'loading' | 'failed'
}


const initialState: LoginFormDisplayState = {
  value: false,
  status: 'idle'
}


export const LoginFormDisplaySlice = createSlice({
  name: 'loginFormDisplay',
  initialState,
  reducers: {
    hideLoginForm: state => {
        state.value = false;
    },
    showLoginForm: state => {
        state.value = true
    }
  }
})

export const { hideLoginForm, showLoginForm } = LoginFormDisplaySlice.actions
export default LoginFormDisplaySlice.reducer
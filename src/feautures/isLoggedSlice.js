import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
}

const isLoggedSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isLogged = true
    },
    logout(state) {
      state.isLogged = false
    },
  },
})

export const { login, logout } = isLoggedSlice.actions
export default isLoggedSlice.reducer

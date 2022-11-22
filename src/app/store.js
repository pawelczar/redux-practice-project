import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../feautures/isLoggedSlice'
import cartReducer from '../feautures/cartItmesSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
})

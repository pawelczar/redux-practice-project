import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      state = state.push(action.payload)
    },
    removeCart(state, action) {
      state = state.pop
    },
  },
})

export const { addCart, removeCart } = cartSlice.actions
export default cartSlice.reducer

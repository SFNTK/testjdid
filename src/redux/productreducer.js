import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [

  ]
}

export const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.products.push(action.payload)
    }, removefromcard: (state, action) => {
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].id == action.payload.id) {
          state.products.splice(i, 1)
        }
      }
    },

  },
})

// Action creators are generated for each case reducer function
export const { addtocart,removefromcard } = productSlice.actions

export default productSlice.reducer
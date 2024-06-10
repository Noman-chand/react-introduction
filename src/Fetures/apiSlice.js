import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  productsData: [],
  isError: false,
  cartItem: [],
  totalPrice: 0,
  quantity: 0,
};

export const fetchApiData = createAsyncThunk(
  'fetchApiData',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItem.push(action.payload);
    },
    deleteCart: (state, action) => {
      const index = state.cartItem.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.cartItem = [
          ...state.cartItem.slice(0, index),
          ...state.cartItem.slice(index + 1)
        ];
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiData.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchApiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsData = action.payload;
      })
      .addCase(fetchApiData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { addToCart, deleteCart } = productsSlice.actions;

export default productsSlice.reducer;

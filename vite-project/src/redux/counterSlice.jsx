import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// Esportiamo le azioni per usarle nei componenti
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Esportiamo il reducer per lo store
export default counterSlice.reducer;
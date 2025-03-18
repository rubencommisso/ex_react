import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Importiamo il reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Aggiungiamo il reducer nello store
  }
});

export default store;
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Importiamo il reducer
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer, // Aggiungiamo il reducer nello store
    todo: todoReducer
  }
});

export default store;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Azione asincrona per recuperare i to-do
export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        throw new Error("Errore nel recupero dei dati");
    }
    return await response.json();
});

const initialState = {
    data: [],
    loading: false,
    error: null
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleComplete: (state, action) => {
            const todo = state.data.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
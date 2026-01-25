import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks, addBook,deleteBook } from "./bookThunks";


const bookSlice = createSlice({
  name: "books",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(addBook.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.list = state.list.filter(
          (book) => book.id !== action.payload
        );
      });


      
  },
});

export default bookSlice.reducer;

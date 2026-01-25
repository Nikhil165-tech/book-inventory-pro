import { createAsyncThunk } from "@reduxjs/toolkit";

// GET all books
export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async () => {
    const response = await fetch("http://localhost:3000/books");
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    return response.json();
  }
);

// ADD a new book
export const addBook = createAsyncThunk(
  "books/addBook",
  async (newBook) => {
    const response = await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });
    if (!response.ok) {
      throw new Error("Failed to add book");
    }
    return response.json();
  }
);

// DELETE a book
export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id) => {
    const response = await fetch(`http://localhost:3000/books/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete book");
    }

    return id;
  }
);

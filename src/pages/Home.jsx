import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/books/bookThunks";
import BookGrid from "../components/BookGrid";
import BookForm from "../components/BookForm";

function Home() {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((s) => s.books);

  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("");

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // FILTER LOGIC
  const filteredBooks = list.filter((book) => {
    return (
      book.title.toLowerCase().includes(search.toLowerCase()) &&
      book.author.toLowerCase().includes(authorFilter.toLowerCase())
    );
  });

  return (
    // <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
    <div className="p-6 space-y-8 bg-base-200 min-h-screen">

      {/* PAGE HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-indigo-600">📚 My Book Library</h1>
        <p className="text-gray-500">Add, search, and explore your favorite books!</p>
      </div>

      {/* BOOK FORM */}
      <div className="bg-base-100 shadow-md rounded-xl p-6">

        <BookForm />
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="🔍 Search by title"
          className="input input-bordered w-full md:w-1/2 border-indigo-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <input
          type="text"
          placeholder="🎯 Filter by author"
          className="input input-bordered w-full md:w-1/2 border-indigo-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition"
          value={authorFilter}
          onChange={(e) => setAuthorFilter(e.target.value)}
        />
      </div>

      {/* BOOK LIST */}
      <div className="bg-white shadow-md rounded-xl p-6">
        {loading ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : filteredBooks.length > 0 ? (
              <div className="bg-white shadow-md rounded-xl px-8 py-6">
                <div className="max-w-7xl mx-auto">
                  <BookGrid books={filteredBooks} />
                </div>
              </div>


        ) : (
          <p className="text-center text-gray-400 py-12">No books found 😢</p>
        )}
      </div>
    </div>
  );
}

export default Home;

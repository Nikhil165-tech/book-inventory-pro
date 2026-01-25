import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books/bookThunks";

function BookTable({ books }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    document.getElementById(`delete_${id}`).showModal();
  };

  const confirmDelete = (id) => {
    dispatch(deleteBook(id));
    document.getElementById(`delete_${id}`).close();
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td className="font-semibold">{book.title}</td>
              <td>{book.author}</td>
              <td className="flex gap-2 justify-center">
                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-sm btn-primary"
                >
                  View
                </Link>

                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>

                {/* Confirmation Modal */}
                <dialog id={`delete_${book.id}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">
                      Delete Book?
                    </h3>
                    <p className="py-2">
                      Are you sure you want to delete
                      <b> {book.title}</b>?
                    </p>

                    <div className="modal-action">
                      <button
                        className="btn btn-error"
                        onClick={() => confirmDelete(book.id)}
                      >
                        Yes, Delete
                      </button>
                      <button
                        className="btn"
                        onClick={() =>
                          document
                            .getElementById(`delete_${book.id}`)
                            .close()
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookTable;

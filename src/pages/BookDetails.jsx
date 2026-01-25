import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id === Number(id))
  );

  if (!book) {
    return (
      <div className="p-6">
        <p>Book not found</p>
        <Link to="/" className="btn btn-link">
          Back
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-base-200">
      <div className="card bg-base-100 shadow-xl max-w-xl">
        <div className="card-body">
          <h2 className="card-title">{book.title}</h2>
          <p><b>Author:</b> {book.author}</p>

          <div className="card-actions justify-end">
            <Link to="/" className="btn btn-secondary">
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

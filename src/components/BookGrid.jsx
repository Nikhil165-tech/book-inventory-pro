import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books/bookThunks";
import { Link } from "react-router-dom";

function BookGrid({ books }) {
  const dispatch = useDispatch();

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div key={book.id} className="group perspective">

            {/* ROTATING CONTAINER */}
            <div className="relative h-44 w-auto transform transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                <div key={book.id} className="group perspective">

            {/* ROTATING CONTAINER */}
            <div className="relative h-44 w-full transform transition-transform duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">

                {/* FRONT SIDE */}
                <div className="absolute inset-0 backface-hidden card bg-base-100 shadow-md p-4 flex flex-col justify-between">
                
                <div>
                    <h2 className="font-semibold text-lg truncate">
                    {book.title}
                    </h2>
                    <p className="text-sm opacity-70 mt-1">
                    ✍ {book.author}
                    </p>
                </div>

                <button
                    className="btn btn-xs btn-error self-end"
                    onClick={() => dispatch(deleteBook(book.id))}
                >
                    Delete
                </button>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] card bg-base-200 shadow-md p-4 flex flex-col justify-between">

                <div>
                    <h3 className="font-semibold text-sm mb-1">
                    Description
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-4">
                    {book.description || "No description available"}
                    </p>
                </div>

                <button
                    className="btn btn-xs btn-error self-end"
                    onClick={() => dispatch(deleteBook(book.id))}
                >
                    Delete
                </button>
                </div>

            </div>
            </div>


            {/* FRONT SIDE */}
            {/* <div className="absolute inset-0 backface-hidden card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p className="opacity-70">✍ {book.author}</p>

                <div className="card-actions justify-end mt-auto">
                  <Link
                    to={`/book/${book.id}`}
                    className="btn btn-xs btn-info"
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => dispatch(deleteBook(book.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div> */}

            {/* BACK SIDE */}
            {/* <div className="absolute inset-0 backface-hidden rotate-y-180 card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-sm leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div> */}

          </div>
        </div>
      ))}
    </div>
  );
}

export default BookGrid;

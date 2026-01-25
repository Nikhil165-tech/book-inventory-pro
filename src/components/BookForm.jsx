import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/bookThunks";
import { bookSchema } from "../schemas/bookSchema";

function BookForm() {
  const dispatch = useDispatch();

 const [formData, setFormData] = useState({
  title: "",
  author: "",
  description: "",
});


  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = bookSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    dispatch(addBook(formData));
    setFormData({
        title: "",
        author: "",
        description: "",
      });

    setErrors({});
    document.getElementById("addBookModal").close();
  };

  return (
    <>
      <button
        className="btn btn-primary mb-4"
        onClick={() => document.getElementById("addBookModal").showModal()}
      >
        ➕ Add Book
      </button>

      <dialog id="addBookModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Add New Book</h3>

          {/* <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Author"
                className="input input-bordered w-full"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
              {errors.author && (
                <p className="text-red-500 text-sm">{errors.author}</p>
              )}
            </div>

            <div className="modal-action">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("addBookModal").close()
                }
              >
                Cancel
              </button>
            </div>
          </form> */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* TITLE */}
            <div>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title}</p>
              )}
            </div>

            {/* AUTHOR */}
            <div>
              <input
                type="text"
                placeholder="Author"
                className="input input-bordered w-full"
                value={formData.author}
                onChange={(e) =>
                  setFormData({ ...formData, author: e.target.value })
                }
              />
              {errors.author && (
                <p className="text-red-500 text-sm">{errors.author}</p>
              )}
            </div>

            {/* DESCRIPTION ✅ NEW */}
            <div>
              <textarea
                placeholder="Book description"
                className="textarea textarea-bordered w-full"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description}
                </p>
              )}
            </div>

            {/* BUTTONS */}
            <div className="modal-action">
              <button type="submit" className="btn btn-success">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("addBookModal").close()
                }
              >
                Cancel
              </button>
            </div>

          </form>

        </div>
      </dialog>
    </>
  );
}

export default BookForm;

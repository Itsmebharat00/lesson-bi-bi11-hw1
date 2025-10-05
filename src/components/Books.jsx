/** @format */

import useFetch from "../useFetch";

const Books = () => {
  const { data, loading, error } = useFetch(
    "https://lesson-be-be-4-assignment1.vercel.app/books"
  );

  console.log(data);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {data?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

import React, { useEffect } from "react"

export default function Resources({ resources, setResources }) {
  useEffect(() => {
    const fetchResources = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();
      setBooks(json);
    };

    fetchBooks();
  },);

  return (
    <div>
      <BooksForm setBooks={setBooks} />
      <div>
        {books.map((book) => {
          return (
            <BookItem book={book} key={book._id}/>
          );
        })}
      </div>
    </div>
  );
}
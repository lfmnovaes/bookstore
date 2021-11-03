import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function BookList() {
  const bookStore = useSelector((store) => store.booksReducer);
  const list = bookStore.books.map(
    (book) => (
      <Book key={book.id} data={book} />
    ),
  );

  return (
    <>
      <h2>List of books</h2>
      <ul>
        {list}
      </ul>
      <Form />
    </>
  );
}

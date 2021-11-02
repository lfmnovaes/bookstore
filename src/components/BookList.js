import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

export default function BookList() {
  const bookStore = useSelector((state) => state.books);
  const list = bookStore.map(
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

import React from 'react';
import Book from './Book';
import Form from './Form';

const list = [
  {
    id: 1,
    category: 'Non-fiction',
    title: 'A Short History of Nearly Everything',
    author: 'Bill Bryson',
    progress: '0/6',
  },
  {
    id: 2,
    category: 'Mystery',
    title: 'Lorem Ipsum',
    author: 'Latin',
    progress: '3/42',
  },
];

export default function BookList() {
  return (
    <>
      <h2>List of books</h2>
      <ul>
        {list.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
      <Form />
    </>
  );
}

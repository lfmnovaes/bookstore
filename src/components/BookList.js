import React from 'react';
import Book from './Book';

const list = [
  {
    id: 1,
    category: 'Tech',
    title: 'Google Hacking',
    author: 'Johnny Long',
    progress: '1/12',
  },
  {
    id: 2,
    category: 'Languages',
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
    </>
  );
}

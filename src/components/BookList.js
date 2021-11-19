import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const dispatch = useDispatch();
  const bookStore = useSelector((store) => store.booksReducer);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const list = bookStore.map(
    (book) => (
      <Book key={book.id} data={book} />
    ),
  );

  return (
    <div className="list">
      <ul>
        {list}
      </ul>
      <Form />
    </div>
  );
};

export default BookList;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({ data }) {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <p>
        Title:&nbsp;
        {data.title}
      </p>
      <p>
        Category:&nbsp;
        {data.category}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(data.id))}>
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({ data }) {
  const dispatch = useDispatch();
  return (
    <li className="book">
      Category:&nbsp;
      {data.category}
      <h3>
        Title:&nbsp;
        {data.title}
      </h3>
      <button type="button" onClick={() => dispatch(removeBook(data.id))}>
        Remove
      </button>
    </li>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

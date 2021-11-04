import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

export default function Book({ data }) {
  const dispatch = useDispatch();
  return (
    <li className="book">
      <div className="content">
        <h5 className="category">
          {data.category}
        </h5>
        <h3 className="title">
          {data.title}
        </h3>
        <div className="links">
          <a href="/#">Comments</a>
          {' | '}
          <a href="/#" onClick={() => dispatch(removeBook(data.id))}>Remove</a>
          {' | '}
          <a href="/#">Edit</a>
        </div>
      </div>
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

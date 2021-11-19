import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ data }) => {
  const dispatch = useDispatch();
  const remove = (e, id) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
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
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="vl" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#" onClick={(e) => remove(e, data.id)}>Remove</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="vl" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/#">Edit</a>
        </div>
      </div>
      <div className="completion">
        <p>0%</p>
        <p>Completed</p>
      </div>
      <div className="progress">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 1</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;

import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ data }) {
  return (
    <li className="book">
      <p>
        Title:&nbsp;
        {data.title}
      </p>
      <p>
        Author:&nbsp;
        {data.author}
      </p>
      <p>
        Progress:&nbsp;
        {data.progress}
      </p>
    </li>
  );
}

Book.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.string,
  }).isRequired,
};

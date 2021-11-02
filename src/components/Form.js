import React from 'react';

export default function Form() {
  return (
    <form>
      <h3>Add new Book:</h3>
      <input type="text" id="title" name="title" placeholder="Title" required />
      <input type="text" id="author" name="author" placeholder="Author" required />
      <select id="category" name="category">
        <option value="romance">Romance</option>
        <option value="mystery">Mystery</option>
        <option value="sfiction">Science Fiction</option>
        <option value="tech">Technology</option>
        <option value="nfiction">Non-fiction</option>
      </select>
      <input type="button" value="Add book" />
    </form>
  );
}

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

export default function Form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Romance');
  const chapter = { current: 'test', progress: '0', total: '42' };
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      category,
      title,
      chapter,
    };
    dispatch(addBook(newBook));
    document.getElementById('add-new-book').reset();
  };
  return (
    <form id="add-new-book">
      <h3>Add new Book:</h3>
      <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <select id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
        <option value="Romance">Romance</option>
        <option value="Mystery">Mystery</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Technology">Technology</option>
        <option value="Non-fiction">Non-fiction</option>
      </select>
      <input type="submit" value="Add book" onClick={addNewBook} />
    </form>
  );
}

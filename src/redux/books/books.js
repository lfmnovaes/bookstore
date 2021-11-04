import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const API_ID = 'iQ2b9MWJlIPyFiqUfdHg';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = [];
  const response = await axios.get(API_URL);
  const [keys, values] = [Object.keys(response.data), Object.values(response.data)];
  values.forEach((value, index) => {
    const book = {
      title: value[0].title,
      category: value[0].category,
      id: keys[index],
    };
    books.push(book);
  });
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

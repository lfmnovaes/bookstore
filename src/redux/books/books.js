const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const API_ID = 'iQ2b9MWJlIPyFiqUfdHg';
const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const initialState = [];

const postBook = async (obj) => {
  const tempBook = {
    item_id: obj.id,
    title: obj.title,
    category: obj.category,
  };

  const results = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(tempBook),
  });
  return results.status;
};

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
  let keys;
  let values;
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      [keys, values] = [Object.keys(data), Object.values(data)];
    });
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
      postBook(action.payload);
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

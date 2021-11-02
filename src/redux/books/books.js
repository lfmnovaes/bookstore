import { createStore } from 'redux';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: '7a8f2ffb-862e-4d59-b47e-4b5231c81dfe',
      category: 'Non-fiction',
      title: 'A Short History of Nearly Everything',
      author: 'Bill Bryson',
      chapter: {
        current: 'How to build a universe',
        progress: '0',
        total: '6',
      },
    },
    {
      id: '3fa5cecb-d4d7-4168-ba06-6db5ae9aba8c',
      category: 'Mystery',
      title: 'Lorem Ipsum',
      author: 'Latin',
      chapter: {
        current: 'Dolor sit amet',
        progress: '7',
        total: '42',
      },
    },
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        books: [
          ...state.books.filter((book) => book.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);

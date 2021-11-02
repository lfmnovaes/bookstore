import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/books/books';
import Header from './components/Header';
import BookList from './components/BookList';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Provider store={store}>
              <BookList />
            </Provider>
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
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
          <Route path="/" exact>
            <BookList />
          </Route>
          <Route path="/categories" exact>
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

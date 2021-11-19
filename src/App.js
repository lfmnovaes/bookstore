import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import store from './redux/configureStore';
import Header from './components/Header';
import BookList from './components/BookList';
import Categories from './components/Categories';
import './App.css';

ReactGA.initialize('G-FS2W25XF7S');

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
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
};

export default App;

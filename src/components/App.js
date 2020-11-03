import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BooksList from '../containers/BooksList';
import Navbar from './Navbar';
import SignupForm from '../containers/SignupForm';
import LoginForm from '../containers/LoginForm';
import EditBook from './EditBook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={BooksList} />
        <Route path="/books" component={BooksList} />
        <Route path="/sign-up" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/edit-book/:id" component={EditBook} />
      </div>
    </BrowserRouter>
  );
}

export default App;

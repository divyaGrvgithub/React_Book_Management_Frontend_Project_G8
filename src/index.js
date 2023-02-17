import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import {BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './component/Home'
import Regi from './component/Regi';
import LogIn from './component/LogIn';

import AddBook from './component/Books/AddBooks';
import UpdateBook from './component/Books/Update';
import GetBooks from './component/Books/GetBooks';
import DeleteBook from './component/Books/Delete';
import GetBookById from './component/Books/GetBookById';
import CreateReviews from './component/Reviewss/CreateReviews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Register' element={<Regi />}/>
        <Route path='/Login' element={<LogIn />}/>

        <Route path='/AddBook' element={<AddBook />}/>
        <Route path='/GetBooks' element={<GetBooks/>}>
        </Route>
        <Route path='book/:id' element={<GetBookById/>}/>

        <Route path='/Editbook/:id' element={<UpdateBook />}/>
        <Route path='/deleteBook/:id' element={<DeleteBook />}/>

        <Route path='/books/:bookId/review' element={<CreateReviews />}/>

      </Routes>
  </BrowserRouter>
  </>
);
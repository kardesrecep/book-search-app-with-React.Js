import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import BookList from "./components/BookList/BookList"
import BookDetails from "./components/BookDetails/BookDetails"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='about' element={<About/>} />
  <Route path='books' element={<BookList/>} />
  <Route path='/books/:id' element={<BookDetails/>} />
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

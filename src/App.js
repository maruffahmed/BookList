import React from 'react';
import BookContextProvider from './context/BookContext';
import Navbar from './component/Navbar';
import BookList from './component/BookList';
import AddBookForm from './component/AddBook';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <AddBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeaderTop from './components/HeaderTop';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const AppContext = React.createContext('');

function App() {
  const [categoryId, setCategoryId] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <AppContext.Provider value={{ categoryId, setCategoryId, searchValue, setSearchValue }}>
        <HeaderTop />
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

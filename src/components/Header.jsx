import React from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../App';

import Categories from './Categories';
import Search from './Search';

const Header = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const openSearch = () => {
    setIsVisible(true);
  };

  const { setSearchValue } = React.useContext(AppContext);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <div>
              <h1>React Store</h1>
              <p>Больше, чем просто магазин устройств</p>
            </div>
          </div>
        </Link>

        <Categories />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart" aria-label="Открыть корзину">
            <svg
              wstrokewidth="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                stroke="#333"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                stroke="#333"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                stroke="#333"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="button--cart-icon">1</div>
          </Link>
          <button
            onClick={() => {
              openSearch();
              setSearchValue('');
            }}
            className="header__search-button"
            aria-label="Открыть окно поиска">
            <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26">
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </button>
        </div>
        <Search value={isVisible} onClickSearch={() => setIsVisible()} />
      </div>
    </div>
  );
};

export default Header;

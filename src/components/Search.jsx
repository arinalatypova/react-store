import React from 'react';

import { AppContext } from '../App';

const Search = ({ value, onClickSearch }) => {
  const { searchValue, setSearchValue } = React.useContext(AppContext);

  return (
    value && (
      <div className="search">
        <div className="search__container">
          <button
            onClick={() => {
              onClickSearch(!value);
            }}
            aria-label="Закрыть окно поиска"
            className="search__button-close">
            <svg xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36">
              <path d="m251.333-204.667-46.666-46.666L433.334-480 204.667-708.667l46.666-46.666L480-526.666l228.667-228.667 46.666 46.666L526.666-480l228.667 228.667-46.666 46.666L480-433.334 251.333-204.667Z" />
            </svg>
          </button>
          <div className="search__input">
            <label htmlFor="search" className="search__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="38">
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </label>
            <input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              type="text"
              placeholder="Что вы ищете сегодня?"
              id="search"
              name="search"
              className="input__field"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Search;

import React from 'react';
import { useSelector } from '@reduxjs/toolkit';

import { AppContext } from '../App';

import Sort from '../components/Sort';
import Item from '../components/Item';
import Loader from '../components/Item/Loader';
import Pagination from '../components/Pagination';
import Title from '../components/Title';
import { useDispatch } from 'react-redux';

const Home = () => {
  const categoryId = useSelector();
  const dispatch = useDispatch();

  const { searchValue } = React.useContext(AppContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const [sortType, setSortType] = React.useState({
    name: 'Популярные',
    sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://62cc3a178042b16aa7cb9687.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]); // DidMount

  const products = items.map((object) => <Item key={object.id} {...object} />);
  const loaders = [...new Array(8)].map((_, index) => <Loader key={index} />);

  return (
    <>
      <Title />
      <div className="content__top">
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <div className="content__items">{isLoading ? loaders : products}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;

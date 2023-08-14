import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="cart">
      <h2 className="cart__title">Ваша корзина пуста</h2>
      <p>Самое время добавить в нее что-нибудь</p>
      <Link className="button button--outline button--add" to="/">
        Перейти в каталог
      </Link>
    </div>
  );
};

export default Cart;

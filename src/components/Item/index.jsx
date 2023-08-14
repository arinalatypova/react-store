import React from 'react';

import AddButton from '../../components/AddButton';

const Item = ({ title, image, imageAdd, price }) => {
  // const [activeParameter, setActiveParameter] = React.useState(0);

  // const [activeType, setActiveType] = React.useState(0);

  return (
    <div className="item-block">
      <div className="item-block__top">
        <div className="item-block__images">
          <img
            className="item-block__image item-block__image-add"
            src={imageAdd}
            alt="Дополнительное фото устройства"
          />
          <img className="item-block__image" src={image} alt="Устройство" />
        </div>
        <h4 className="item-block__title">{title}</h4>
      </div>
      <div className="item-block__middle">
        <div className="item-block__bottom">
          <div className="item-block__price">{price} ₽</div>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Item;

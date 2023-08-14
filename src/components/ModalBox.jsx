import React from 'react';

const ModalBox = () => {
  const regions = [
    'Москва',
    'Санкт-Петербург',
    'Архангельск',
    'Астрахань',
    'Барнаул',
    'Белгород',
    'Владивосток',
    'Екатеринбург',
    'Иркутск',
    'Казань',
    'Калининград',
    'Нижний Новгород',
    'Омск',
    'Ростов-на-Дону',
    'Самара',
    'Сочи',
    'Уфа',
    'Челябинск',
  ];

  const [activeRegion, setACtiveRegion] = React.useState(0);

  const onClickRegion = (index) => {
    setACtiveRegion(index);
  };

  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__box-content">
          <button className="modal__box-close">
            <svg xmlns="http://www.w3.org/2000/svg" height="34" viewBox="0 96 960 960" width="40">
              <path d="m251.333 851.333-46.666-46.666L433.334 576 204.667 347.333l46.666-46.666L480 529.334l228.667-228.667 46.666 46.666L526.666 576l228.667 228.667-46.666 46.666L480 622.666 251.333 851.333Z" />
            </svg>
          </button>
          <span className="modal__box-title">Выберите ваш регион</span>
          <div className="modal__box-region">
            {regions.map((value, index) => (
              <span
                onClick={() => onClickRegion(index)}
                className={activeRegion === index ? 'modal__box-item active' : 'modal__box-item'}>
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;

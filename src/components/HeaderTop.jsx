import React from 'react';

const HeaderTop = () => {
  return (
    <div className="header header-top">
      <div className="container">
        <button className="header__location">
          <div className="header__location-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 96 960 960" width="20">
              <path d="M517 912 416 640 144 539v-35l672-264-264 672h-35Z" />
            </svg>
          </div>
          <div className="header__location-city">Уфа</div>
        </button>
        <span className="header__user-account-text">
          Для корректного отображения страницы убедитесь, что у вас отключён VPN-клиент.
        </span>
        <button className="header__user-account">
          <div className="header__user-account-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
              <path d="M480 576q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42ZM192 864v-96q0-23 12.5-43.5T239 690q55-32 116.292-49 61.293-17 124.5-17Q543 624 604.5 641T721 690q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.177-3.025-9.412Q689.95 754.353 685 752q-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.724T264 768v24Zm216.212-288Q510 504 531 482.788q21-21.213 21-51Q552 402 530.788 381q-21.213-21-51-21Q450 360 429 381.212q-21 21.213-21 51Q408 462 429.212 483q21.213 21 51 21ZM480 432Zm0 360Z" />
            </svg>
          </div>
          <span className="header__user-account-text">Личный кабинет</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderTop;

import React from 'react';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__img">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="80px"
          height="70px"
          viewBox="0 0 80 70"
          enable-background="new 0 0 80 70">
          <g>
            <path
              fill="#999999"
              d="M34,25H3c-1.65,0-3,1.35-3,3v39c0,1.65,1.35,3,3,3h31c1.65,0,3-1.35,3-3V28C37,26.35,35.65,25,34,25z
                                M35,67c0,0.542-0.458,1-1,1H3c-0.542,0-1-0.458-1-1V28c0-0.542,0.458-1,1-1h31c0.542,0,1,0.458,1,1V67z"></path>{' '}
            <path
              fill="#999999"
              d="M6,8c0-3.309,2.691-6,6-6h56c3.309,0,6,2.691,6,6v25h2V8c0-4.411-3.589-8-8-8H12C7.589,0,4,3.589,4,8v15h2
                              V8z"></path>{' '}
            <path
              fill="#999999"
              d="M77,35H59c-1.65,0-3,1.35-3,3v29c0,1.65,1.35,3,3,3h18c1.65,0,3-1.35,3-3V38C80,36.35,78.65,35,77,35z
                                M78,67c0,0.542-0.458,1-1,1H59c-0.542,0-1-0.458-1-1V38c0-0.542,0.458-1,1-1h18c0.542,0,1,0.458,1,1V67z"></path>{' '}
            <ellipse fill="#999999" cx="18.5" cy="64.6" rx="1.5" ry="1.6"></ellipse>{' '}
            <ellipse fill="#999999" cx="68" cy="64.6" rx="1.5" ry="1.6"></ellipse>{' '}
            <polygon
              fill="#999999"
              points="39,53 45,53 45,60 39,60 39,62 54,62 54,60 47,60 47,53 54,53 54,51 39,51 	"></polygon>
          </g>
        </svg>
      </div>
      <h2 className="not-found__title">Страница не найдена</h2>
    </div>
  );
};

export default NotFound;

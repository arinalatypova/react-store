import React from 'react';
import ContentLoader from 'react-content-loader';

const Loader = () => (
  <ContentLoader
    className="item-block"
    speed={2}
    width={300}
    height={420}
    viewBox="0 0 300 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="28" y="31" rx="0" ry="0" width="307" height="380" />
  </ContentLoader>
);

export default Loader;

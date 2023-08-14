import React from 'react';

const Categories = () => {
  const categories = ['Все', 'Mac', 'iPhone', 'Watch', 'iPad', 'AirPods', 'HomePod', 'Аксессуары'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => setCategoryId(index)}
            className={categoryId === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

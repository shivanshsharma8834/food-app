import React from 'react';

function DishList({ dishes }) {
  return (
    <div>
      <h2>Similar Dishes</h2>
      {dishes.length > 0 ? (
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              <strong>{dish.name}</strong>: {dish.ingredients}
            </li>
          ))}
        </ul>
      ) : (
        <p>No similar dishes found.</p>
      )}
    </div>
  );
}

export default DishList;

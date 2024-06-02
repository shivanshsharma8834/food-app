import React from 'react';
import Card from './Card';

function DishList({ dishes }) {

  const imageStyle = {
    width: '200px',  // Set your desired width
    height: '200px', // Set your desired height
    objectFit: 'cover', // To maintain aspect ratio and cover the area
  };


  return (
    <div>
      <h2>Here's what you might like: </h2>
      {dishes.length > 0 ? (
        <ul>
          {dishes.map((dish, index) => (
            <li key={index}>
              {/* <h2 className='title'><strong>{dish.name}</strong></h2>
              <br></br>
              <img src={dish.img_url} style={imageStyle}></img>
              <br></br>
              Ingredients:
              {dish.ingredients}
              <br></br> */}
              <Card recipeName={dish.name} recipeImage={dish.img_url} recipeIngredients={dish.ingredients}/>
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

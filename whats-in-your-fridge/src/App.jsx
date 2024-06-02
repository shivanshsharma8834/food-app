import React, { useState } from 'react';
import axios from 'axios';
import DishList from './DishList';
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState('');
  const [dishes, setDishes] = useState([]);

  const handleInputChange = (event) => {
    setIngredients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/get_dishes', { ingredients });
      setDishes(response.data);
    } catch (error) {
      console.error('Error fetching similar dishes:', error);
    }
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <div className='empty'></div>
      <div className="mainApp">
        <h1>What's in your fridge?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={ingredients}
              onChange={handleInputChange}
              placeholder="Enter ingredients, e.g., tomato, cheese, garlic"
            />
            <button type="submit">Find Similar Dishes</button>
          </form>
          <DishList dishes={dishes} />
      </div>
      <div className='empty'></div>
    </div>
  );
}

export default App;

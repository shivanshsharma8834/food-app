import React from 'react';

const Card = ({recipeName, recipeImage, recipeIngredients}) => {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);
  const [cardDimensions, setCardDimensions] = React.useState({width: 0, height: 0});
  const cardRef = React.useRef();

  const imageStyle = {
    width: '300px',  // Set your desired width
    height: '300px', // Set your desired height
    objectFit: 'cover',
    borderRadius: '10%',
    // border-radius: '50px'
  };


  React.useEffect(() => {
    setCardDimensions({
      width: cardRef.current.offsetWidth,
      height: cardRef.current.offsetHeight
    });
  }, []);

  const handleMouseMove = (e) => {
    setMouseX(e.pageX - cardRef.current.offsetLeft - cardDimensions.width / 2);
    setMouseY(e.pageY - cardRef.current.offsetTop - cardDimensions.height / 2);
  }

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  }

  const cardStyle = {
    transform: `rotateY(${mouseX / cardDimensions.width * 30}deg) rotateX(${mouseY / cardDimensions.height * -30}deg)`
  };

  const cardBgTransform = {
    transform: `translateX(${mouseX / cardDimensions.width * -40}px) translateY(${mouseY / cardDimensions.height * -40}px)`
  };

  const cardBgImage = {
    backgroundImage: `url(${recipeImage})`
  };

  return (
    <div className="card-whole">
      <div className="card-wrap" 
      onMouseMove={handleMouseMove} 
      onMouseEnter={() => clearTimeout(handleMouseLeave)} 
      onMouseLeave={handleMouseLeave} 
      ref={cardRef}>
        <h3>{recipeName}</h3>
        <div className="card" style={cardStyle}>
          <div className="card-bg" style={{...cardBgTransform, ...cardBgImage}}></div>
          <div className="card-info">
          
            <img src={recipeImage} style={imageStyle}></img>
            {/* <p>{content}</p> */}
          
          </div>
        </div>
        <p>Ingredients: {recipeIngredients}</p>
      </div>
    </div>
      
  )
}
export default Card
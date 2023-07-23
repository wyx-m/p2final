import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const lang= localStorage.getItem('lang')
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height: "530px",zIndex:"-1"}}>
        <img
          className="d-block w-100"
          src="https://kpop2u-unnie.com/cdn/shop/products/FswZFrAaYAENdFj.jpg?v=1680680943"
          alt="First slide"
          style={{height:'100%'}}
        />
        <Carousel.Caption>
          <h3>{lang==='en'?'Trending':'流行'}</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "530px",zIndex:"-1",}} >
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/Zl2O61z-VgU/maxresdefault.jpg"
          alt="Second slide"
          style={{height:'100%'}}
        />

        <Carousel.Caption>
          <h3>{lang==='en'?'Trending':'流行'}</h3>
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height: "530px",zIndex:"-1"}}>
        <img
          className="d-block w-100"
          src="https://1.soompi.io/wp-content/uploads/2015/10/fx-7.jpg"
          alt="Third slide"
          style={{height:'100%'}}
        />

        <Carousel.Caption>
          <h3 className='text-center'>{lang==='en'?'Trending':'流行'}</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CatCard from '../catCard/CatCard';
import { cards } from '../../data';
import './Slide.scss'

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  return <button onClick={() => onClick()} />;
};

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
};

const Slide = () => {

    return (
        <div className='slide'>
            <div className="container">
                <Carousel responsive={responsive} >
                    {cards.map(card=>(
                        <CatCard item={card} key={card.id}/>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Slide
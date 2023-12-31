import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slide.scss'

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
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const Slide = ({children}) => {

    return (
        <div className='slide'>
            <div className="container">
                <Carousel
                  responsive={responsive}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  containerClass="carousel-container"
                  itemClass="carousel-item-padding-40-px"
                >
                    {children}
                </Carousel>
            </div>
        </div>
    )
}

export default Slide
import React from 'react'
import {Link} from "react-router-dom"
import "./GigCard.scss"

const GigCard = ({item}) => {
  return (
    <Link to="/gig/123" className='link'>
        <div className='gigCard'>
            <img src={item.img}/>
            <div className="info">
                <div className="user">
                    <img src={item.pp} alt=""/>
                    <span>{item.username}</span>
                </div>
                <p>{item.desc}</p>
                <div className="star">
                    <img src="./img/star.png" alt=""/>
                    <span>{item.star}</span>
                </div>
            </div>
            <div className="details">
                <div className="price">
                    <span>From ${item.price}</span>
                </div>
                <img src="./img/heart.png" alt=""/>
            </div>
        </div>
    </Link>    
  )
}

export default GigCard
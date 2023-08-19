import React from 'react'
import {Link} from "react-router-dom"
import "./GigCard.scss"
import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"

const GigCard = ({item}) => {

  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
        newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data
        }),
  })
  return (
    <Link to={`/gig/${item._id}`} className='link'>
        <div className='gigCard'>
            <img src={item.cover}/>
            <div className="info">
                {isLoading ? (
                "loading"
                ) : error ? (
                "Something went wrong!"
                ) : (
                <div className="user">
                <img src={data.img || "/img/noavatar.jpg"} alt="" />
                <span>{data.username}</span>
                </div>
                )}
                <p>{item.desc}</p>
                <div className="star">
                    {isNaN(item.totalStars / item.starNumber) ?
                        <h3 style={{color:"FAE392"}}>Unrated seller</h3>:<img src="./img/star.png" alt=""/>}
                    <span>
                    {!isNaN(item.totalStars / item.starNumber) &&
                        Math.round(item.totalStars / item.starNumber)}
                    </span>
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
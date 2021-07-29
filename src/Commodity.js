import React from 'react'
import './Commodity.css'

const Commodity = ({ id, title, image, price, rating }) => {
  return (
    <div className='commodity'>
      <div className='commodity_info'>
        <p>{title}</p>
        <p className='commodity_price'><small>$</small>{price}</p>
      </div>
      <div className='commodity_star'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>★</p>
          ))}
      </div>
      <img src={image} alt='' />
      <button>Add to Cart</button>
      
    </div>
  )
}

export default Commodity

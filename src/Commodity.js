import React from 'react'
import './Commodity.css'
import { useStateValue } from './StateProvider'

const Commodity = ({ id, title, image, price, rating }) => {
  const[{ cart }, dispatch] = useStateValue()

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='commodity'>
      <div className='commodity_info'>
        {/* <p>{title}</p> */}
        {/* <p className='commodity_price'><small>$</small>{price}</p> */}
      </div>
      <p>{title}</p>
      <p className='commodity_price'><small>$</small>{price}</p>
      <div className='commodity_star'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>★</p>
          ))}
      </div>
      <img src={image} alt='' />
      <button onClick={addToCart}>Add to Cart</button>
      
    </div>
  )
}

export default Commodity

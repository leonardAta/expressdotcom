import React from 'react'
import './ProductInBag.css'
import { useStateValue } from './StateProvider'

const ProductInBag = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue()

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id,
    })
  }
  return (
    <div className='productInBag'>
      <img className='productInBag_image' src={image} />

      <div className='productInBag_info'>
        <p className='productInBag_title'>{title}</p>
        <p className='productInBag_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='productInBag_rating'>
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>★</p>
          )
          )}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}

      </div>      
    </div>
  )
}

export default ProductInBag

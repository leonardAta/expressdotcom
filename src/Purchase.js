import React from 'react'
import './Purchase.css'
import ProductInBag from './ProductInBag'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'

const Purchase = ({ purchase }) => {
  return (
    <div className='purchase'>
      <h2>Purchase</h2>
      <p>{moment.unix(purchase.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className='purchase_id'><small>{purchase.id}</small></p>
      {purchase.data.cart.map(item => (
        <ProductInBag 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat 
        renderText={(value) => (
          <h3 className='purchase_total'>Purchase Total: {value}</h3>
        )}
        decimalScale={2}
        value={purchase.data.amount /100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  )
}

export default Purchase
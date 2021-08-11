// import { CardTravel } from '@material-ui/icons'
import React from 'react'
import './Bag.css'
import { useStateValue } from './StateProvider'
import ProductInBag from './ProductInBag'
import Subtotal from './Subtotal'

const Bag = () => {
  const [{ cart}, dispatch] = useStateValue()
  return (
    <div className='bag'>
      <div className='bag_leftSide'>
        <div className='bag_banner'>
          {/* <h3>EXPRESS CREDIT CARD</h3>
          <p>Get an extra 20% Off* your first purchase and get Free Shipping & Returns when you open and use an Express Credit Card. See Details</p> */}
          <img 
          className='bag_image'
          src='https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          alt=''
          />
        </div> 
        <div>
          <h4>Hello user</h4>
          <h3 className='bag_title'>Shopping Bag</h3>

          {cart.map(item => (
            <ProductInBag 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            
            />
          ))}

          
        </div>

      </div>
      <div className='bag_subtotal'>
        <Subtotal />

      </div>
      
    </div>
  )
}

export default Bag

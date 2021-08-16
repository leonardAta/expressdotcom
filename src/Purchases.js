import React, { useState } from 'react'
import { useEffect } from 'react'
import './Purchases.css'
import Purchase from './Purchase'
import { db } from './firebase'
import { useStateValue } from './StateProvider'

const Purchases = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    if(user) {
      db
      .collection('users')
      .doc(user.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc =>({
          id:doc.id,
          data:doc.data()
        })))
      ))
    } else {
      setOrders([])
    }
    
  }, [])

  return (
    <div className='purchases'>
      <h1>Your Purchases</h1>

      <div className='purchases_order'>
        {orders.map(purchase => (
          <Purchase purchase={purchase}/>
        ))}
      </div>
    </div>
  )
}

export default Purchases

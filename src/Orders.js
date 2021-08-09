import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { useStateValue } from './StateProvider'
import './Orders.css'
import Purchase from './Purchase'


const Orders = () => {
  const [{ cart, user }, dispatch] = useStateValue()
  const [orders, setOrders] = useStateValue([])

  useEffect(() => {
    if(user) {
      db
      .collection('users')
      .doc(user.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
          id:doc.id,
          data: doc.data()
        })))
      ))
    } else {
      setOrders([])
    }
    
  }, [user])

  return (
    <div className='orders'>
      <h2>Your Orders</h2>

      <div className='purchaseOrder'>
        {orders.map(purchase => (
          <Purchase purchase={purchase} />
        ))}

      </div>
      
    </div>
  )
}

export default Orders

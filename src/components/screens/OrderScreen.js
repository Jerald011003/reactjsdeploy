
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

function OrderScreen({ match, location, history }) {
    const productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

 
  return (
    <div className="App-body">
    <h1>Order Checkout</h1>
    {/* <img
      height="1"
      width="2"
      src="/1.png"
      alt="Snake & Byte!"
    /> */}
    <p>
    <h5>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h5>
      <span className="book-price">Total Price : </span>
     
      ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
    </p>
    <PayPalScriptProvider>
      <PayPalButtons />
    </PayPalScriptProvider>
  </div>
    
  )
}

export default OrderScreen
import React, { useEffect, useState } from 'react'
import {Table, Button,} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { getOrderDetails, listOrders } from '../../actions/orderActions';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { useDispatch, useSelector } from 'react-redux';


function OrderListScreen({ history }) {

  const dispatch = useDispatch()
  const orderList = useSelector(state => state.orderList)
  console.log(Array.isArray(orderList.orders)); // Check if orders is an array

  
  const { error, loading, orders } = orderList

  const [setProducts] = useState([])

//   useEffect(() => {
//     let mount = true
//     getProduct()
//     .then(res => {console.log("res from api", res)
//         setProducts(res)
//         return() => mount = false
//     })
// }, [])



  useEffect(() =>{
    dispatch(listOrders())
  }, [])
  return (
    <div>
      <div className='text-center'>
        <br/>
          <h3>ORDER LIST</h3>
        <br/>  
          <div class="container">
        <div class="row" >
        </div>
    </div>
      </div>
      <br/>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>TOTAL</th>
          <th>PAID</th>
          <th>DELIVERED</th>
          <th>DETAIL</th>
        </tr>
      </thead>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
        <tbody>  
        {Array.isArray(orders) && orders.map(order => {
            return (
                <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>

                    <td>{order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                          <i className='fas fa-check' style={{

                          color: 'red'}}></i>  
                    )}
                    </td>

                    <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                          <i className='fas fa-check' style={{

                          color: 'red'}}></i>  
                    )}
                    </td>

                    <td><Link to='/cart' className='btn btn-primary'>Update</Link></td>
                </tr>
                );
                })}
      </tbody>
      )}
    </Table>
  </div>  
  )
}

export default OrderListScreen
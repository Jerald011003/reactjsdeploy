import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card,Form } from "react-bootstrap";
import Loader from '../Loader';
import Message from '../Message';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import FormContainer from '../FormContainer'


function LoginScreen({location,history}) {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] :'/'
 
    const userLogin = useSelector(state=>state.userLogin)
    const {error,loading,userInfo}=userLogin

    useEffect(()=>{
        if(userInfo){
            history.push(redirect)
        }
    },[history,userInfo,redirect])


    const submitHandler= (e)=>{
        e.preventDefault()
        dispatch(login(username,password))
    }
    return (
        <div>
         <FormContainer>
          <h2>Sign In</h2>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}

          <Form onSubmit={submitHandler}>


          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control required placeholder='Enter Username' value={username} onChange={(e)=> setUsername(e.target.value)}></Form.Control>
            </Form.Group>


              <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control required type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
              </Form.Group>

            <Button className='mt-3' type='submit' variant='primary'>Sign In</Button>

          </Form>

          <Row className='py-3'>
              <Col>
              New Customer? 
              <Link to={redirect?`/register?redirect=${redirect}`:'/register'}>Register</Link>
              </Col>

          </Row>

         </FormContainer>
        </div>
    )
}

export default LoginScreen

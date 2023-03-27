// import React, { useEffect, useState } from "react";
// import { Navbar, Nav, Col, Row, NavDropdown, Form, Button } from "react-bootstrap";
// import { Link, useHistory } from "react-router-dom";

// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import Message from "../../components/Message";
// import { getUserDetails, userUpdateProfile } from "../../actions/userActions";
// import { USER_UPDATE_PROFILE_RESET } from "../../constants/userConstants";

// function UserScreen({ History }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const userDetails = useSelector((state) => state.userDetails);
//   const { error, loading, user } = userDetails;

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userUpdate = useSelector((state) => state.userUpdate || {});
//   const { success = false } = userUpdate;

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [empdata, empdatachange] = useState(null);
//   useEffect(() => {
//     if (!userInfo) {
//       history.push("/login");
//     } else {
//       if (!user || !user.name || success) {
//         dispatch({ type: USER_UPDATE_PROFILE_RESET });
//         dispatch(getUserDetails("profile"));
//       } else {
//         setName(user.name);
//         setEmail(user.email);
//       }
//     }
//   }, [history, userInfo, dispatch, user, success]);

//   const submitHandler = (e) => {
//     e.preventDefault()
//     if(password != confirmPassword) {
//       setMessage('Password do not match')
//     }else{
//       dispatch(userUpdateProfile({
//         'id': user._id,
//         'name': name,
//         'email': email,
//         'password': password
//       }))
//     }
//   }


//   return (
//     <Row>
//       <Col md={3}>
//         <h2>User Profile</h2>
//           {message && <Message variant='danger'>{message}</Message>}
//           {error && <Message variant='danger'>{error}</Message>}
//           {loading && <Loader />}

//           <div>
//       <h1>{userInfo.name}</h1>
//       <h1>{userInfo.email}</h1>
    
//           </div>

//           <Form onSubmit={submitHandler}>


//               <Form.Group controlId='name'>
//                 <Form.Label>Name</Form.Label>
//                 <Form.Control 
//                 type='name' 
//                 placeholder='Name' 
//                 value={name} 
//                 onChange={(e)=> setName(e.target.value)} required></Form.Control>
//               </Form.Group>

            
//             <Button className='mt-3' type='submit' variant='success'>Submit</Button>

//           </Form>

//       </Col>
//       <Col md={9}>
//         <h2>My Orders</h2>

//         <table className="table table-bordered">
//                         <thead className="bg-dark text-white">
//                             <tr>
//                                 <td>ID</td>
//                                 <td>Date</td>
//                                 <td>Total</td>
//                                 <td>Paid</td>
//                                 <td>Delivered</td>
//                                 <td>Details</td>
                                
//                             </tr>
//                         </thead>
//                         <tbody>

//                             {empdata &&
//                                 empdata.map(item => (
//                                     <tr key={item.id}>
//                                         <td>{item.id}</td>
//                                         <td>{item.date_joined}</td>
//                                         <td>{item.name}</td>
//                                         <td>{item.email}</td>
//                                         <td>{item.phone}</td>
//                                         <td>
//                                             {/* <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a> */}
//                                             {/* <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a> */}
//                                             <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }

//                         </tbody>

//                     </table>
                    
//       </Col>
//     </Row>
//   );
// }

// export default UserScreen;

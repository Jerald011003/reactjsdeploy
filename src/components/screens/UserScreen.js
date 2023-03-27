// import React, { useEffect } from "react";
// import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

// import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from "../../actions/userActions";

// function UserScreen() {
//   const dispatch = useDispatch();
//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const userDetails = useSelector((state) => state.userDetails);
//   const { user } = userDetails;

//   useEffect(() => {
//     if (!user) {
//       dispatch(getUserDetails("profile"));
//     }
//   }, [dispatch, user]);

//   return (
//     <div>
//       <h1>{user && user.name}</h1>
//       <h1>{userInfo && userInfo.email}</h1>
//     </div>
//   );
// }

// export default UserScreen;

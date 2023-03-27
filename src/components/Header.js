import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import { FaHome, FaGamepad, FaShoppingCart, FaUser } from "react-icons/fa";
import { GiSwordsEmblem } from "react-icons/gi";
import { SiTwitch } from "react-icons/si";
import Avatar from "../assets/WASDLogo.png";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [name, setName] = useState(userInfo ? userInfo.name : "");

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
    }
  }, [userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
    history.push('/login'); // redirect to login page
  };
  
  return (
<Navbar bg="dark" variant="dark" expand="lg" style={{ height: "125px" }}>
      <Container>
      <LinkContainer to="/">
          <Navbar.Brand>
          <img
          src={Avatar}
          className="d-inline-block align-top"
          alt="WASD Logo"
          style={{width: "75px", height: "75px"}}
        />{" "}
        {/* <span className="fs-5">WASD Gaming</span> */}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <FaHome className="me-2" />
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/games">
              <Nav.Link>
                <FaGamepad className="me-2" />
                Games
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart className="me-2" />
                Purchases
              </Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            <LinkContainer to="/stream">
              <Nav.Link>
                <SiTwitch className="me-2" />
                Stream
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="More" id="basic-nav-dropdown">
              {userInfo ? (
                <div>
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </div>
              ) : (
                <LinkContainer to="/login">
                  <NavDropdown.Item>
                    <FaUser className="me-2" />
                    Login
                  </NavDropdown.Item>
                </LinkContainer>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

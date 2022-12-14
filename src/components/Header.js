import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import css from "./css/Nav.css";
import logo from "../image/logo3.png"

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
   console.log (userInfo);
  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header className="textWhite">
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="150"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
            <LinkContainer to="/" style={{ color: "#eceeef"}}>
            <Nav.Link>
              <i className="fas fa-home"></i> home
            </Nav.Link>
          </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username" >
                  <LinkContainer to="/profile" style={{ color: "black"}}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler} style={{ color: "black"}}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                <Nav.Link>
                  <i className="fas fa-users"></i> SignUp
                </Nav.Link>
              </LinkContainer>
              </>
              )}
              {/* <LinkContainer to="/register">
                <Nav.Link>
                  <i className="fas fa-users"></i> SignUp
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/contact">
                <Nav.Link>
                  <i className="fas fa-address-book"></i> contact
                </Nav.Link>
              </LinkContainer>
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <LinkContainer to="/admin/userlist" style={{ color: "black"}}>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist" style={{ color: "black"}}>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist" style={{ color: "black"}}>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

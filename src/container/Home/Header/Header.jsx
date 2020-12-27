import React, { useContext } from 'react';
import { Navbar, NavLink, Nav, FormControl, Container, Form} from 'react-bootstrap'
import { productsContext } from "../../../contexts/ProductsContext";
import { Link, useHistory } from "react-router-dom";
import Logo from './img/logo-nike2.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = () => {

  const { productsCountInCart, search,searchProducts} = useContext(productsContext);

  const history = useHistory();

  function handleSearch(e){
    let inp_val = e.target.value;
    const search = new URLSearchParams(window.location.search);
    console.log(search);
    console.log(window.location);
    search.set("q",inp_val);

    console.log(search.toString())
    history.replace("?"+search)
    searchProducts()
  }


    return (
      <div  className="header">
        <Navbar className="navcolor" fixed="top" collapseOnSelect expand="md" variant="dark">
          <Container>
            
            <Navbar.Brand href="">
              <Link to="/">
              <img
                src={Logo}
                height="45"
                width="120"
                className="d-inline-block align-top"
                alt="Logo" 
               />
              </Link>
            </Navbar.Brand>

              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="mr-auto">
                    <Link to="/">
                      <Nav.Link disabled href="#">Home</Nav.Link>
                    </Link>
                    <Link to="/fashion">
                      <Nav.Link disabled>All</Nav.Link>
                    </Link>
                    <Link to="/">
                      <Nav.Link disabled>Men</Nav.Link>
                    </Link>
                    <Link to="/">
                      <Nav.Link disabled>Women</Nav.Link>
                    </Link>
                    <Link to="/admin">
                      <Nav.Link disabled>Admin</Nav.Link>
                    </Link>
                  </Nav>

                  <Nav className="mr-auto">
                      <Link to="/signup">
                    <Nav.Link disabled>SignUp</Nav.Link>
                    </Link>
                    <Link to="/signin">
                      <Nav.Link disabled>SignIn</Nav.Link>
                    </Link>
                  </Nav>

                  <Nav className="mr-auto">
                    <Link to="/cart">
                      <NavLink
                        style={{ fontSize: "20x", color: "white" }}
                        disabled
                        href="#"
                        >
                        <FontAwesomeIcon 
                        icon={faShoppingCart}
                        color={productsCountInCart !== 0 ? "white": "yellow"}
                        />
                        <> {productsCountInCart !== 0 ? "+" + productsCountInCart : ""}</>
                      </NavLink>
                    </Link>
                  </Nav>

                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="search"
                      className="mr-sm-2"
                      onChange={handleSearch}
                      />
                  </Form>
                </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

export default Header;



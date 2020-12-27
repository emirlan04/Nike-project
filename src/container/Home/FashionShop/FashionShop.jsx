import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Nav,
  NavItem,
  NavLink,
  Media,
  Input,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import "./FashionShop.css";

import { productsContext } from "../../../contexts/ProductsContext";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useHistory } from "react-router-dom";

const FashionShop = (props) => {
  const styles = {
    fashion: {
      backgroundColor: "rgb(248, 246, 246)",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      textAlign: "center",
      paddingTop: "22px",
      marginTop: "27px",
    },
    shop: {
      paddingTop: "100px",
    },
    first: {
      border: "1px solid  rgb(165, 159, 159)",
      width: "160px",
      marginLeft:"30px"
    },
    second: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "45px",
    },
    paging: {
      display: "flex",
      justifyContent: "center",
    },
  };

  const {
    products,
    getProducts,
    addAndDeleteProductInCart,
    checkProductInCart,
    pageTask,
    setPage,
    page,

    totalCount,
    getProductsFashion

  } = useContext(productsContext);



  const history = useHistory();
  const search = new URLSearchParams(history.location.search);

  function fetchParams(params, value) {
    if(value === 'All'){
      // props.history.push('/')
      props.history.push(props.location.pathname.replace(params))
      getProducts()
      return
    }
    let search = new URLSearchParams(props.history.location.search);
    search.set(params, value)
    let url = `${props.location.pathname}?${search.toString()}`
    props.history.push(url);
    console.log(params);
    getProducts()

  }


  useEffect(() => {
    getProductsFashion();
    getProducts();
   
  }, []);


  return (
    <div>
      {/* <Nav style={styles.fashion}>
        <Media className="fashion-img" left>
          <img src={image1} alt="" />
        </Media>
        <NavItem style={styles.shop}>
          <h2>Fashion Shop</h2>
          <p>
            Seamlessly predominate enterprise metrics <br /> without performance
            based process improvements.
          </p>
        </NavItem>
        <Media className="fashion-img" right>
          <img src={image2} alt="" />
        </Media>
      </Nav> */}
      {/* <Container style={styles.second}>
        <UncontrolledDropdown inNavbar>
          <DropdownToggle style={styles.first} nav caret>
            Prices
          </DropdownToggle>
          <DropdownMenu
           aria-label="price"
           name="price"
           onClick={(event) => fetchParams('price_lte=', event.target.value)}
          >

            <DropdownItem value="2000"> below 2000</DropdownItem>
            <DropdownItem value="3000"> below 3000</DropdownItem>
            <DropdownItem value="4000">below 6000</DropdownItem>
            <DropdownItem value="500000">below 500000</DropdownItem>
            <DropdownItem value="All">ALL</DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
       
       
       
        <UncontrolledDropdown style={styles.first} inNavbar>
          <DropdownToggle nav caret>
            All Brands
          </DropdownToggle>
          <DropdownMenu style={styles.first} right
           aria-label="title"
           name="title"
           onClick={(event) => fetchParams('title', event.target.value)}
           >
            <DropdownItem
            value="Macbook"
            >Macbook</DropdownItem>
            <DropdownItem
             value="Samsung"
            >Samsung</DropdownItem>
            <DropdownItem
            value="Asus"
            >Asus</DropdownItem>
             <DropdownItem
            value="All"
            >All</DropdownItem>

          </DropdownMenu>
        </UncontrolledDropdown>
      </Container> */}

      <Container>
        <div className="container">
          {/* START OF ROW  class*/}

          {/* PRODUCT CLASS COL4 */}
          <div className="row">
            {products.map((item) => (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="item">
                    <div className="img-wrapper">
                      <Link to={`/productcart/${item.id}`}>
                        <Media className="fashion-img" right>
                          <img className="img-fluid" src={item.image} alt="" />
                        </Media>
                      </Link>
                      <div className="button">
                        <p>
                          <strong>{item.title}</strong>
                        </p>
                        <p>
                          <strong>{item.price}</strong>
                        </p>
                        <button
                          onClick={() => addAndDeleteProductInCart(item)}
                          className={
                            checkProductInCart(item.id)
                              ? "btn btn-dark"
                              : "btn btn-primary"
                          }
                        >
                          Add to cart
                        </button>
                        <div className="icons">
                          <NavLink disabled>
                            <i className="fas fa-search"></i>
                          </NavLink>
                          <NavLink disabled>
                            <i className="fas fa-compress-arrows-alt"></i>
                          </NavLink>
                          <NavLink disabled>
                            <i className="fas fa-heart"></i>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div className="info">{item.description}</div>
                    <p>
                      <strong>{item.price}</strong>
                    </p>
                  </div>
                </div>
              </>
            ))}

            {/* end PRODUCT CLASS COL4 */}
          </div>
          {/* END OF ROW  class*/}
        </div>
      </Container>

      <Container className="pagination">
        <div style={styles.paging}>
          <Pagination
            onChange={(e, newpage) => pageTask(newpage)} 
            page={parseInt(search.get("_page")) || 1} 
            count={Math.ceil(totalCount / 6)}
            defaultPage={1}
          />
        </div>
      </Container>

    </div>
  );
};

export default FashionShop;

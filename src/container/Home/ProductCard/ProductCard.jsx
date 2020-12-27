import React, { useState, useEffect, useContext } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import "./ProductCards.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container } from "reactstrap";

const ProductCard = (props) => {
  const {
    products,
    addAndDeleteProductInCart,
    getProductID,
    productDetails,
  } = useContext(productsContext);

  useEffect(() => {
    getProductID(props.match.params.id);
  }, []);

  console.log(products);

  return (
    <div className="mainProductCard">
      {productDetails != null ? (
        <>
          <Container>
            <Row>
              
                <Col lg="4" md="6" xs="12" 
                    style={{marginleft:"30px"}}>
                  <img className="img4" src={productDetails.image}></img>
                </Col>
                <Col lg="4" md="6" xs="12">
                  <div className="mainPc2">
                    <h2>{productDetails.title}</h2>

                    <h6
                
                    >{productDetails.description}</h6>

                    <h4>{productDetails.price} сом </h4>

                    <div className="innerBlock4">
                      <Link to="/cart">
                        <button
                          class="buttonProduct1"
                          onClick={() =>
                            addAndDeleteProductInCart(productDetails)
                          }
                        >
                          <h5>Buy now</h5>
                        </button>
                      </Link>
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        color={"black"}
                        style={{ fontSize: "40px", paddingLeft: "15px" }}
                      />
                      <FontAwesomeIcon
                        icon={faHeart}
                        color={"black"}
                        style={{ fontSize: "40px", paddingLeft: "15px" }}
                      />
                      <FontAwesomeIcon
                        icon={faLink}
                        color={"black"}
                        style={{ fontSize: "40px", paddingLeft: "15px" }}
                      />
                    </div>
                  </div>
                </Col>
            </Row>
            <Row>
              <Col>
                <div className="mainPc3">
                  <div className="innerBlock5">
                    {" "}
                    <h4
                    >Description</h4>
                  </div>
                  <div className="innerBlock6">
                    <h6
                        style={{marginBottom:"100px"}}>{productDetails.description} </h6>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;

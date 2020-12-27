import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../../contexts/ProductsContext";
import { Link } from "react-router-dom";
import {
  Button,
  Media,
  Row,
  Col,
  Container,
} from "reactstrap";

import Pagination from "@material-ui/lab/Pagination";

const styles = {
  one: {
    display: "flex",
    flexDirection: "row",
  },
  mainImage:{
    height:"auto",
  }

};

const ProductItems = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const {
    addAndDeleteProductInCart,
    checkProductInCart,
    products,
    getProducts,
    pageTask,
    setPage,
    page,
  } = useContext(productsContext);

  useEffect(() => {
    getProducts();
    pageTask(page);
  }, [page]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container style={{ paddingBottom: "150px" }}>
      <Row>
        <Col xs="12">
        <div className="container">
          <div className="row">
            {products.map((item) => (
              <>
                <div className="col-lg-4  col-sm-12 col-md-6">
                  <div className="item">
                    <div className="img-wrapper" >
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
                          <strong>{item.price} сом</strong>
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
                        
                      </div>
                    </div>
                    <div className="info">{item.description}
                    <p>
                      <strong>{item.price} сом</strong>
                    </p>
                    </div>
                  </div>


                  
                </div>
              </>
            ))}
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col col="12" style={{textAlign: "center", marginTop: "50px"}}>
        <Link to="/fashion">
            <Button className="btn btn-dark">Watch All</Button>
        </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductItems;

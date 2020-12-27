import React, {useEffect, useContext } from "react";
import { productsContext } from "../../contexts/ProductsContext";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useHistory } from "react-router-dom";
import { Container, Table } from "reactstrap";
import './Admin.css'
import 'bootstrap'

const styles = {
  first: {
    display: "flex",
    justifyContent: "center",
  },
};

const Admin = (props) => {

  const history = useHistory();
  const search = new URLSearchParams(history.location.search);


  const {
    products,
    getProducts,
    deleteContact,
    editProduct,
    pageTask,
    page,

    getProductsAdmin,
    totalCount
  } = useContext(productsContext);

  useEffect(() => {
    getProductsAdmin();
    getProducts();
  }, []);


  return (
    <div className="admin">
      <Link to="/addproduct">
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button type="submit" className="btn btn-dark my-5">
            Add New Product
          </button>
        </div>
      </Link>
      <Table  className="tableMain">
        <thead className="first">
          <tr>
            <th 
            className="description"
            >#</th>
            <th>Title</th>
            <th
            className="description"
            
            >Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <>
              <tr>
                <th 
                className="description"
                scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td
                className="description"
                 style={{ width: "30%" }}>{item.description}</td>
                <td style={{ width: "15%" }}>
                  <img style={{ width: "100%" }} src={item.image} />
                </td>
                <td>{item.price}</td>
                <button
                  className="btn-admin"
                  style={{ marginTop: "20px" }}
                  className="btn btn-dark"
                  onClick={() => deleteContact(item.id)}
                >
                  Delete
                </button>
                <Link to="/edit">
                  <button
                  className="btn-admin"
                    style={{ marginTop: "20px" }}
                    className="btn btn-dark"
                    onClick={() => editProduct(item.id)}
                  >
                    Edit
                  </button>
                </Link>
              </tr>
            </>
          ))}
          </tbody>
        </Table>

      <Container className="pagination">
        <div>
          <Pagination
            onChange={(e, newpage) => pageTask(newpage)}
            page={parseInt(search.get("_page")) || 1}
            count={Math.ceil(totalCount / 3)}
            defaultPage={1}
          />
        </div>
      </Container>
    </div>
  );
};

export default Admin;

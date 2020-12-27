import React, {useState, useContext } from "react";
import { productsContext } from "../../contexts/ProductsContext";


const AddProduct = () => {

  const [product, setProduct] = useState ({});

  const { addProduct, products } = useContext(productsContext);

  function handleInputsValue (e) {
    let obj = {
        ...product,
        [e.target.name]: e.target.value
    }

    console.log(products);
    console.log(obj);

    setProduct(obj)

}

  return (
    <div className="block">
        <div className="wrapper">
            <div className="input-data">
                <input type="text"
                name="title"
                onChange={handleInputsValue} 
                required/>
                <label>title</label>
            </div>
        </div>
        <div className="wrapper">
            <div className="input-data">
                <input type="text" 
                name="description"
                onChange={handleInputsValue} 
                required/>
                <label>description</label>
            </div>
        </div>
        <div className="wrapper">
            <div className="input-data">
                <input type="text" 
                name="price"
                onChange={handleInputsValue} 
                required/>
                <label>price</label>
            </div>
        </div>
        <div className="wrapper">
            <div className="input-data">
                <input type="text" 
                name="image"
                onChange={handleInputsValue}
                required/>
                <label>image</label>
            </div>
        </div>
            <button  type="submit" className="btn btn-dark"  onClick={() => addProduct(product)}>
                Save Product
            </button>
    </div>
  );
};

export default AddProduct;
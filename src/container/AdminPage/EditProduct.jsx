import React, {useContext, useEffect, useState} from 'react';
import { productsContext } from "../../contexts/ProductsContext";
import './EditProduct.css'

const EditProduct = (props) => {

    const {productsToEdit, saveProduct } = useContext(productsContext)

    const [ editItem, setEditItem ] = useState(productsToEdit)

    useEffect(() => {
        setEditItem(productsToEdit)
    }, [productsToEdit])

    function handle (e) {
        let obj = {
            ...editItem,
            [e.target.name]: e.target.value
        }
        setEditItem(obj)
    }

    return (
        <div className="block">
             {editItem?
             <>
             <div className="wrapper">
                 <div className="input-data">
                     <input type="text"
                      name="title"
                      value={editItem.title}
                      onChange={handle}
                      required/>
                     <label>title</label>
                 </div>
             </div>
             <div className="wrapper">
                 <div className="input-data">
                     <input type="text" 
                     name="description"
                     value={editItem.description}
                     onChange={handle}
                     required/>
                     <label>description</label>
                 </div>
             </div>
             <div className="wrapper">
                 <div className="input-data">
                     <input type="text" 
                     name="price"
                     value={editItem.price}
                     onChange={handle}
                     required/>
                     <label>price</label>
                 </div>
             </div>
             <div className="wrapper">
                 <div className="input-data">
                     <input type="text" 
                     name="image"
                     value={editItem.image}
                     onChange={handle}
                     required/>
                     <label>image</label>
                 </div>
             </div>
             <button  type="submit" className="btn btn-dark" onClick={() => saveProduct(editItem, props.history)}>
            Save Product
          </button>
            </>
            : <h1>Loading</h1>}
        </div>
     
    );
};

export default EditProduct;
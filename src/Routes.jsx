import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './container/Home/Footer/Footer';
import Header from './container/Home/Header/Header';
import HomePage from './container/Home/HomePage/HomePage';
import ProductsContextProvider from "./contexts/ProductsContext";
import Admin from "./container/AdminPage/Admin"
import FashionShop from "./container/Home/FashionShop/FashionShop"
import AddProduct from './container/AdminPage/AddProduct';
import SignIn from './container/Home/SignIn/SignIn';
import SignUp from './container/Home/SignUp/SignUp';
import AuthContextProvider from './contexts/AuthContext';
import EditProduct from './container/AdminPage/EditProduct';
import Cart from './container/Cart/Cart';
import Cards from './container/Cards/Cards';
import ProductCard from './container/Home/ProductCard/ProductCard'
import Address from './container/Checkout/AddressForm'
import PaymentForm from './container/Checkout/PaymentForm'
import Review from './container/Checkout/Review'
import Checkout from './container/Checkout/Review'


const Routes = () => {
    return (
        <div>
                <BrowserRouter>
                 <ProductsContextProvider>
                    <Header />
                        <Switch>
                            <Route exact path="/admin" component={Admin} /> 
                            <Route exact path="/addproduct" component={AddProduct} />
                            <Route exact path="/edit" component={EditProduct} />
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/fashion" component={FashionShop} />
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/productcart/:id" component={ProductCard} />
                            <Route exact path="/address" component={Address} />
                            <Route exact path="/payment" component={PaymentForm} />
                            <Route exact path="/review" component={Review} />
                            <Route exact path="/checkout" component={Checkout} />
                            <Route exact path="/cards" component={Cards} />


                            
                            <AuthContextProvider>
                                <Route exact path="/signin" component={SignIn}  />
                                <Route exact path="/signup" component={SignUp}  />
                            </AuthContextProvider>
                        </Switch>
                        <Footer />
                  </ProductsContextProvider>
                </BrowserRouter>
        </div>
    );
};

export default Routes;
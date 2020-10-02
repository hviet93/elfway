import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from "./pages/AboutUs";
import Checkout from "./pages/Checkout";
import ContactUs from "./pages/ContactUs";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route
                exact={true}
                path="/"
                component={Home}
            />
            <Route
                path="/checkout"
                component={Checkout}
            />
            <Route
                exact={true}
                path="/product"
                component={Products}
            />
            <Route
                path="/product/:productId"
                component={Products}
            />
            <Route
                path="/blogs"
                exact={true}
                component={Blogs}
            />
            <Route
                path="/blogs/:blogId"
                component={BlogDetail}
            />
            <Route
                path="/about-us"
                component={AboutUs}
            />
            <Route
                path="/contact"
                component={ContactUs}
            />
            <Route render={() => {
                return (
                    <p>Page Not Found</p>
                );
            }} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;

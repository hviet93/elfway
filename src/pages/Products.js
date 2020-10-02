import React from "react";
import ProductsContainer from "../components/ProductsContainer/ProductsContainer.component";
import Header from "../components/Header/Header.component";

const Products = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <ProductsContainer
                params={props.match.params}
            />
        </React.Fragment>
    )
}

export default Products;

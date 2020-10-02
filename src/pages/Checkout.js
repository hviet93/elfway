import React from "react";
import Header from "../components/Header/Header.component";
import CheckoutComponent from "../components/Checkout/Checkout.component";

class Checkout extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <CheckoutComponent/>
            </React.Fragment>
        )
    }
}

export default Checkout;

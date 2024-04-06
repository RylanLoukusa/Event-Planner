
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { React, useState } from "react";

const onCreateOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [
            {
                amount: {
                    value: "12.99"
                }
            }
        ]
    });
}

const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
        const name = details.payer.name.given_name;
        alert(`Transaction completed by ${name}`);
    });
}

const Checkout = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    return (
        <div className="checkout">
            {isPending ? <p>Loading...</p> : (
                <PayPalButtons
                    createOrder={(data, actions) => onCreateOrder(data, actions)}
                    onApprove={(data, actions) => onApproveOrder(data, actions)}
                />
            )}
        </div>
    );
}

export default Checkout;
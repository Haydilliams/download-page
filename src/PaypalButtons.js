import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
require('dotenv').config();

export default function PaypalButtons(props) {

    const clientId = process.env.REACT_APP_CLIENT_ID;

    return (
        <PayPalButton
            style={{
                'color': 'blue'
            }}

            options={{
                clientId: clientId
            }}

            amount={props.price}
            shippingPreference="NO_SHIPPING"
            onSuccess={(details, data) => {
                alert("Transaction completed by " + details.payer.name.given_name);

                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                    method: "post",
                    body: JSON.stringify({
                        orderID: data.orderID
                    })
                });
            }}
        />
    );
}
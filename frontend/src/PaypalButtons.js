import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
require('dotenv').config();

export default function PaypalButtons(props) {

    const clientId = (() => {
        if (process.env.NODE_ENV === "production") {
            return process.env.REACT_APP_LIVE_CLIENT_ID;
        } else {
            return process.env.REACT_APP_SANDBOX_CLIENT_ID;
        }
    })();

    return (
        <div className="paypal-holder">
            <PayPalButton
                style={{
                    'color': 'blue'
                }}
                options={{ clientId: clientId }}
                amount={props.price}
                shippingPreference="NO_SHIPPING"
                onSuccess={(details, data) => {

                    //Call server to save the transaction
                    axios.post(props.urlString + "/add-download", {
                        firstName: details.payer.name.given_name,
                        lastName: details.payer.name.surname,
                        email: details.payer.email_address,
                        paid: true,
                        price: props.price
                    })
                        // Store data in DB
                        .then(res => {
                            // Now begin the download process when DB call is done
                            return props.downloadHandler();
                        })

                        // Catches error in the MongoDB call
                        .catch((error) => {
                            console.log(error.response);
                        })
                }}
                catchError={(err) => {
                    console.log("Catch error caught: ", err);
                }}
                onError={(err) => {
                    console.log("On error caught", err);
                }}
            />
        </div>
    );
}
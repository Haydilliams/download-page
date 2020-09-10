import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import axios from 'axios';
require('dotenv').config();

export default function PaypalButtons(props) {

    const clientId = process.env.REACT_APP_CLIENT_ID;
    console.log(process.env.NODE_ENV);

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
                            console.log('Data added: ', res.data);
                            // Now begin the download process when DB call is done
                            return props.downloadHandler();
                        })

                        // Catches error in the MongoDB call
                        .catch((error) => {
                            console.log(error.response);
                        })
                }}
                catchError={(err) => {
                    console.log("Catch error caught");
                }}
                onError={(err) => {
                    console.log("On error caught");
                }}
            />
        </div>
    );
}
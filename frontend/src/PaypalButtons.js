import React, { useEffect, useState } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';
require('dotenv').config();

export default function PaypalButtons(props) {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);

    const clientId = (() => {
        if (process.env.NODE_ENV === "production") {
            return process.env.REACT_APP_LIVE_CLIENT_ID;
        } else {
            return process.env.REACT_APP_SANDBOX_CLIENT_ID;
        }
    })();

    if (isLoaded) {
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
    } else {
        return (
            <div className="loading-holder">
                <BeatLoader
                    size={15}
                    margin={6}
                    color={"#7dc2f0"}
                />
            </div>
        );
    }

}
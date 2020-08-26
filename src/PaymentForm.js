import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CurrencyInput from 'react-currency-input';
import PaypalButtons from './PaypalButtons'

export default function PaymentForm(props) {

    const [isPaying, setIsPaying] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(5);
    const test = process.env.REACT_APP_TEST;

    function handlePriceChange(event) {
        setCurrentPrice(event.target.value);
        setButtonClicked(false);
    };

    useEffect(() => {
        currentPrice == 0 ? setIsPaying(false) : setIsPaying(true);
    });

    function buttonBehavior() {
        if (currentPrice == 0) {
            return 'Download';
        }
        else {
            return 'Pay';
        }
    };

    return (
        <div className='payment-form'>
            <div className="currency-input-and-button">
                <CurrencyInput className="currency-input" value={currentPrice} onChangeEvent={handlePriceChange}></CurrencyInput>
                <Button className="payment-button" onClick={() => setButtonClicked(true)}>{buttonBehavior()}</Button>

            </div>
            <div className="paypal-button-container">
                <div> {isPaying && buttonClicked &&
                    <div className="paypal-button-container2">
                        <PaypalButtons price={currentPrice}></PaypalButtons>
                    </div>}
                    {!isPaying && buttonClicked && <h1>DOWNLOAD NOW</h1>}</div>
            </div>
        </div>
    );
}

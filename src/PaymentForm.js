import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import CurrencyInput from 'react-currency-input';
import PaypalButtons from './PaypalButtons'

export default function PaymentForm(props) {

    const [isPaying, setIsPaying] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [currentPrice, setCurrentPrice] = useState(5);

    function handlePriceChange(event) {
        setCurrentPrice(event.target.value);
        setButtonClicked(false);
    };

    useEffect(() => {
        currentPrice == 0 ? setIsPaying(false) : setIsPaying(true);
    });

    function buttonBehavior() {
        if (props.currentPrice == 0) {
            return 'Download';
        }
        else {
            return 'Pay';
        }
    };

    return (
        <div>
            <CurrencyInput value={currentPrice} onChangeEvent={handlePriceChange}></CurrencyInput>
            <Button onClick={() => setButtonClicked(true)}>{buttonBehavior()}</Button>
            {isPaying && buttonClicked && <PaypalButtons></PaypalButtons>}
            {!isPaying && buttonClicked && <h1>DOWNLOAD NOW</h1>}
        </div>
    );
}

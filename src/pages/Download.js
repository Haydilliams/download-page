import React, { useState } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import '../App.css';
import '../App.scss';
import PaymentForm from "../PaymentForm";

export default function Download(props) {

    // Rather than importing every single image, this is a nice one compact solution.
    // kudos to: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../images', false, /\.(jpe?g)$/));
    var imageName = props.match.params.imageName
    var imagePath = imageName + "500.jpg";
    var readableImageName = imageName.replace(/_/g, " ");

    if (imagePath in images) {
        return (
            <div className="App">
                <div className="header">
                    <NavLink to='/'>{"<--"} Back to All Images</NavLink>
                </div>
                <div className='download-wrapper'>
                    <div className='download-photo-block'><img src={images[imagePath]} alt={readableImageName} /></div>
                    <div className='text-and-payment-block'>
                        <div className='download-text-block'>
                            A High-resolution download of {readableImageName}. Simply pay as little or as
                             much as you want: whatever you feel is right.
                        </div>
                        <PaymentForm></PaymentForm>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to={{ pathname: "/404", state: {} }} />
        );
    }
}


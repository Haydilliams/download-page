import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import '../App.css';
import '../App.scss';
import axios from 'axios';
import FileSaver from 'file-saver';
import Header from '../Header';
import { CSSTransition } from 'react-transition-group';
import PaypalButtons from '../PaypalButtons'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormatCustom from '../NumberFormatCustom';
import FreeDownloadForm from '../FreeDownloadForm';
import Confirmation from '../Confirmation'
require('dotenv').config();

export default function Download(props) {

    const [isPaying, setIsPaying] = useState(true);
    const [currentPrice, setCurrentPrice] = useState('5.00');
    const [finishedPaying, setFinishedPaying] = useState(false);
    const [errorFound, setErrorFound] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const classes = useStyles();

    const url = (() => {
        if (process.env.NODE_ENV === "production") {
            return "https://haydenclay.page";
        } else {
            return "http://localhost:8081";
        }
    })();

    // Rather than importing every single image, this is a nice one compact solution.
    // kudos to: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    const images = importAll(require.context('../images', false, /\.(jpe?g)$/));
    var imageName = props.match.params.imageName
    var imagePath = imageName + "500.jpg";
    var readableImageName = imageName.replace(/_/g, " ");

    function handlePriceChange(event) {
        setCurrentPrice(event.target.value);
    };

    // This useEffect only runs on componentMount, and simply scrolls to top of page
    useEffect(() => { window.scrollTo(0, 0) }, []);

    // This useEffect only runs on every re-render, and handles the paying state
    useEffect(() => {
        (currentPrice === '0.00' || currentPrice === '.00') ? setIsPaying(false) : setIsPaying(true);
    }, [currentPrice]);

    function downloadImage() {
        setFinishedPaying(true);
        axios.get(url + "/download", {
            params: { imageName: imageName }, responseType: 'blob'
        })
            // Handling the response after the download request begins here
            .then(response => {
                const blob = new Blob([response.data], { type: "image/jpg" });
                FileSaver.saveAs(blob, 'image.jpg');
            })

            // Catch any errors in retrieving image
            .catch(err => {
                setErrorFound(true);
                if (err.response) {
                    setErrorMessage("The following error was received: " + err +
                        ", with the following status message: " + err.response.statusText
                    );
                } else if (err.request) {
                    setErrorMessage("A request was made, but no response was received: " + err);
                } else {
                    setErrorMessage("An unknown error occured: " + err.message);
                }
            });
    }

    if (imagePath in images) {
        return (
            <div className="App">
                <Header navElement={<NavLink to='/'>{"←"} Back to All Images</NavLink>}></Header>
                <div className='download-wrapper'>
                    <div className='download-photo-block'><img src={images[imagePath]} alt={readableImageName} /></div>
                    <div className='download-text-block'>
                        <div className="download-text">
                            A High-resolution download of {readableImageName}. Simply pay as little or as
                             much as you want: whatever you feel is right.
                            </div>
                        <div className="download-text">
                            Payments are handled securely through Paypal.
                            </div>
                        <div className="download-text">
                            Note that purchasing and/or downloading this image does not grant you any rights to use it commercially.
                            This image is for personal use only, and may not be used in any commerical or for-profit manner.
                            </div>
                        <div></div>
                        <div className="price-holder">
                            <form className={classes.root} noValidate autoComplete="on">
                                <TextField
                                    label="Pay what you want"
                                    value={currentPrice}
                                    onChange={handlePriceChange}
                                    name="numberformat"
                                    variant="outlined"
                                    id="formatted-numberformat-input"
                                    InputProps={{ inputComponent: NumberFormatCustom }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form-animation-holder">
                    <div className="form-holder">
                        <CSSTransition unmountOnExit in={isPaying && !finishedPaying && !errorFound}
                            timeout={{ enter: 300, exit: 100 }} classNames="pay-form">
                            <PaypalButtons imageName={imageName} urlString={url} downloadHandler={downloadImage} price={currentPrice}></PaypalButtons>
                        </CSSTransition>
                    </div>
                    <div className="positioning-form-holder">
                        <CSSTransition unmountOnExit in={!isPaying && !finishedPaying && !errorFound}
                            timeout={{ enter: 300, exit: 100 }} classNames="pay-form">
                            <FreeDownloadForm imageName={imageName} urlString={url} downloadHandler={downloadImage}></FreeDownloadForm>
                        </CSSTransition>
                    </div>
                    <CSSTransition unmountOnExit in={finishedPaying && !errorFound}
                        timeout={{ enter: 300, exit: 100 }} classNames="pay-form">
                        <Confirmation downloadHandler={downloadImage}></Confirmation>
                    </CSSTransition>
                    {errorFound &&
                        <div className="positioning-form-holder">
                            <div className="error-message">
                                <div>Oh no! An error occured. Please refresh and try again. </div>
                                <div>If the error persists, please email haydilliams@gmail.com the error message below:</div>
                                <div>{errorMessage}</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    } else {
        return (
            <Redirect to={{ pathname: "/404", state: {} }} />
        );
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            width: '100%',
        },
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(170, 198, 250)',
            },
        }
    },
}));


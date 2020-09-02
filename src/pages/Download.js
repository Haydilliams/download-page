import React, { useState, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import '../App.css';
import '../App.scss';
import Header from '../Header';
import { CSSTransition } from 'react-transition-group';
import PaypalButtons from '../PaypalButtons'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormatCustom from '../NumberFormatCustom';
import FreeDownloadForm from '../FreeDownloadForm';

export default function Download(props) {

    // Rather than importing every single image, this is a nice one compact solution.
    // kudos to: https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack

    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const [isPaying, setIsPaying] = useState(true);
    const [currentPrice, setCurrentPrice] = useState(5);
    const classes = useStyles();

    function handlePriceChange(event) {
        setCurrentPrice(event.target.value);
    };

    useEffect(() => {
        currentPrice == 0 ? setIsPaying(false) : setIsPaying(true);
    }, [currentPrice]);

    function buttonBehavior() {
        if (currentPrice == 0) {
            return 'Download';
        }
        else {
            return 'Pay';
        }
    };

    const images = importAll(require.context('../images', false, /\.(jpe?g)$/));
    var imageName = props.match.params.imageName
    var imagePath = imageName + "500.jpg";
    var readableImageName = imageName.replace(/_/g, " ");

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
                <div className="form-animation-holder">
                    <div className="form-holder">
                        <CSSTransition unmountOnExit in={isPaying}
                            timeout={{ enter: 300, exit: 100 }} classNames="pay-form">
                            <PaypalButtons price={currentPrice}></PaypalButtons>
                        </CSSTransition>
                    </div>
                    <div className="form-holder">
                        <CSSTransition unmountOnExit in={!isPaying}
                            timeout={{ enter: 300, exit: 100 }} classNames="pay-form">
                            <FreeDownloadForm imageNameKey={imageName}></FreeDownloadForm>
                        </CSSTransition>
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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 250,
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


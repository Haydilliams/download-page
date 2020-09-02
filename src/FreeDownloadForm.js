import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import FileSaver from 'file-saver';
import './App.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
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
    button: {
        margin: theme.spacing(1),
        background: '#90caf9',
        color: 'white',
        height: 48,
        padding: '0 40px'
    }
}));

export default function FreeDownloadForm(props) {

    const classes = useStyles();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const nameErrorMessage = "Cannot be empty";
    const emailErrorMessage = "Must be valid email";

    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    // kudos to https://www.w3resource.com/javascript/form/email-validation.php
    function validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit() {

        let firstNameInvalid = firstName === "";
        let lastNameInvalid = lastName === "";
        let emailInvalid = !validateEmail(email);

        setFirstNameError(firstNameInvalid);
        setLastNameError(lastNameInvalid);
        setEmailError(emailInvalid);

        if (firstNameInvalid || lastNameInvalid || emailInvalid) {
            console.log("Error present in form");
        } else {

            // Valid Form, post to DB 
            axios.post('http://localhost:5000/add-free', {
                firstName: firstName,
                lastName: lastName,
                email: email
            })
                // Store data in DB
                .then(res => {
                    console.log('Data added: ', res.data);
                    // Now begin the download process when DB call is done
                    return axios.get(`http://localhost:5000/download`, {
                        params: { imageName: props.imageNameKey }, responseType: 'blob'
                    })
                })

                // Catches error in the MongoDB call
                .catch((error) => { 
                    console.log(error.response);
                })
                
                // Handling the response after the download request begins here
                .then(response => { 
                    const blob = new Blob([response.data], { type: "image/jpg" });
                    console.log('Saving image...');
                    FileSaver.saveAs(blob, 'image.jpg');
                })
                
                // Catch any errors in retrieving image
                .catch(err => { 
                    if (err.response) {
                        var errorMessage = 'The following error response was received: ';
                        console.log("The error: ", err);
                        console.log(errorMessage, err.response);
                        console.log('Data: ', err.response.data);
                        console.log('Status: ', err.response.status);
                    } else if (err.request) {
                        var errorMessage = 'A request was made, but no response was received: ';
                        console.log(errorMessage, err.request);
                    } else {
                        var errorMessage = 'An unknown error occured: ';
                        console.log(errorMessage, err.message);
                    }
                });
        }
    }


    /*
        function handleDownload(imageNameKey) {
            console.log(imageNameKey);
            axios.get(`http://localhost:5000/download`, {
                params: {
                    imageName: imageNameKey
                },
                responseType: 'blob'
            }).then(response => {
                const blob = new Blob([response.data], { type: "image/jpg" });
                console.log('Saving image...');
                FileSaver.saveAs(blob, 'image.jpg');
            }).catch(err => { // set state to display error
                if (err.response) {
                    var errorMessage = 'The following error response was received: ';
                    console.log("The error: ", err);
                    console.log(errorMessage, err.response);
                    console.log('Data: ', err.response.data);
                    console.log('Status: ', err.response.status);
                } else if (err.request) {
                    var errorMessage = 'A request was made, but no response was received: ';
                    console.log(errorMessage, err.request);
                } else {
                    var errorMessage = 'An unknown error occured: ';
                    console.log(errorMessage, err.message);
                }
            })
    
        */

    return (
        <div className="free-form-holder">
            <form className={classes.root} noValidate autoComplete="on">
                <div >
                    <TextField error={firstNameError} onChange={handleFirstNameChange} helperText={firstNameError && nameErrorMessage}
                        required id="firstName" label="First Name" variant="outlined" />
                </div>
                <div >
                    <TextField error={lastNameError} onChange={handleLastNameChange} helperText={lastNameError && nameErrorMessage}
                        required id="lastName" label="Last Name" variant="outlined" /></div>
                <div >
                    <TextField error={emailError} onChange={handleEmailChange} helperText={emailError && emailErrorMessage}
                        required id="email" label="Email" variant="outlined" />
                </div>
                <div >
                    <Button className={classes.button} onClick={handleSubmit} variant="contained" disableElevation>Download</Button>
                </div>
            </form>
        </div>);
}
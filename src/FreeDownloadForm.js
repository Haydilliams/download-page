import React, { Component} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const styles = theme => ({
    root: {
        margin: theme.spacing(1),
        width: '15ch'
    }
});

class FreeDownloadForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            firstNameError: false,
            lastName: '',
            lastNameError: false,
            email: '',
            emailError: false
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }

    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value })
    }

    // kudos to https://www.w3resource.com/javascript/form/email-validation.php
    validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    errorsInForm = () => {
        return this.state.firstNameError || this.state.lastNameError || this.state.emailError;
    }

    handleSubmit = () => {
        let firstNameInvalid = this.state.firstName === "";
        let lastNameInvalid = this.state.lastName === "";
        let emailInvalid = !this.validateEmail(this.state.email);

        this.setState({
            firstNameError: firstNameInvalid,
            lastNameError: lastNameInvalid,
            emailError: emailInvalid
        });

        if (firstNameInvalid || lastNameInvalid || emailInvalid) {
            console.log("Error Present");
        } else {
            axios.post('http://localhost:5000/add-free', {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            })
                .then(res => console.log(res.data)).catch((error) => {
                    console.log(error.response);
                });
        }

    }

    render() {
        const { classes } = this.props;
        const nameErrorMessage = "Cannot be empty";
        const emailErrorMessage = "Must be valid email";

        return (<form className={classes.root} noValidate autoComplete="off">
            <TextField error={this.state.firstNameError} onChange={this.handleFirstNameChange} helperText={this.state.firstNameError && nameErrorMessage}
                required id="standard-basic" label="First Name" />
            <TextField error={this.state.lastNameError} onChange={this.handleLastNameChange} helperText={this.state.lastNameError && nameErrorMessage}
                required id="standard-basic" label="Last Name" />
            <TextField error={this.state.emailError} onChange={this.handleEmailChange} helperText={this.state.emailError && emailErrorMessage}
                required id="standard-basic" label="Email" />
            <Button onClick={this.handleSubmit} variant="contained">Default</Button>
        </form>);
    }
}

export default withStyles(styles)(FreeDownloadForm);
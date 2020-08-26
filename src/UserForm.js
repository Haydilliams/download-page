import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

export default class UserForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleButtonClick(value) {
        axios.post('http://localhost:5000/add-free', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
        })
            .then(res => console.log(res.data)).catch((error) => {
                console.log(error.response);
            });
        
        console.log("First Name: " + this.state.firstName);
        console.log("Last Name: " + this.state.lastName);
        console.log("Email Name: " +  this.state.email);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value})
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value})
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value})
    }

    render() {
        return <BasicTextFields firstNameHandler={this.handleFirstNameChange}
            lastNameHandler={this.handleLastNameChange}
            emailHandler={this.handleEmailChange}
        handler={this.handleButtonClick}></BasicTextFields>
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}));

function BasicTextFields(props) {
    const formInfo = {
        firstName: ''
    };
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField onChange={props.firstNameHandler} required id="standard-basic" label="First Name" />
            <TextField onChange={props.lastNameHandler} required id="standard-basic" label="Last Name" />
            <TextField onChange={props.emailHandler} required id="standard-basic" label="Email" />
            <Button onClick={() => props.handler('test')} variant="contained">Default</Button>
        </form>
    );
}

function handleButtonClick() {
}
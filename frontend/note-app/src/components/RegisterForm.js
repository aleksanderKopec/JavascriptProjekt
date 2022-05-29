import React from 'react';
import '../components-css/RegisterForm.css'
import MyAlert from './MyAlert';
// const axios = require('axios').default;


class RegisterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            alert: null
        }
    }
    render = () => {
        let alert = this.state.alert
        return (
            <div className='form-container register-form-container' id='form-container'>
                <form className='form register-form'>
                    <span className='form-email-label'>Email:</span>
                    <input className='form-email-input' id='form-email-input' required/>
                    <span className='form-display-name-label'>Display name:</span>
                    <input className='form-display-name-input' id='form-display-name-input' required/>
                    <span className='form-password-label'>Password:</span>
                    <input className='form-password-input' id='form-password-input' required/>
                    <button className='submit-button' id='submit-button' onClick={this.handleSubmit}>Register</button>
                </form>
                {alert ? <MyAlert title={alert.title} value={alert.value} severity={alert.severity}></MyAlert> : ''}
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.validateInput()
    }

    validateInput = () => {
        let email = document.getElementById('form-email-input').value
        let password = document.getElementById('form-password-input').value
        let displayName = document.getElementById('form-display-name-input').value
        let validationErrors = this.validateEmail(email)
        validationErrors += this.validatePassword(password)
        if (validationErrors)
        {
            this.showValidationErrorAlert(validationErrors)
        }
        if (displayName.trim() === '')
        {
            displayName = email
        }
        return {email, password, displayName}
    }

    showValidationErrorAlert = (validationErrors) => {
        this.setState({
            alert: {
                severity: 'error',
                title: 'Validation errors in form',
                value: validationErrors
    }})
        console.log(this.state)
    }

    validateEmail = (email) => {
        let notValid = ''
        email = email.trim()
        if (email === '')
        {
            notValid += 'Email cannot be empty\n'
        }
        if ((!email.includes('@')) || (!email.includes('.')))
        {
            notValid += 'Email is not valid\n'
        }
        return notValid
    }
    
    validatePassword = (password) => {
        let notValid = ''
        password = password.trim()
        if (password === '')
        {
            notValid += 'Password cannot be empty\n'
        }
        if (password.length < 6)
        {
            notValid += 'Password has to be at least 6 characters long\n'
        }
        return notValid
    }
}

export default RegisterForm;
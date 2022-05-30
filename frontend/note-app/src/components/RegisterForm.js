import React from 'react';
import '../components-css/RegisterForm.css'
import MyAlert from './MyAlert';
const axios = require('axios').default;


class RegisterForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            errorAlert: null,
        }
    }
    render = () => {
        let errorAlert = this.state.errorAlert
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
                {errorAlert ? 
                <MyAlert 
                    title={errorAlert.title} 
                    value={errorAlert.value} 
                    severity={errorAlert.severity}>
                </MyAlert> 
                : ''}
                {/* {responseAlert ? 
                <MyAlert 
                    title={responseAlert.title} 
                    value={responseAlert.value} 
                    severity={responseAlert.severity}>
                </MyAlert> 
                : ''} */}
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const validatedInput = this.validateInput()
        if (validatedInput == null) return

        axios.post('/auth/register', {
            login: validatedInput.email,
            password: validatedInput.password,
            displayName: validatedInput.displayName
        })
        .then((response) => {
            // if (response.status !== 200)
            // {
            //     throw response.data
            // }
            localStorage.setItem('token', response.data.token)
            window.location.href = '/app'
        })
        .catch((error) => {
            console.log(error)
            this.showErrorAlert(error.data.message)
        })
    }

    validateInput = () => {
        let email = document.getElementById('form-email-input').value
        let password = document.getElementById('form-password-input').value
        let displayName = document.getElementById('form-display-name-input').value
        let validationErrors = this.validateEmail(email)
        validationErrors += this.validatePassword(password)
        if (validationErrors)
        {
            this.showErrorAlert(validationErrors)
            return null
        }
        if (displayName.trim() === '')
        {
            displayName = email
        }
        return {email, password, displayName}
    }

    showErrorAlert = (errors) => {
        const alert = {
            severity: 'error',
            title: 'Errors in form',
            value: errors
        }
        this.setState({
            errorAlert: alert,
        })
    }

    validateEmail = (email) => {
        let notValid = ''
        email = email.trim()
        if (email === '')
        {
            notValid += 'Email cannot be empty<br>'
        }
        if ((!email.includes('@')) || (!email.includes('.')))
        {
            notValid += 'Email is not valid<br>'
        }
        return notValid
    }
    
    validatePassword = (password) => {
        let notValid = ''
        password = password.trim()
        if (password === '')
        {
            notValid += 'Password cannot be empty<br>'
        }
        if (password.length < 6)
        {
            notValid += 'Password has to be at least 6 characters long<br>'
        }
        return notValid
    }
}

export default RegisterForm;
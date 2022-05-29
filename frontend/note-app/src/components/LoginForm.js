import React from 'react';
// import ReactDOM from 'react-dom/client';
import '../components-css/RegisterForm.css'

class RegisterForm extends React.Component{
    render(){
        return (
            <div className='form-container login-form-container'>
                <form className='form login-form'>
                    <span className='form-email-label'>Email:</span>
                    <input className='form-email-input' id='form-email-input' required/>
                    <span className='form-password-label'>Password:</span>
                    <input className='form-password-input' id='form-password-input' required/>
                    <button className='submit-button' id='submit-button' onClick={this.handleSubmit}>Register</button>
                </form>
            </div>
        );
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("Click")
    }
}

export default RegisterForm;
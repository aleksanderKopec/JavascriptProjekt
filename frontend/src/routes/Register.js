import RegisterForm from "../components/RegisterForm";
import '../components-css/Register.css'

function Register(props){
    return(
        <div className="register-main">
            <RegisterForm></RegisterForm>
        </div>
    )
}

export default Register
import LoginForm from '../components/LoginForm'
import '../components-css/Login.css'

function Login(props){
    return(
        <div className="login-main">
            <LoginForm></LoginForm>
        </div>
    )
}

export default Login
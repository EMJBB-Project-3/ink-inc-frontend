import LoginForm from './LoginForm'
import SignUp from './SignUp'


export default function Login() {
    return (
        <div>
            <div>
                <h2>Log in</h2>
                <LoginForm />
            </div>
            <div>
                <h2>Sign Up</h2>
                <SignUp/>
            </div>

        </div>

    )


}
export default function Login(props) {
    const {username, password, newUsername, newPassword, confirmPassword} = props

    return (
        <div>
            <div>
                <h2>Log In</h2>
                <div>
                    <form>
                        <input
                        className="username"
                        value={username}
                        placeholder="Username"
                        />
                        <input
                        className="password"
                        value={password}
                        placeholder="Password"
                        />
                    </form>
                </div>
            </div>

            <h2>Create an Account</h2>



        </div>


    )

}
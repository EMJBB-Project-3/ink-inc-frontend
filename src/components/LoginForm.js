export default function LoginForm(props) {
    const {username, password, handleChangeUsername, handleChangePassword} =  props 
    return (

        <form>
            <input
                className="username"
                value={username}
                placeholder="Username"
                onChange={handleChangeUsername}
            />
            <input
                className="password"
                value={password}
                placeholder="Password"
                onChange={handleChangePassword}
            />
        </form>

    )


}
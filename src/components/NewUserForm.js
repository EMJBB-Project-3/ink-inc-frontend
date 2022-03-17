export default function LoginForm(props) {
    const {newUsername, newPassword, confirmPassword, handleChangeNewUsername, handleChangeNewPassword, handleChangeConfirmPassword} =  props 
    return (

        <form>
            <input
                className="new-username"
                value={newUsername}
                placeholder="Username"
                onChange={handleChangeNewUsername}
            />
            <input
                className="new-password"
                value={newPassword}
                placeholder="Password"
                onChange={handleChangeNewPassword}
            />
            <input
                className="confirm-password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={handleChangeConfirmPassword}
            />
        </form>

    )


}
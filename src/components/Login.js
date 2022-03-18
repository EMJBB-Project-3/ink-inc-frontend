import React, { useState } from 'react';
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'


export default function Login() {

    const [username, setUsername] = useState("")
    const handleChangeUsername = (event) => {
        // console.log('name = ', event.target.value)
        setUsername(event.target.value)
        console.log(username)
    }
    const [password, setPassword] = useState("")
    const handleChangePassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }



    const [newUsername, setNewUsername] = useState("")
    const handleChangeNewUsername = (event) => {
        // console.log('name = ', event.target.value)
        setNewUsername(event.target.value)
        console.log(newUsername)
    }
    const [newPassword, setNewPassword] = useState("")
    const handleChangeNewPassword = (event) => {
        setNewPassword(event.target.value)
        console.log(newPassword)
    }
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
        console.log(confirmPassword)
    }



    return (
        <div>
            <div>
                <h2>Log In</h2>
                <div>
                    <LoginForm
                        username={username}
                        handleChangeUsername={handleChangeUsername}
                        password={password}
                        handleChangePassword={handleChangePassword}
                    />
                </div>
            </div>

            <h2>Create an Account</h2>

            <div>
                <NewUserForm
                    newUsername={newUsername}
                    handleChangeNewUsername={handleChangeNewUsername}
                    newPassword={newPassword}
                    handleChangeNewPassword={handleChangeNewPassword}
                    confirmPassword={confirmPassword}
                    handleChangeConfirmPassword={handleChangeConfirmPassword}
                />
            </div>

        </div>


    )

}
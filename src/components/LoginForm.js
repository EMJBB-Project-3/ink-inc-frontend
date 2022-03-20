import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../utils/mutation.js'
import Auth from '../utils/auth'


const Login = (props) => {
    //use state to update the values of email and password as the user types 
    const [formState, setFormState] = useState({ email: '', password: '' });
    
    const [login, { error, data }] = useMutation(LOGIN_USER);
  
    //use state to update the values of email and password as the user types
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {  
        const { data } = await login({
          variables: { ...formState },
        });
        //pass the token to the login function in Auth.js
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
      window.location.replace('/home')
    };
  
    return (
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            {/* <h4 className="card-header bg-dark text-light p-2">Login</h4> */}
            <div className="card-body">
              {data ? (
                <p>
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="form-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    // className="btn btn-block btn-info"
                    // style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
  
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Login;
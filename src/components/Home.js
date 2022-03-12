import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
    return (
        <div className='header'>
            <nav>

                <div className="logo">
                    <h1>Ink Inc.</h1>
                </div>


                <ul className='ul-items'>
                    <li>
                        <Link to='#'>Home</Link>
                    </li>
                    <li>
                        <Link to='#'>About</Link>
                    </li>
                    <li>
                        <Link to='#'>Post</Link>
                    </li>
                    <li>
                        <Link to='#'>My Profile</Link>
                    </li>   
                    <li>
                        <button>Login/Logout</button>
                    </li>
                    <li>
                    <button>Sign up</button>
                    </li>             
                </ul>
            </nav>

       
        </div>
    )
}

export default Home
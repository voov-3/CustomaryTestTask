import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom/dist'
import {fetchAuth} from "../../redux/reducers/authReducer";
import "./SignIn.scss"

function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const onLogin = async (e) => {
        e.preventDefault()
        const fetchedData = await dispatch(fetchAuth({ email, password }))
        localStorage.setItem('token', fetchedData.payload.access)
    }


    if (isAuth) {
        return <Navigate to="/main" />
    }


    return (
        <div className='container'>
            <div className="login">
                <div className="header">Customary</div>
                <form action="submit" onSubmit={onLogin} className="loginBody">
                    <div className="loginInputs">
                        <label htmlFor="email" >Email:</label>
                        <input placeholder='Email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                    </div>
                    <div className="loginInputs">
                        <label htmlFor="password">Password:</label>
                        <input placeholder='Password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    </div>
                    <input type="submit" value="Continue" />
                </form>
            </div>
        </div>
    )
}

export default SignIn
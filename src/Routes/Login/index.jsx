import React from 'react'
import { useState } from 'react/cjs/react.development'
import InputField from '../../components/InputField'

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isFormSubmitted,_setIsFormSubitted] = useState(false);
    const [emailError, _setEmailError] = useState("");
    const [passwordError,_setPasswordError] = useState("")

    return (
        <div className="signup-page">
            <div className="signup-container">
            <h1>Login</h1>
            <form onSubmit>
                <InputField
                  label="Email"
                  value={email}
                  onChange = {(value)=>setEmail(value)}
                  isFormSubmitted={isFormSubmitted}
                  error={emailError}
                />
                <InputField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(value)=>setPassword(value)}
                  isFormSubmitted={isFormSubmitted}
                  error={passwordError}
                />
            </form>
            </div>
        </div>
    )
}

export default Login

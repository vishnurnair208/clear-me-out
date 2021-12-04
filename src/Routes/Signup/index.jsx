import React, { useState } from 'react'
import "./style.css"

const Signup = () => {


    const[formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    console.log(formData)
    const {fullName,email,password,confirmPassword} = formData;

    const onChange =(key,value)=>{
        setFormData({
            ...formData,
            [key]:value
        })
    }
    return (
        <div className="signup-page">
        <div className="signup-container">
            <h1>Signup</h1>
            <form  >
                <div className="input-field">
                    <input 
                    type="text"  
                    value={fullName}
                    onChange={(e)=>{
                       onChange("fullName",e.target.value)
                    }}/>
                    <div className={`form-label ${fullName? "filled-form-label" : ""}`}>
                        Full Name
                    </div>
                    
                </div>
                <div className="input-field">
                     <input
                      type="text" 
                      value={email}
                    onChange={(e)=>{
                       onChange("email",e.target.value)
                    }}
                      />
                    <div className={`form-label ${email? "filled-form-label" : ""}`}>
                        email
                    </div>
                  
                </div>
                <div className="input-field">
                    <input 
                    type="text" 
                    value={password}
                    onChange={(e)=>{
                       onChange("password",e.target.value)
                    }}
                    />
                    <div className={`form-label ${password? "filled-form-label" : ""}`}>
                        Password
                    </div>
                   
                </div>
                <div className="input-field">
                    <input
                     type="text" 
                     value={confirmPassword}
                    onChange={(e)=>{
                       onChange("confirmPassword",e.target.value)
                    }}
                     />
                    <div className={`form-label ${confirmPassword? "filled-form-label" : ""}`}>
                        Confirmpassword
                    </div>
                   
                </div>
            </form>
            <button className="button-signup">Sign Up</button>

        </div>
        </div>
    )
}

export default Signup

import React, { useEffect, useState } from 'react'
import "./style.css"
import { isPassword, isValidEmail } from '../../Utility/validation';
import InputField from '../../components/InputField';

const Signup = () => {
    
    
    const[formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [formDataError,setFormErrorData] = useState({
        fullNameError:"",
        emailError: "",
        passwordError: "",
        confirmPasswordError: ""
    });
    
    const[isFormSubmitted, setIsFormSubmitted] = useState(false);
    
    useEffect(()=>{console.log(formData);
            formValidate()},[formData])
    
    const {fullName,email,password,confirmPassword} = formData;
    const {fullNameError,emailError,passwordError,confirmPasswordError}= formDataError;

    const onChange =(key,value)=>{
        setFormData({
            ...formData,
            [key]:value
        })
      
    }

    const onError =(key,value)=>{
        setFormErrorData(prev=>({
            ...prev,
            [key]:value
        }))

    }

    const formValidate = ()=>{
        console.log(isValidEmail(email));
        let isValidForm = true;
        if(!isValidEmail(email)){
            onError("emailError","Enter valid email")
        }else{
            onError("emailError","")
        }
        // console.log(isPassword(password));
        if(!isPassword(password)){
            onError("passwordError","Enter valid password")
        }else{
            onError("passwordError","")
        }

        if(!confirmPassword){
            onError("confirmPasswordError","Confirm your Password")
        }else{
            if(password !== confirmPassword){
                onError("confirmPasswordError","Password miss Match!")
            }else{
                onError("confirmPasswordError","")
            }
        }
         return isValidForm;
    }

    const signUpCall = (e)=>{
        e.preventDefault();
        setIsFormSubmitted(true);
        if(formValidate()){
            console.log("signup success")
        }

    }
    return (
        <div className="signup-page">
        <div className="signup-container">
            <h1>Signup</h1>
            <form  onSubmit={signUpCall}>
                <InputField
                    value={fullName}
                    onChange={(value)=>onChange("fullName",value)}
                    label="First Name"
                    error={fullNameError}
                    isFormSubmitted={isFormSubmitted}
                />
                
                <InputField
                    value={email}
                    onChange={(value)=>onChange("email",value)}
                    label="Email"
                    error={emailError}
                    isFormSubmitted={isFormSubmitted}
                />
               <InputField
                    value={password}
                    onChange={(value)=>onChange("password",value)}
                    label="password"
                    error={passwordError}
                    isFormSubmitted={isFormSubmitted}
                />
               <InputField
                    value={confirmPassword}
                    onChange={(value)=>onChange("confirmPassword",value)}
                    label="confirmPassword"
                    error={confirmPasswordError}
                    isFormSubmitted={isFormSubmitted}
                />
            <button className="button-signup" type="submit">Sign Up</button>
            </form>

        </div>
        </div>
    )
}

export default Signup

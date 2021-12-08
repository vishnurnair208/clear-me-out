import React from 'react'
import { useState } from 'react/cjs/react.development'

const InputField = ({
    value,
    onChange,
    label,
    type="text",
    error,
    isFormSubmitted= false
}) => {
    const [blured,setBlured] = useState(false)
    return (
        <div className="input-field">
            <input
                type={type} 
                value={value}
            onChange={(e)=>onChange(e.target.value)}
            onBlur={()=>setBlured(true)}
                />
            <div className={`form-label ${value? "filled-form-label" : ""}`}>
                {label}
            </div>
            {error && (blured || isFormSubmitted) && <div className="text-field-error-text">
                {error}
                </div>}
        </div>
    )
}

export default InputField

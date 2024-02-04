import React, { useState ,useRef} from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true)
    const [errorMessage , setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);

    const handleButtonClick=()=>{
        console.log(email.current.value)
        console.log(password.current.value)
        const message=checkValidData(email.current.value,password.current.value)
        setErrorMessage(message)

    }

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute '>
            <img src ="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
            alt="backgroundimage"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'> 
        <h1 className='font-bold text-3xl py-6 '>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='my-4 p-4 w-full bg-gray-700'/>}
    
            <input ref={email} type="text" placeholder='Email or phone number' className='my-4 p-4 w-full bg-gray-700'/>
            <input ref={password} type="text" placeholder='Password' className='my-4 p-4 w-full bg-gray-700'/>
           
            <p className='text-red-700 text-lg font-bold py-2'>{errorMessage}</p>
            <button onClick={handleButtonClick} className='p-4 my-6 w-full bg-red-700'>{isSignInForm ? "Sign In" : "Sign Up"} </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}</p>
            <p className='py-2 text-sm text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        </form>
    </div>
  )
}

export default Login
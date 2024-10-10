import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginScreen() {
    
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


  return (

    

    

    <motion.div
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x : 0}}
    exit={{opacity: 0, x: -100}}
    transition={{duration: 0.5}}
    className='mx-auto'
 >
    <form className='max-w-md mx-auto bg-white p-8 rounded-lg shadow:md'>
        <h1 className='text-center text-2xl font-bold'>Sign In</h1>
        <div className='mb-4'>
            <label htmlFor='email' value={email} onChange={(e => setEmail(e.target.value))}
            className='block text-gray-500 text-sm font-bold'
            >Email</label>
            <input placeholder='enter your email'
            className='border-2 border-gray-300 p-2 w-full rounded-md outline-none'></input>
        </div>

        <div> 
            <label htmlFor='password' value={password} onChange={(e)=>setPassword(e.target.value)}
            className='block text-gray-500 text-sm font-bold'>Password</label>
            
            <input placeholder='enter your password'
            className='border-2 border-gray-300 p-2 w-full rounded:md outline-none'></input>
        </div>

        <button className="px-5 bg-blue-500 p-2 rounded-2xl text-slate-100" type='submit'>
            submit
        </button>

        <div className='py-2 text-lg font-bold text-gray-500 cursor-pointer'>
            <p>
                don't have an Account <Link to="/register" className='text-blue-600 ml-2 hover:underline'>Register</Link>
            </p>
        </div>


    </form>

 </motion.div>
    
  )
}

export default LoginScreen


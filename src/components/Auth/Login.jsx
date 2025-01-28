import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)

        setEmail("")
        setPassword("")
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center '>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium rounded-full py-2 px-6 text-lg placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email' />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none font-medium bg-transparent border-2 border-emerald-600 rounded-full py-2 px-6 text-lg mt-3 placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter password' />
                    <button
                    type='submit'
                        className='w-full mt-7 outline-nonetext-white bg-emerald-600 rounded-full py-2 px-8 text-lg placeholder:text-white'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login

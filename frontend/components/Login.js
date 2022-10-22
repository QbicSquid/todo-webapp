import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Router from 'next/router'

import { FormLabel, FormText, FormPassword, FormButton } from './common/form'
import { LinkButton } from './common/buttons'
import { login, register } from '../requests/auth'

const Login = () => {
  const [ onLogin, setOnLogin ] = useState(true)
  const [ lStorage, setLStorage ]  = useState(null)

  useEffect(() => setLStorage(localStorage  ), [])

  const handleLogin = async (event) => {
    // TOD: Add frontend validations
    event.preventDefault()

    const res = await login({
      username: document.getElementById('uname').value,
      password: document.getElementById('pass').value,
    })

    lStorage.setItem('session', JSON.stringify(res.data))

    if (res.success) Router.push('/tasks')
  }

  const handleRegister = async (event) => {
    // TOD: Add frontend validations
    event.preventDefault()

    const username = document.getElementById('uname').value
    const password = document.getElementById('pass').value
    const confirm = document.getElementById('confpass').value

    if (password != confirm) {
      toast.error('Passwords does not match')
      return
    }

    const res = await register({ username, password })

    lStorage.setItem('session', JSON.stringify(res.data))
    
    if (res.success) Router.push('/tasks')
  }

  return (
    <div className="container pt-32">
      <div className="w-1/2 p-2 mx-auto bg-white rounded-3xl">
        <div className="w-full px-1 pt-2 bg-teal-500 rounded-3xl">
          <img src="logo.svg" alt="logo" className="mx-auto" />
          <div className="w-full px-2 bg-white rounded">
            <form onSubmit={onLogin ? handleLogin : handleRegister} className="flex-wrap" method="POST">
              <FormLabel className="mt-2">Username</FormLabel>
              <FormText id="uname" name="username" />
              <FormLabel className="mt-6">Password</FormLabel>
              <FormPassword id="pass" name="password" className="" />
              <div className={`${onLogin ? 'scale-0 h-0' : 'scale-1'} overflow-hidden duration-200 ease-in-out`}>
                <FormLabel className="mt-6">Confirm Password</FormLabel>
                <FormPassword id="confpass" name="password" className="" />
              </div>
              <div className="w-full pt-4 pb-4 overflow-auto">
                <FormButton className="float-right">{onLogin ? 'Login' : 'Register'}</FormButton>
              </div>
            </form>
          </div>
          <div className="flex justify-center ">
            <p className="my-auto mr-2 text-white fontf1">{onLogin ? 'Already': 'Don\'t'} have an account?</p>
            <LinkButton onClick={() => setOnLogin(!onLogin)} className="my-auto">{onLogin ? 'Register': 'Login'}</LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

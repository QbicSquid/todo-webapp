import { useState } from 'react'
import { FormLabel, FormText, FormPassword, FormButton } from './common/form'
import { login } from '../requests/auth'

const Login = () => {
  const [ onLogin, setOnLogin ] = useState(true)

  const handleLogin = async (event) => {
    event.preventDefault()
    const res = await login({
      username: document.getElementById('uname').value,
      password: document.getElementById('pass').value,
    })
    console.log(res.data.user.username)
  }

  const handleRegister = async (event) => {
  }

  return (
    <div className="container pt-32">
      <div className="w-1/2 bg-white mx-auto rounded-3xl p-2">
        <div className="w-full bg-teal-500 rounded-3xl pt-2 px-1">
          <img src="logo.svg" alt="logo" className="mx-auto" />
          <div className="bg-white w-full px-2 rounded">
            <form onSubmit={onLogin ? handleLogin : handleRegister} className="flex-wrap">
              <FormLabel className="mt-2">Username</FormLabel>
              <FormText id="uname" name="username" />
              <FormLabel className="mt-6">Password</FormLabel>
              <FormPassword id="pass" name="password" className="" />
              <div className="pb-4 pt-4 w-full overflow-auto">
                <FormButton className="float-right">Login</FormButton>
              </div>
            </form>
          </div>
          <div className="justify-center flex">
            <p className="text-white fontf1">Don't have an account?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

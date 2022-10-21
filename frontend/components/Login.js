import { useState } from 'react'
import { FormLabel, FormText, FormPassword, FormButton } from './common/form'
import { LinkButton } from './common/buttons'
import { login } from '../requests/auth'

const Login = () => {
  const [ onLogin, setOnLogin ] = useState(true)

  const handleLogin = async (event) => {
    event.preventDefault()
    const res = await login({
      username: document.getElementById('uname').value,
      password: document.getElementById('pass').value,
    })
  }

  const handleRegister = async (event) => {
    event.preventDefault()
  }

  return (
    <div className="container pt-32">
      <div className="w-1/2 bg-white mx-auto rounded-3xl p-2">
        <div className="w-full bg-teal-500 rounded-3xl pt-2 px-1">
          <img src="logo.svg" alt="logo" className="mx-auto" />
          <div className="bg-white w-full px-2 rounded">
            <form onSubmit={onLogin ? handleLogin : handleRegister} className="flex-wrap" method="POST">
              <FormLabel className="mt-2">Username</FormLabel>
              <FormText id="uname" name="username" />
              <FormLabel className="mt-6">Password</FormLabel>
              <FormPassword id="pass" name="password" className="" />
              <div className={`${onLogin ? 'scale-0 h-0' : 'scale-1'} overflow-hidden duration-200 ease-in-out`}>
                <FormLabel className="mt-6">Confirm Password</FormLabel>
                <FormPassword id="conf  pass" name="password" className="" />
              </div>
              <div className="pb-4 pt-4 w-full overflow-auto">
                <FormButton className="float-right">{onLogin ? 'Login' : 'Register'}</FormButton>
              </div>
            </form>
          </div>
          <div className="justify-center flex ">
            <p className="text-white fontf1 mr-2 my-auto">{onLogin ? 'Already': 'Don\'t'} have an account?</p>
            <LinkButton onClick={() => setOnLogin(!onLogin)} className="my-auto">{onLogin ? 'Register': 'Login'}</LinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

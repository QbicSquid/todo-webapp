import { useState } from 'react'
import { FormLabel, FormText, FormPassword, FormButton } from './common/form'

const Login = () => {
  const { onLogin, setOnLogin } = useState(true)

  return (
    <div className="container pt-32">
      <div className="w-1/2 bg-white mx-auto rounded-3xl p-2">
        <div className="w-full bg-teal-500 rounded-3xl pt-2 px-1">
          <img src="logo.svg" alt="logo" className="mx-auto" />
          <div className="bg-white w-full px-2 rounded">
            <form action="" className="flex-wrap">
              <FormLabel className="mt-2">Username</FormLabel>
              <FormText name="username" />
              <FormLabel className="mt-6">Password</FormLabel>
              <FormPassword name="password" className="mb-6" />
              <div className="pb-4 w-full overflow-auto">
                <FormButton className="float-right">Login</FormButton>
              </div>
            </form>
          </div>
          <div className='justify-center flex'>
            <p className="text-white fontf1">Don't have an account?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

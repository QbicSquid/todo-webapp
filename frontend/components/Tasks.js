import { useState, useEffect } from 'react'

const Tasks = () => {
  const [lStorage, setLStorage] = useState(null)
  const [session, setSession] = useState(null)
  useEffect(() => setLStorage(localStorage), [])
  useEffect(() => setSession(JSON.parse(localStorage.getItem('session'))), [])

  return (
    <div className="container py-4">
      <div className="w-11/12 h-full p-2 mx-auto bg-white rounded-3xl">
        <div className="flex justify-between w-full px-1 pt-2 bg-teal-500 rounded-full">
          <div className="w-80">
            <div className="hidden pt-1 pl-5 text-3xl text-white md:inline-block">
              <p className="inline-block fontf2">11&nbsp;</p>
              <p className="inline-block fontf1">notes</p>
            </div>
          </div>
          <img src="logo.svg" alt="logo" className="inline mx-auto" />
          <div className="pt-1 pr-2 w-80">
            <div className="relative float-right p-2 overflow-hidden bg-teal-600 rounded-full bottom-1 hover:scale-105 hover:cursor-pointer active:bg-teal-700">
              <img
                src="logout.svg"
                alt="logout"
                className="relative w-9 h-9 mx-autofill-white left-1"
              />
            </div>
            <p className="hidden float-right mr-4 text-3xl text-white fonf1 md:inline-block">
              {session && session.user.username}
            </p>
          </div>
        </div>
        <div className="flex justify-center w-full overflow-hidden h-14">
          <div className='relative w-32 m-0 bg-teal-500 rounded-full h-28 bottom-16 active:bg-teal-600'>
          <img src="plus.svg" alt="plus sign" className="relative w-10 h-10 duration-300 top-16 left-11 hover:scale-105 hover:translate-y-1 hover:cursor-pointer"/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks

import { useState, useEffect } from 'react'

import { setTaskStatus } from '../requests/tasks'

const Tasks = ({ children, ...props }) => {
  const [lStorage, setLStorage] = useState(null)
  const [session, setSession] = useState(null)
  useEffect(() => setLStorage(localStorage), [])
  useEffect(() => setSession(JSON.parse(localStorage.getItem('session'))), [])

  const done = (event)  => {
    var img = document.getElementById(event.target.id)
    if (event.target.id[0] == "C") {
      img = img.firstChild
      setTaskStatus({ token: session.access_token, taskId: img.id.substring(3), status: true })
    } else
    setTaskStatus({ token: session.access_token, taskId: img.id.substring(3), status: false })
    img.toggleAttribute("hidden")
  }

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
            <div className="relative float-right p-2 overflow-hidden bg-teal-600 rounded-full bottom-1 hover:scale-105 hover:cursor-pointer active:scale-95">
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
          <div className="relative w-32 m-0 bg-teal-500 rounded-full h-28 bottom-16">
            <img
              src="plus.svg"
              alt="plus sign"
              className="relative w-10 h-10 duration-150 top-16 left-11 hover:scale-105 hover:translate-y-1 hover:cursor-pointer active:scale-95"
            />
          </div>
        </div>
        {props.data.map((task) => (
          <div className="px-3 py-1 mb-5 border border-teal-500 flexbox rounded-3xl" id={task._id} key={task._id}>
            <div className="flex justify-between">
              <p className="inline my-auto text-xl text-teal-500 fontf1">
                {task.description}
              </p>
              <div className="flex">
                <div className="w-8 h-8 mt-1 mr-5 duration-150 border-2 border-teal-500 rounded-md hover:cursor-pointer hover:scale-105 active:scale-95" id={"C" + task._id} onClick={done}>
                  <img src="check.svg" alt="check" className="relative w-8 h-8" id={"IMG" + task._id} />
                </div>
                <img
                  src="trash.svg"
                  alt="trash can"
                  className="duration-150 w-9 h-9 hover:scale-105 hover:cursor-pointer active:scale-95"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks

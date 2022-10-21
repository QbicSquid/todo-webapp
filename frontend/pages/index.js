import { useState } from 'react'

import Login from '../components/Login'
import Tasks from '../components/Tasks'
import UserContext from '../components/contexts/UserContext'

const Page = () => {
  const [user, setUser] = useState(null)

  const display = () => {
    if (user) return <Tasks />
    else return <Login />
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>{display()}</div>
    </UserContext.Provider>
  )
}

export default Page

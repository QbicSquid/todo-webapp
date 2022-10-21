import { useContext } from "react"

import UserContext from "./contexts/UserContext"

export const getServerSideProps = () => {}

const Tasks = (tasks) => {
  const { user, setUser } = useContext(UserContext)

  return(
    <div>
      <p>{user.username}</p>
      <button onClick={() => setUser(null)}>logout</button>
    </div>
  )
}

export default Tasks

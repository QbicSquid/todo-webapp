import Tasks from '../components/Tasks'
import { getAllTasks } from '../requests/tasks'

export const getServerSideProps = async (context) => {
  const session = JSON.parse(context.query.session)
  const tasks = getAllTasks(session.user._id, session.access_token)
  return { props: tasks }
}

const tasksPage = (props) => {
  return <Tasks {...props} />
}

export default tasksPage

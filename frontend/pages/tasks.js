import Tasks from '../components/Tasks'
import { getAllTasks } from '../requests/tasks'

export const getServerSideProps = async (context) => {
  const session = JSON.parse(context.query.session)
  const res = await getAllTasks(session.user._id, session.access_token)
  res.data.sort((x, y) => x.done - y.done)

  return { props: res }
}

const tasksPage = (props) => {
  return <Tasks {...props} />
}

export default tasksPage

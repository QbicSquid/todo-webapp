import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className='container'>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

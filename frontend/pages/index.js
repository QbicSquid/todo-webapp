import Router from 'next/router'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [redirected, setRedirected] = useState(false)

  useEffect(() => {
    if (!redirected) Router.push('/login')
    setRedirected(true)
  }, [])

  return <p></p>
}

export default HomePage

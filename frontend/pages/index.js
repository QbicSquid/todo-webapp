import Router from "next/router"
import { useEffect } from "react"

const HomePage = () => {
  useEffect(() => Router.push('/login'), [])

  return <p>redirecting</p>
}

export default HomePage

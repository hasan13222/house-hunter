import { Outlet } from "react-router-dom"
import Header from "../../AllShared/Header"

const Root = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  )
}

export default Root
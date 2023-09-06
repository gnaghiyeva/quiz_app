import React from 'react'
import { useUserContext } from '../../context/UserContext'
import UserNavbar from '../../components/Main/UserNavbar'
import { Outlet } from 'react-router-dom'
import UserLogin from './UserLogin'

const MainRoot = () => {
  const [user] = useUserContext()
  return (
    <>
      {/* <Navbarr/>
  <Outlet/> */}
      <>
        {
          !user?.isAdmin ? (
            <>
              <UserNavbar/>
              <Outlet />
            </>
          ) : (
            <UserLogin />
          )
        }
      </>
    </>
  )
}

export default MainRoot
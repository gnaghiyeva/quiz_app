import React from 'react'
import { useAdminContext } from '../../context/AdminContext'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/Admin/AdminNavbar'
import AdminLogin from './AdminLogin'
const AdminRoot = () => {
  const [admin] = useAdminContext()
  return (
    <>
    <>
      {
        admin?.isAdmin ? (
          <>
            <AdminNavbar />
            <Outlet />
          </>
        ) : (
          <AdminLogin/>
        )
      }
    </>
  </>
  )
}

export default AdminRoot
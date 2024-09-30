import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './Layout.scss'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Layout = () =>{
    return(
        <div className="layout">
             <div className='layout'>
       <div className='navbar'>
         <Navbar/>
       </div>
      
       <div className='content'>
        <Outlet/>
       </div>
     </div>
        </div>
    )
}

function RequireAuth (){
  const {currentUser}=useContext(AuthContext)

      return !currentUser ? (
      <Navigate to="/login"/>
    ) :(
        <div className="layout">
            <div className='layout'>
        <div className='navbar'>
        <Navbar/>
       </div>
      <div className='content'>
        <Outlet/>
      </div>
      </div>
        </div>
        )

}
export {Layout, RequireAuth};
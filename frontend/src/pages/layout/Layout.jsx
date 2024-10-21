import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import './Layout.scss'
import LoaderComp from '../homepage/loader'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Layout = () =>{
  const [isLoading, setIsLoading] = useState(true)
   setTimeout(() => {
    setIsLoading(false);
    }, 2000);
    return(

        <div className="layout">
          {isLoading?(
            <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <LoaderComp />
                </div>
          ):(<>
             <div className='layout'>
       <div className='navbar'>
         <Navbar/>
       </div>
      
       <div className='content'>
        <Outlet/>
       </div>
     </div>
     </>
     )}
        </div>
    )
}

function RequireAuth (){
  const {currentUser}=useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)
  setTimeout(() => {
   setIsLoading(false);
   }, 2000);
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
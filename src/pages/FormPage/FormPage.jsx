import { Outlet } from "react-router-dom"
import './FormPage.css'
/* ------ Components ------ */
import LeftBanner from "../../components/LeftBanner/LeftBanner"



export default function FormPage() {
  return (
    //  Main app 
    <div id="main-app" className="container mx-auto " >
      <div id="wrapper" className="flex items-center justify-center min-h-screen ">
        {/* ------ Start Forms ------ */}
        <div className="w-full lg:w-5/12">
          {/* 
            Show dynamic forms with url path.
            "/login" ===> login form
            "/signin" ===> signin form
          */}
         <Outlet />
        </div>
        {/* ------ End of Forms ------ */}
        {/* ------ Start Left banner ------ */}
        <div className=" hidden lg:flex lg:w-7/12">
          <LeftBanner />
        </div>
        {/* ------ End of Left banner ------ */}
      </div>
    </div>
    //  Main app 
  )
}

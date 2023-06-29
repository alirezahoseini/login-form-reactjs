/* ------ Components ------ */
import LoginForm from "./components/loginForm/LoginForm"
import LeftBanner from "./components/LeftBanner/LeftBanner"


function App() {

  return (
    //  Main app 
    <div id="main-app" className="container mx-auto " >
      <div id="wrapper" className="flex items-center justify-center min-h-screen ">
        {/* ------ Start Forms ------ */}
        <div className="w-full lg:w-6/12">
          <LoginForm />
        </div>
        {/* ------ End of Forms ------ */}
        {/* ------ Start Left banner ------ */}
        <div className=" hidden lg:flex lg:w-6/12">
          <LeftBanner />
        </div>
        {/* ------ End of Left banner ------ */}
      </div>
    </div>
    //  Main app 
  )
}

export default App

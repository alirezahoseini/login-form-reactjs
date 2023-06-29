/* ------ Components ------ */
import FormPage from "./pages/FormPage"; 
import LoginForm from "./components/loginForm/LoginForm";
import SigninForm from "./components/SigninForm/SigninForm";


/* ------ Routes config ------ */
const routes = [
    { path: '/', element: <FormPage /> , children: [
        { path: '/', element: <LoginForm /> },
        { path: '/login', element: <LoginForm /> },
        { path: '/signin', element: <SigninForm /> },
    ]},
]

export default routes
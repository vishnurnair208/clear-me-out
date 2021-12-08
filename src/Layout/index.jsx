
import { Outlet, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from "../assets/ClearMeOut.svg"

const Layout = () => {

    const navigate = useNavigate();

    return (
        <div className="App">
         <header>
             <div className="container">
           <div className="logo">
               <Link to="/">
               <img src={Logo} alt="" />
               </Link>
            </div>
            <div className="login">
                <Link to="login">Login</Link>
                </div>
            <button className="signup"
                onClick={
                    ()=>{
                        navigate("/signup")
                    }
                }>SignUp
            </button>
            </div>
         </header>
         <div className="body-container">
         <Outlet/>
         </div>
        </div>
    )
}

export default Layout

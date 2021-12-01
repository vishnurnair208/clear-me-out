
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from "../assets/ClearMeOut.svg"

const Layout = () => {
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
            <button className="signup">
                <Link to="signup">SignUp</Link>
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

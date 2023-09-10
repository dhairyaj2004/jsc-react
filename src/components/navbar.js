import {Link} from "react-router-dom";

import logo from "./logo-jsc_1.png"
const Navbar = () => {
  
    return ( 
        <div className="navbar">
               <img src={logo} alt="" />
            <h1>JUNIOR  SCIENCE  COLLEGE</h1>
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Material">Study Material</Link>
            <Link to="/fees">Online Fees</Link>
            <Link to="/success">Success Stories</Link>
            <Link to="/Signin">Sign In</Link>
            <Link to="/register">Sign Up</Link>

         </div>

        </div>
     );
}
 
export default Navbar;
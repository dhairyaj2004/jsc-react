import {Link} from "react-router-dom";

// import logo from "./src/components/logo-jsc(1).png"
const Navbar = () => {
  
    return ( 
        <div className="navbar">
               {/* <img src={logo} alt="logo" /> */}
            <h1>JUNIOR  SCIENCE  COLLEGE</h1>
         <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Material">Study Material</Link>
            <Link to="/fees">Online Fees</Link>
            <Link to="/success">Success Stories</Link>
         </div>

        </div>
     );
}
 
export default Navbar;